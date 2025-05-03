export type Agent = {
  id: number;
  name: string;
  image: string;
  performance: number; // 0-100 scale for the colored bar
};

export type Transaction = {
  hash: string;
  status: "pending" | "confirmed" | "failed";
  message: string;
  timestamp: number;
};
