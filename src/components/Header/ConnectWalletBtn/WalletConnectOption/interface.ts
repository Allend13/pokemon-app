import {Connector} from "wagmi";

export type WalletOptionProps = {
    connector: Connector
    onClick: () => void
}
