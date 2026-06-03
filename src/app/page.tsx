import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import {
  MusicPreview,
  SermonPreview,
  AboutPreview,
} from "@/components/HomePreviewSections";
import PrayerSection from "@/components/PrayerSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <HeroSection />
      <MusicPreview />
      <SermonPreview />
      <PrayerSection />
      <AboutPreview />
      <Footer />
    </main>
  );
}
