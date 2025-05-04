export type Agent = {
  id: number;
  name: string;
  image: string;
  performance: number;
};

export type Transaction = {
  hash: string;
  status: "pending" | "confirmed" | "failed";
  message: string;
  timestamp: number;
};
