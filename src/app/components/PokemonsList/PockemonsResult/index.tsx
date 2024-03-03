import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { getPokemonsList } from "@/api/pokemons/api";

export const PokemonsResult= () => {
    const pokemons = getPokemonsList()

    return (
        <div className="flex flex-wrap">
            {pokemons.map(pokemonItem => (
                <Card key={pokemonItem.url}>
                    <CardContent>
                        {pokemonItem.name}
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
