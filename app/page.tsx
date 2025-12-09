import Header from "@/components/header"
import HomePage from "@/components/home";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section"
import MissionSection from "@/components/mission-section"
import ServicesSection from "@/components/services-section"
import StatsBar from "@/components/stats-bar"
import StatsSection from "@/components/stats-section"
import ClientsSection from "@/components/clients-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HomePage />
      <Footer />
      {/* <HeroSection />
      <StatsSection />
      <ClientsSection />
      <MissionSection />
      <StatsBar />
      <ServicesSection />
      <CTASection /> */}
    </main>
  );
}
