"use client"
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
export const SearchButton = () => {
    const { toast } = useToast()

    return (
        <Button
            className="h-12 px-6 text-base"
            onClick={() => {
                toast({
                    title: "Not implemented on API part",
                    description: "Please read TODO in codebase"
                })
            }}
        >
            Search
        </Button>
    )
}
