import { PokemonsSearch } from './PokemonsSearch'
import { PokemonsResult } from './PokemonsResult'

export const PokemonsList = () => {
    return (
        <div className="w-fit mx-auto my-20">
            <PokemonsSearch />
            <PokemonsResult />
        </div>
    )
}
