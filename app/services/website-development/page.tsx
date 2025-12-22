import Hero from "@/components/web-dev/Hero";
import Overview from "@/components/web-dev/overview"
import Whyus from "@/components/web-dev/whyus";
import Whatwebuild from "@/components/web-dev/whatwebuild";
import Ourapproach from "@/components/web-dev/our-approach";
import Industries from "@/components/web-dev/industries";
import TechStack from "@/components/web-dev/tech-sack";
// import Features from "@/components/web-dev/features";
// import Testimonials from "@/components/web-dev/testimonials";
import Testimonials2 from "@/components/web-dev/testiminials2";
import Faq from "@/components/web-dev/faq";
import Awards from "@/components/web-dev/awards";
import Casestudy from "@/components/web-dev/casestudy";
import Getintouch from "@/components/web-dev/get-in-touch";

export default function WebDev() {
  return (
    <div>
      <Hero></Hero>
      <Overview></Overview>
      <Whatwebuild></Whatwebuild>
      <Whyus></Whyus>
      <Ourapproach></Ourapproach>
      <TechStack></TechStack>
      <Industries></Industries>
      {/* <Features></Features> */}
      {/* <Testimonials></Testimonials> */}
      <Testimonials2></Testimonials2>
      <Casestudy></Casestudy>
      <Awards></Awards>
      <Faq></Faq>
      <Getintouch></Getintouch>
    </div>
  );
}