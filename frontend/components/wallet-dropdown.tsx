"use client";

import { useRef, useEffect } from "react";
import { LogOut, ExternalLink, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { truncateAddress } from "@/utils/wallet";

interface WalletDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  address: string;
  onDisconnect: () => void;
}

export function WalletDropdown({
  isOpen,
  onClose,
  address,
  onDisconnect,
}: WalletDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  const explorerUrl = `https://voyager.online/contract/${address}`;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-64 bg-gray-800 border-2 border-green-500 shadow-lg z-50 font-pixel"
    >
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Connected Wallet</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-medium text-white">
            {truncateAddress(address)}
          </span>
          <button
            onClick={copyToClipboard}
            className="text-gray-400 hover:text-white"
            aria-label="Copy address"
          >
            {copied ? (
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
      <div className="p-2">
        <Link
          href={explorerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white w-full text-left"
        >
          <ExternalLink className="w-4 h-4" />
          View on Explorer
        </Link>
        <button
          onClick={onDisconnect}
          className="flex items-center gap-2 px-3 py-2 text-red-400 hover:bg-gray-700 hover:text-red-300 w-full text-left"
        >
          <LogOut className="w-4 h-4" />
          Disconnect
        </button>
      </div>
    </div>
  );
}
