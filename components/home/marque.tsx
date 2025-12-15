// components/MarqueeCSS.tsx
import Image from "next/image";

type Client = { name: string; logo: string };

export default function Marquee({ clients }: { clients: Client[] }) {
  // duplicate the array so the loop is seamless
  const items = [...clients, ...clients];

  return (
    <div className="w-full bg-white py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="marquee-track">
          <div className="marquee-inner">
            {items.map((client, i) => (
              <div key={i} className="marquee-item">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={140}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scoped CSS */}
      <style jsx>{`
        .marquee-track {
          width: 100%;
          overflow: hidden;
        }
        .marquee-inner {
          display: flex;
          gap: 2.5rem;
          align-items: center;
          /* animation: move-left linear infinite; duration set inline for easier tuning */
          animation: move-left 20s linear infinite;
          will-change: transform;
        }
        .marquee-item {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 140px; /* try 120-160 for slim logos */
          height: 60px;
          opacity: 0.9;
          transition: transform 200ms ease, opacity 200ms ease;
        }
        .marquee-item:hover {
          transform: scale(1.05);
          opacity: 1;
        }

        @keyframes move-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Make it smoother on small screens (faster) */
        @media (max-width: 640px) {
          .marquee-inner {
            animation-duration: 12s;
            gap: 1.25rem;
          }
          .marquee-item {
            width: 110px;
            height: 44px;
          }
        }
      `}</style>
    </div>
  );
}
