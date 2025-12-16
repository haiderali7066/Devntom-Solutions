import {
  PlayCircle,
  Users,
  CheckCircle2,
  Award,
  Users2,
  FileText,
  MessageCircle,
  Search,
  Zap,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Users,
      title: "Website Development",
      description:
        "We build custom, responsive websites – from WordPress to e-commerce stores – with ongoing maintenance for peak performance.",
    },
    {
      icon: FileText,
      title: "SEO (Search Engine Optimization)",
      description:
        "We boost your rankings with complete SEO solutions – from on-page optimization to local SEO and e-commerce product listings for maximum organic growth.",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Solutions",
      description:
        "Boost engagement with WhatsApp API integration, bulk messaging & AI chatbots for 24/7 customer support and lead management.",
    },
    {
      icon: Zap,
      title: "Digital Marketing",
      description:
        "We amplify your brand through strategic social media management, targeted ads, and engaging content marketing to boost conversions and visibility.",
    },
    {
      icon: Award,
      title: "Brand Enhancement",
      description:
        "Enhance your brand with our graphic design, professional video editing, and reliable domain/hosting services for a powerful online presence.",
    },
  ];
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-block border-l-4 border-blue-600 pl-4 mb-4">
              <p className="text-sm font-semibold text-blue-600">
                Our Services
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              We Provide Best Virtual Assistant Service
            </h2>

            <button
              className="
            bg-blue-600 hover:bg-blue-700 text-white font-semibold
            py-3 px-8 transition
            rounded-tl-2xl rounded-br-2xl
            rounded-tr-none rounded-bl-none
          "
            >
              View All Services
            </button>
          </div>
        </div>

        {/* SERVICES */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="
              group p-8 border border-gray-200 bg-white
              transition-all duration-300
              hover:bg-blue-600 hover:border-blue-600
              rounded-tl-3xl rounded-br-3xl
              rounded-tr-none rounded-bl-none
            "
              >
                {/* ICON */}
                <div
                  className="
                w-12 h-12 mb-6 flex items-center justify-center transition
                bg-blue-100 group-hover:bg-white
                rounded-tl-xl rounded-br-xl
                rounded-tr-none rounded-bl-none
              "
                >
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-blue-600" />
                </div>

                {/* TITLE */}
                <h3
                  className="
                text-xl font-bold mb-4 transition
                text-gray-900 group-hover:text-white
              "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                text-gray-600 leading-relaxed transition
                group-hover:text-blue-100
              "
                >
                  {service.description}
                </p>

                {/* READ MORE — HIDDEN BY DEFAULT */}
                <div
                  className="
                mt-6 opacity-0 translate-y-2
                transition-all duration-300
                group-hover:opacity-100 group-hover:translate-y-0
              "
                >
                  <a
                    href="#"
                    className="text-white font-semibold inline-flex items-center"
                  >
                    Read More
                    <span className="ml-2 transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            );
          })}

          {/* SOFTWARE SOLUTIONS CARD (STATIC FEATURE CARD) */}
          <div
            className="
    group md:col-span-1 md:row-span-2
    p-8 border border-gray-200 bg-white
    transition-all duration-300
    hover:bg-blue-600 hover:border-blue-600
    rounded-tl-4xl rounded-br-4xl
    rounded-tr-none rounded-bl-none
    flex flex-col justify-center
  "
          >
            <h3
              className="
      text-2xl font-bold mb-4 transition
      text-gray-900 group-hover:text-white
    "
            >
              Software Solutions
            </h3>

            <p
              className="
      text-gray-600 leading-relaxed mb-6 transition
      group-hover:text-blue-100
    "
            >
              We develop custom desktop apps, ERP/CRM systems, and cloud-based
              SaaS platforms to automate and optimize your business operations.
            </p>

            {/* READ MORE — HIDDEN BY DEFAULT */}
            <div
              className="
      opacity-0 translate-y-2
      transition-all duration-300
      group-hover:opacity-100 group-hover:translate-y-0
    "
            >
              <a
                href="#"
                className="inline-flex items-center font-semibold text-white"
              >
                Read More
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
