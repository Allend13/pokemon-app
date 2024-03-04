import { PokemonsSearch } from "./components/PokemonsSearch";
import { PokemonsResult } from "./components/PokemonsResult";
import { QUERY_KEY } from "@/api/pokemons/constants";
import {getPokemonsList} from "@/api/pokemons/api";

const Home = async ({ searchParams }: {
  searchParams?: { query?: string }
}) => {
  const search = searchParams?.[QUERY_KEY] || ""
  const pokemons = await getPokemonsList({ search  })

  return (
      <>
        <PokemonsSearch />
        <PokemonsResult pokemons={pokemons} />
      </>
  );
}

export default Home
