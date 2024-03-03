import { getPokemonsList } from "@/api/pokemons/api";
import { PokemonCard } from "./PokemonCard";

export const PokemonsResult= () => {
    const pokemons = getPokemonsList()

    return (
        <div className="grid grid-cols-3 gap-x-[47.5px] gap-y-[37px]">
            {pokemons.map(pokemonItem => (
                <PokemonCard key={pokemonItem.details.id} pokemon={pokemonItem}/>
            ))}
        </div>
    )
}
