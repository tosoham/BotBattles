"use client";

import { useState, useEffect, useRef } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  type Connector,
} from "@starknet-react/core";
import { Wallet } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { WalletDropdown } from "./wallet-dropdown";
import { truncateAddress } from "@/utils/wallet";
import WalletConnectModal from "./wallet-connect-modal";

export function WalletConnectButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const handleConnect = () => {
    if (isConnected) {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      setIsModalOpen(true);
      setConnectionError(null);
    }
  };

  const handleDisconnect = () => {
    disconnect();
    setIsDropdownOpen(false);
    localStorage.removeItem("lastUsedConnector");
  };

  const handleConnectorSelect = async (connector: Connector) => {
    if (!connector) return;

    setIsConnecting(true);
    setConnectionError(null);

    try {
      await connect({ connector });

      if (connector.id) {
        localStorage.setItem("lastUsedConnector", connector.id);
      }

      // Only close modal after successful connection
      setIsModalOpen(false);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to connect wallet";
      console.error("Wallet connection error:", errorMessage);
      setConnectionError(errorMessage);
    } finally {
      setIsConnecting(false);
    }
  };

  // Handle dropdown hover behavior
  const handleMouseEnter = () => {
    if (isConnected) {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
        dropdownTimeoutRef.current = null;
      }
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }

    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  // Listen for wallet_disconnected events
  useEffect(() => {
    const handleWalletDisconnected = () => {
      setIsDropdownOpen(false);
    };

    window.addEventListener("wallet_disconnected", handleWalletDisconnected);

    return () => {
      window.removeEventListener(
        "wallet_disconnected",
        handleWalletDisconnected
      );

      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Connect Button */}
      <button
        onClick={handleConnect}
        className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-pixel rounded-none"
      >
        <Wallet className="w-4 h-4" />
        {isConnected && address ? truncateAddress(address) : "Connect Wallet"}
      </button>

      {/* Wallet Connect Modal */}
      <WalletConnectModal
        isOpen={isModalOpen}
        onClose={() => {
          if (!isConnecting) {
            setIsModalOpen(false);
            setConnectionError(null);
          }
        }}
        onSelect={async (walletId) => {
          const connector = connectors.find((c) => c.id === walletId);
          if (connector) {
            await handleConnectorSelect(connector);
          }
        }}
      />

      {/* Wallet Dropdown */}
      {isConnected && address && (
        <WalletDropdown
          isOpen={isDropdownOpen}
          onClose={() => setIsDropdownOpen(false)}
          address={address}
          onDisconnect={handleDisconnect}
        />
      )}
    </div>
  );
}
