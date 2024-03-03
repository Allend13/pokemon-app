import { POKEMON_MOCK, POKEMONS_LIST_MOCK } from "@/api/pokemons/mock";
import { PokemonDetailedItem } from "@/api/pokemons/types";

export const getPokemonsList = (): PokemonDetailedItem[]  => {
    return POKEMONS_LIST_MOCK.map(pokemonBaseItem => ({
        ...pokemonBaseItem,
        details: POKEMON_MOCK
    }))
}
