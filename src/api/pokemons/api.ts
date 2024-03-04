import {
    PokemonsListResult,
    PokemonDetailedItem,
    Pokemon,
} from "@/api/pokemons/types";

export const getPokemonByName = async (pokemonName: string): Promise<Pokemon> => {
    const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
    return await pokemonData.json()
}


type QueryParams = {
    search?: string | undefined
    offset?: number
    limit?: number
}

type QueryParamsStringified = {
    search?: string | undefined
    offset: string
    limit: string
}
//TODO: NOTICE FOR REVIEW:
// Better create Apollo GraphQL BFF with caching for aggregating data,
// but leaving for simplicity REST in NextJS
export const getPokemonsList = async ({ search, offset = 0, limit = 20 }: QueryParams): Promise<PokemonDetailedItem[]> => {
    const searchParamsObj: QueryParamsStringified = { offset: `${offset}`, limit: `${limit}` }
    if (search) searchParamsObj['search'] = search

    //TODO: No infite scroll implemented. So no limit/offset change
    // We suppose it would be in next release :)
    const searchParams = new URLSearchParams(searchParamsObj)

    //TODO: NOTICE FOR REVIEW: SEARCH IS NOT SUPPORTED BY API.
    // WE JUST SUPPOSE THAT IT COULD HAVE
    // Or we could implement caching all list on NextJs / DB and than filtering ourselfs
    const listResult = await fetch(`https://pokeapi.co/api/v2/pokemon?${searchParams.toString()}`)

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
