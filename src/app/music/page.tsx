import Navbar from "@/components/Navbar";
import MusicPageContent from "@/components/MusicPageContent";
import Footer from "@/components/Footer";

export default function Music() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <MusicPageContent />
      <Footer />
    </main>
  );
}
