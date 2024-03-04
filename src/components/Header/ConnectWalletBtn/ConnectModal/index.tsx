"use client"
import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";

import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"

import WalletConnectOption from "../WalletConnectOption";
import { ConnectModalProps } from "./interface";
import { NETWORKS } from "@/lib/networks";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ConnectModal = ({ open, toggleModal }: ConnectModalProps) => {
    const { isConnected, chainId } = useAccount()
    const { connectors, connect } = useConnect()
    const { disconnect } = useDisconnect()
    const { switchChain } = useSwitchChain()
    const modalTitle = isConnected ? "Account" : " Select Wallet"
    const isWrongNetwork = chainId !== NETWORKS.Sepolia.chainId

    const switchNetwork = () => {
        switchChain({chainId: NETWORKS.Sepolia.chainId})
    }

    return (
        <Dialog open={open}>
            <DialogContent className="focus-visible:outline-none" onInteractOutside={toggleModal}>
                <Card className="bg-secondary border-none p-8">
                    <CardHeader className="flex justify-center items-center p-4 text-foreground">
                        {modalTitle}
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        <div>
                            {isConnected && isWrongNetwork && <Button onClick={switchNetwork}>Switch to {NETWORKS.Sepolia.name}</Button>}
                            {!isConnected &&
                                connectors.map((connector) => (
                                    <WalletConnectOption
                                        key={connector.uid}
                                        connector={connector}
                                        onClick={() => connect({ connector })}
                                    />
                                )
                            )}
                            {isConnected && (
                                <Button variant="outline" onClick={() => disconnect()}>
                                    Disconnect
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </DialogContent>
        </Dialog>
    )
}

export default ConnectModal
