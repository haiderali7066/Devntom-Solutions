
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/cta-business-background.jpg)",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-white"
        style={{
          borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
          transform: "scaleY(1.5)",
        }}
      />
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center min-h-96">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl text-balance">
          Smarter Growth Starts Here
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Get started with expert digital solutions designed for your success –
          seamless service, faster results, and smarter growth.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-colors">
          Start Consultation
        </Button>
      </div>
    </section>
  );
}