import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VotingSection from "@/components/VotingSection";
import Leaderboard from "@/components/Leaderboard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight-900">
      <Header />
      <Hero />
      <VotingSection />
      <Leaderboard />
      <Footer />
    </main>
  );
}
