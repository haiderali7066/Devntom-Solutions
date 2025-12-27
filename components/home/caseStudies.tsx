export default function CaseStudies() {
  const projects = [
    { title: "E-commerce Web App", img: "/projects/ecommerce.png" },
    { title: "Mobile App Launch", img: "/projects/mobile.png" },
    { title: "Marketing Campaign", img: "/projects/marketing.png" },
    { title: "Custom Software", img: "/projects/software.png" },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative group h-[320px] rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <span className="text-white font-semibold text-lg">
                  {p.title} →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
