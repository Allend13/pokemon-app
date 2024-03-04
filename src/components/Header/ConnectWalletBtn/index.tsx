"use client"
import { useState, useEffect } from "react";
import { useAccount, useBalance } from "wagmi";
import { sepolia } from 'wagmi/chains'

import { Button } from '@/components/ui/button'
import { formatTokenWithCommas, trimAddress } from "@/lib/formatters";
import ConnectModal from "./ConnectModal";

import { POLLING_INTERVAL } from "./constants";

export const ConnectButton = () => {
    const {address, isConnected, chainId} = useAccount()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const {data: balance} = useBalance({
        address,
        query: {
            refetchInterval: POLLING_INTERVAL
        }
    })

    const isWrongNetwork = chainId !== sepolia.id
    const balanceText = balance ? `${formatTokenWithCommas(balance.value, balance.decimals)} ${balance?.symbol}` : "--"

    let btnText = "Loading"
    if (typeof window !== "undefined" && isClient) {
        if (!isConnected) {
            btnText = "Connect Wallet"
        } else if (address && isConnected) {
            btnText = isWrongNetwork ? "Wrong Network" : trimAddress(address)
        }
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="flex items-center">
            <div className="mr-10">Balance: {balanceText}</div>
            <Button variant="outline" onClick={toggleModal}>{btnText}</Button>
            <ConnectModal open={isModalOpen} toggleModal={toggleModal}/>
        </div>
    )
}

