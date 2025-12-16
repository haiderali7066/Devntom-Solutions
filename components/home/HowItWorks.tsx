

export default function HowItWorks() {
  return (
    <section className="px-6 md:px-16 lg:px-28 py-20 text-center">
      {/* Small heading */}
      <p className="text-blue-700 font-semibold mb-2">— How Devntom Works</p>

      {/* Main title */}
      <h2 className="text-3xl md:text-4xl font-bold">
        Simplifying Your Path to Success
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-2xl mx-auto mt-4">
        Devntom streamlines your business processes with smart digital
        solutions, so you can focus on growth and achieve success effortlessly:
      </p>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-12 mt-16">
        {/* STEP 1 */}
        <div>
          <h1 className="text-6xl font-bold text-gray-200">01</h1>
          <div className="w-20 h-[1px] bg-gray-300 mx-auto my-3"></div>

          <h3 className="text-xl font-semibold">Share Your Needs</h3>
          <p className="text-gray-600 mt-2">
            Tell us about your project requirements and business goals. We
            listen carefully to understand exactly what you need to succeed.
          </p>
        </div>

        {/* STEP 2 */}
        <div>
          <h1 className="text-6xl font-bold text-gray-200">02</h1>
          <div className="w-20 h-[1px] bg-gray-300 mx-auto my-3"></div>

          <h3 className="text-xl font-semibold">Meet Your Dedicated Team</h3>
          <p className="text-gray-600 mt-2">
            We’ll match you with pre-vetted experts perfectly suited for your
            project. Review and approve your team before we begin.
          </p>
        </div>

        {/* STEP 3 */}
        <div>
          <h1 className="text-6xl font-bold text-gray-200">03</h1>
          <div className="w-20 h-[1px] bg-gray-300 mx-auto my-3"></div>

          <h3 className="text-xl font-semibold">Launch & Monitor Progress</h3>
          <p className="text-gray-600 mt-2">
            Your project kicks off immediately with regular updates and
            transparent progress tracking for complete peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
}