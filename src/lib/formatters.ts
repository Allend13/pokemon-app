import { formatUnits } from "viem";

export const trimAddress = (
    address: string,
    maxLength: number | undefined = 6,
) =>
    `${address.slice(0, 6)}..${address.slice(-(maxLength - 2), address.length)}`


export const formatTokenWithCommas = (
    amount: bigint,
    decimals: number
) => {
    const parsedAmount = parseFloat(formatUnits(amount, decimals))

    return parsedAmount.toLocaleString(
        "en-US",
        {
            maximumFractionDigits: 3,
        },
    )
}
