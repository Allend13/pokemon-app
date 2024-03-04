"use client"

import { useEffect, useState } from "react";
import { Button } from '@/components/ui/button'

import { WalletOptionProps } from "./interface";

const WalletOption = ({connector, onClick}: WalletOptionProps) => {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        (async () => {
            const provider = await connector.getProvider()
            setReady(!!provider)
        })()
    }, [connector])

    return (
        <Button variant="outline" disabled={!ready} onClick={onClick} className="w-full my-3">
            {connector.name}
        </Button>
    )
}

export default WalletOption
