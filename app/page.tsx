
import Hero from "@/components/home/Hero";
import Servicesgsap from "@/components/home/Services-gsap";
import Overview from "@/components/home/overview";
import Whyus from "@/components/home/WhyUs";
import IndustriesWeServe2 from "@/components/home/industries2";
import CtaSection from "@/components/home/CtaSection";
import Casestudy from "@/components/web-dev/casestudy";
import Testimonials2 from "@/components/web-dev/testiminials2";
import Faq from "@/components/home/Faq";



export default function Home() {
  return (
    <main className="w-full">
     

      <Hero />
      <Overview />
      <IndustriesWeServe2 />
      <Servicesgsap />
      <Whyus />
      <Casestudy />
      <Testimonials2 />
      <CtaSection />
      <Faq />
    </main>
  );
}
