import Image from "next/image";

const awardsTop = [
  {
    img: "/awards/inc5000.png",
    text: "Named Among Inc 5000 Fastest Growing Companies for Third Consecutive Year",
  },
  { img: "/awards/forbes.png", text: "Forbes Business Council Member" },
  { img: "/awards/ft.png", text: "Recognized by Financial Times" },
  {
    img: "/awards/mogul.png",
    text: "Listed in Mogul's Top People Leaders & CHROs",
  },
  {
    img: "/awards/top10.png",
    text: "Officially ranked among the Top 10 Inspiring Workplaces across Asia – 2025",
  },
  {
    img: "/awards/clutch.png",
    text: "Listed in Top B2B Companies 2022 by Clutch",
  },
];

const awardsBottom = [
  { img: "/awards/cmmi.png", text: "CMMI DEV 3" },
  { img: "/awards/iso9001.png", text: "ISO 9001" },
  { img: "/awards/iso27001.png", text: "ISO 27001" },
  { img: "/awards/iso20000.png", text: "ISO 20000" },
];

export default function AwardsExact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900">
            Awards & Certifications
          </h2>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            We are proud of the recognition we have received demonstrating our
            industry leading practices and capabilities.
          </p>
        </div>

        {/* MAIN GRID CONTAINER */}
        <div className="border border-gray-200">
          {/* TOP ROW – 6 COLUMNS */}
          <div className="grid grid-cols-6">
            {awardsTop.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center px-6 py-12 border-r border-gray-200 last:border-r-0"
              >
                <div className="relative w-20 h-20 mb-6">
                  <Image
                    src={item.img}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-800 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          

          {/* BOTTOM ROW – CENTERED 4 COLUMNS */}
          <div className="grid grid-cols-6 border-t border-gray-200">
            {/* EMPTY CELLS FOR CENTERING */}
            <div className="border-r border-gray-200" />
            {awardsBottom.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center py-12 border-r border-gray-200"
              >
                <div className="relative w-20 h-20 mb-4">
                  <Image
                    src={item.img}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-gray-900">{item.text}</p>
              </div>
            ))}
            <div />
          </div>
        </div>
      </div>
    </section>
  );
}
