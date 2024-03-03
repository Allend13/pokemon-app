import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

export const PokemonsSearch = () => {
    return (
        <div className="pb-12 flex items-center">
            <div className="mr-8 pr-6">
                <h3 className="text-2xl font-semibold">
                    Search
                </h3>
            </div>
            <div className="mr-8">
                <Input style={{ minWidth: 635 }} />
            </div>
            <div className="mr-8">
                <Button>Search</Button>
            </div>
        </div>
    )
}
