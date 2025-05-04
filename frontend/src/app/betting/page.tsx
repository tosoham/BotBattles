import BettingInterface from "../../components/betting-interface";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white font-pixel p-4">
      <div className="container mx-auto max-w-6xl">
        <BettingInterface />
      </div>
    </main>
  );
}
