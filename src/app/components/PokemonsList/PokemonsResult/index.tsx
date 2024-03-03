import { getPokemonsList } from "@/api/pokemons/api";
import { PokemonCard } from "./PokemonCard";

export const PokemonsResult= () => {
    const pokemons = getPokemonsList()

    return (
        <div className="flex flex-wrap">
            {pokemons.map(pokemonItem => (
                <PokemonCard key={pokemonItem.details.id} pokemon={pokemonItem} />
            ))}
        </div>
    )
}
