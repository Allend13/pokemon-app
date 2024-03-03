import Image from "next/image"
import logo from './assets/logo.svg'

export const Header = () => {
    return (
        <div className="h-24 border-b--border border-b-4 flex justify-center items-center">
            <Image src={logo} alt="Obol Pokemon list" height={24} />
        </div>
    )
}
