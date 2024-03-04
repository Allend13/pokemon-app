import Image from "next/image"

import { ConnectButton } from "./ConnectWalletBtn";
import logo from './assets/logo.svg'

export const Header = () => {
    return (
        <div className="h-24 border-b--border border-b-4 flex justify-center items-center relative">
            <Image src={logo} alt="Obol Pokemon list" height={24} />

            <div className="absolute right-20 top-0 bottom-0 flex items-center ">
                <ConnectButton />
            </div>
        </div>
    )
}
