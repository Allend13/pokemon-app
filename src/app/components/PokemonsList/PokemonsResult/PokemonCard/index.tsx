import {
    Card,
    CardContent, CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { PokemonCardProps } from "./types";
import Image from "next/image";
import {PokemonDialog} from "@/app/components/PokemonsList/PokemonsResult/PokemonCard/PokemonDialog";

export const PokemonCard = ({ pokemon } : PokemonCardProps) => {
    const formattedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    return (
        <Card className="w-[395px] bg-secondary border-none">
            <CardHeader className="h-[222px] bg-card rounded-t-lg flex justify-center items-center">
                <Image src={pokemon.details.sprites.front_default} alt={pokemon.name} width="100" height="100"/>
            </CardHeader>
            <CardContent className="p-8 flex flex-col items-center gap-y-8">
                <div>
                    <div className="text-secondary-foreground text-center text-lg mb-2">
                        {formattedName}
                    </div>
                    <div className="text-muted text-lg text-center">
                        {pokemon.details.abilities.slice(0,3).map((ability) => (
                            <div key={ability.ability.url}>
                                {ability.ability.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <Button className="h-12 px-6 text-base">Collect</Button>
                </div>
                <PokemonDialog pokemon={pokemon} />
            </CardContent>
        </Card>
    )
}
