"use client"

import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
    id: string;
    amount: number;
    username: string;
    email: string;
    status: "pending" | "processing" | "success" | "failed";
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "username",
        header: "User",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({row}) => {
            const status = row.getValue("status");

            return (
                <div className={cn(
                    status === "processing" && "text-blue-500",
                    status === "pending" && "text-yellow-500",
                    status === "success" && "text-green-500",
                    status === "failed" && "text-red-500",
                )}>
                {status as string}</div>
            )
        }
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "PKR",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
]