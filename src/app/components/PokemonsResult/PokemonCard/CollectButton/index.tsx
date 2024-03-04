"use client"
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
export const CollectButton = () => {
    const { toast } = useToast()

    return (
        <Button
            className="h-12 px-6 text-base"
            onClick={() => {
                toast({
                    title: "Not implemented",
                })
            }}
        >
            Collect
        </Button>
    )
}
