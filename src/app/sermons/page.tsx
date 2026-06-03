import Navbar from "@/components/Navbar";
import SermonsPage from "@/components/SermonsPage";
import Footer from "@/components/Footer";

export default function Sermons() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <SermonsPage />
      <Footer />
    </main>
  );
}
