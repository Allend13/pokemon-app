import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import arrow from "@/app/components/PokemonsResult/PokemonCard/assets/arrow.svg";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PokemonCardProps } from "@/app/components/PokemonsResult/PokemonCard/types";

export const PokemonDialog = ({ pokemon } : PokemonCardProps) => {
    const formattedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    return(
        <Dialog>
            <DialogTrigger asChild>
                <div className="text-primary text-base flex gap-x-2 cursor-pointer">
                    <div>Details</div>
                    <Image src={arrow} alt="Arrow"/>
                </div>
            </DialogTrigger>
            <DialogContent className="focus-visible:outline-none">
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
                                <div>Height: {pokemon.details.height} ft</div>
                                <div>Weight: {pokemon.details.weight} lb</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </DialogContent>
        </Dialog>
    )
}
