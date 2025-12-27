export default function TechStack() {
  const tech = [
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "WordPress",
    "Shopify",
    "Flutter",
  ];

  return (
    <section className="py-28 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-12">Our Technology Stack</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {tech.map((t, i) => (
          <span
            key={i}
            className="px-6 py-3 border border-white/20 hover:border-sky-500 transition"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
