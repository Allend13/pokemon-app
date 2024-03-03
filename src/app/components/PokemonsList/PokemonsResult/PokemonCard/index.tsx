import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { PokemonCardProps } from "./types";

export const PokemonCard = ({ pokemon } : PokemonCardProps) => {
    return (
        <Card className="m-2.5 p-2.5 bg-background border-border">
            <CardContent>
                <div className="mr-8 pr-6">
                    {pokemon.name}
                </div>
                <div className="mr-8">
                    <Button>Collect</Button>
                </div>
            </CardContent>
        </Card>
    )
}
