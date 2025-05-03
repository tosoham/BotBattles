"use client";

import { useState, useCallback } from "react";
import { useAccount } from "@starknet-react/core";
import { Transaction } from "../types/betting";
import { placeBet as placeBetOnChain } from "../lib/starknet";

export function useBetting() {
  const { address } = useAccount();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const placeBet = useCallback(
    async (agentId: number, amount: string) => {
      if (!address) {
        throw new Error("Wallet not connected");
      }

      setIsLoading(true);

      try {
        // Create a pending transaction record
        const pendingTx: Transaction = {
          hash: "pending-" + Date.now(),
          status: "pending",
          message: `Placing bet of ${amount} ETH on agent #${agentId}...`,
          timestamp: Date.now(),
        };

        setTransactions((prev) => [pendingTx, ...prev]);

        // Call the StarkNet contract
        const result = await placeBetOnChain(agentId, amount);

        // Update the transaction status
        setTransactions((prev) =>
          prev.map((tx) =>
            tx.hash === pendingTx.hash
              ? {
                  hash: result.transactionHash,
                  status: "confirmed",
                  message: `Successfully placed bet of ${amount} ETH on agent #${agentId}`,
                  timestamp: Date.now(),
                }
              : tx
          )
        );

        return result;
      } catch (error) {
        console.error("Transaction failed:", error);

        // Update the transaction status to failed
        setTransactions((prev) =>
          prev.map((tx) =>
            tx.hash === "pending-" + Date.now().toString().slice(0, -3)
              ? {
                  hash: "failed-" + Date.now(),
                  status: "failed",
                  message: `Failed to place bet: ${
                    error instanceof Error ? error.message : "Unknown error"
                  }`,
                  timestamp: Date.now(),
                }
              : tx
          )
        );

        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [address]
  );

  return {
    transactions,
    isLoading,
    placeBet,
  };
}
