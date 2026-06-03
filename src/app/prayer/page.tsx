import Navbar from "@/components/Navbar";
import PrayerPageContent from "@/components/PrayerPageContent";
import Footer from "@/components/Footer";

export default function Prayer() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <PrayerPageContent />
      <Footer />
    </main>
  );
}
