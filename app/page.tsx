// import Header from "@/components/header";
// import Footer from "@/components/footer";

import Hero from "@/components/home/Hero";
import Logos from "@/components/home/Logos";
import Services from "@/components/home/Services";
import Mission from "@/components/home/Mission";
import StatsBar from "@/components/home/StatsBar";
import CtaSection from "@/components/home/CtaSection";
import HowItWorks from "@/components/home/HowItWorks";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
  return (
    <main className="w-full">
      {/* <Header /> */}
      <Hero />
      <Logos />
      <Services />
      <Mission />
      <StatsBar />
      <CtaSection />
      <HowItWorks />
      <WhyUs />
      {/* <Footer /> */}
    </main>
  );
}
