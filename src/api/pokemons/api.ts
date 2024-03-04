import {
    PokemonsListResult,
    PokemonDetailedItem,
    Pokemon,
} from "@/api/pokemons/types";

export const getPokemonByName = async (pokemonName: string): Promise<Pokemon> => {
    const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
    return await pokemonData.json()
}

// NOTICE:
// Better create Apollo GraphQL BFF with caching for aggregating data,
// but leaving for simplicity REST in NextJS
export const getPokemonsList = async (): Promise<PokemonDetailedItem[]> => {
    const listResult = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15')

    // Try Catch not here, but should be :)
    const pokemonsList: PokemonsListResult = await listResult.json()

    const pokemonsDetails = await Promise.all(pokemonsList.results.map(({ name }) => getPokemonByName(name)))
    const pokemonsDetailsByName: { [key: string]: Pokemon } = { }
    pokemonsDetails.forEach(pokemonsDetails => {
        pokemonsDetailsByName[pokemonsDetails.name] = pokemonsDetails
    })

    return pokemonsList.results.map(pokemonListItem => ({
        ...pokemonListItem,
        details: pokemonsDetailsByName[pokemonListItem.name]
    }))
}
