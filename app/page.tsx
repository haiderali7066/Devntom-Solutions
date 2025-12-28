
import Hero from "@/components/home/Hero";
import Servicesgsap from "@/components/home/Services-gsap";
import Overview from "@/components/home/overview";
import Whyus from "@/components/home/WhyUs";
import IndustriesWeServe2 from "@/components/home/industries2";
import CtaSection from "@/components/home/CtaSection";
import Casestudy from "@/components/home/caseStudies";
import Testimonials2 from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import Approuch from "@/components/home/approach";



export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Overview />
      <IndustriesWeServe2 />
      <Servicesgsap />
      <Whyus />
      <Approuch/>
      <Testimonials2 />
      <CtaSection />
      <Faq />
      <Casestudy />
    </main>
  );
}
