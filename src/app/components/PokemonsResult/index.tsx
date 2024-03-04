import { PokemonCard } from "./PokemonCard";
import { PokemonsResultProps } from "./types";

export const PokemonsResult = ({ pokemons }: PokemonsResultProps) => {
    return (
        <div className="grid grid-cols-3 gap-x-[47.5px] gap-y-[37px]">
            {pokemons.map(pokemonItem => (
                <PokemonCard key={pokemonItem.details.id} pokemon={pokemonItem}/>
            ))}
        </div>
    )
}
