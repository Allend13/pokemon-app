"use client"

import { ChangeEvent, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebounce } from "react-use";

import { Input } from "@/components/ui/input"
import  { QUERY_KEY } from "@/api/pokemons/constants";
import { SearchButton } from "./SearchButton";

const DEBOUNCE_SEARCH_TIMEOUT = 200

export const PokemonsSearch = () => {
    const [searchValue, setSearchValue] = useState<string | undefined>()
    const { replace } = useRouter()
    const searchParams = useSearchParams()
    const path = usePathname()

    useDebounce(() => {
        const newSearchParams = new URLSearchParams(searchParams)

        if (searchValue) {
            newSearchParams.set(QUERY_KEY, searchValue)
        } else {
            newSearchParams.delete(QUERY_KEY)
        }
        replace(`${path}?${newSearchParams.toString()}`)
    }, DEBOUNCE_SEARCH_TIMEOUT, [searchValue])

    const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(evt.target.value)
    }

    return (
        <div className="pb-12 flex items-center">
            <div className="mr-8 pr-6">
                <h3 className="text-2xl font-semibold">
                    Search
                </h3>
            </div>
            <div className="mr-8">
                <Input style={{ minWidth: 635 }} onChange={handleSearch} />
            </div>
            <div className="mr-8">
                <SearchButton />
            </div>
        </div>
    )
}
