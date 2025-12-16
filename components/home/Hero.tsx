import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full lg:h-[75vh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 bg-fixed">
      {/* Background images / shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left top abstract shape */}
        <div className="absolute top-20 -left-96 w-96 h-96 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <path
              d="M 0 100 L 400 0"
              stroke="rgba(59, 130, 246, 0.6)"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M 0 150 L 400 50"
              stroke="rgba(59, 130, 246, 0.4)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 0 200 L 400 100"
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Bottom right abstract shape */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <path
              d="M 0 0 Q 200 100 400 0 L 400 400 L 0 400 Z"
              fill="url(#grad1)"
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Optional subtle shapes */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 opacity-10 rounded-lg border border-blue-400 transform -rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 opacity-5 rounded-full border border-cyan-300"></div>

        {/* Robot image as background */}
        <div className="absolute inset-0">
          {/* <Image
              src="/3d-robot-ai-artificial-intelligence-laptop-screen-.jpg"
              alt="AI Robot background"
              fill
              className="object-cover opacity-10 pointer-events-none"
              priority
            /> */}
          <video
            src="/videos/v7.webm"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          ></video>
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          <div className="text-white space-y-6 lg:w-full lg:pl-12">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-blue-400"></div>
              <span className="text-blue-300 font-medium">Since 2023</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-balance">
              Empowering Businesses With Innovative Digital Solutions
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-7/12">
              Devntom Solutions specializes in AI-powered solutions, web
              development, and digital transformation to accelerate your online
              growth and business success.
            </p>
            <div className="pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-lg font-semibold">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
