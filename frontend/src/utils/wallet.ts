/**
 * Truncates an address for display purposes
 * @param address The full address to truncate
 * @returns The truncated address (e.g. 0x1234...5678)
 */
export function truncateAddress(address: string): string {
  if (!address) return "";
  if (address.length <= 10) return address;

  return `${address.substring(0, 6)}...${address.substring(
    address.length - 4,
  )}`;
}
