"use client"
import React from "react"
import { WagmiConfig } from "wagmi"

import { config } from "@/lib/config";
import { GenericProviderProps } from './types'

export const WagmiProvider = ({ children }: GenericProviderProps) => {
    return <WagmiConfig config={config}>{children}</WagmiConfig>
}
