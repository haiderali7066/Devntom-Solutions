export default function Process() {
  const steps = [
    "Discovery & Strategy",
    "UI / UX Design",
    "Development",
    "Testing & Optimization",
    "Launch & Support",
  ];

  return (
    <section className="py-28 bg-sky-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16">Our Process</h2>

        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className="p-8 bg-white border hover:border-sky-500 transition"
            >
              <span className="text-sky-500 font-bold text-lg">0{i + 1}</span>
              <p className="mt-4 font-medium">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
