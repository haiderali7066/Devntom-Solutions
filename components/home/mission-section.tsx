export default function MissionSection() {
  return (
    <section className="w-full py-16 px-4 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image and Core Values Box */}
          <div className="relative">
            {/* Team photo */}
            <img
              src="/diverse-team-professionals-collaborating-in-office.jpg"
              alt="Team collaborating on business solutions"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />

            {/* Core Values Box - Positioned absolutely at bottom */}
            <div className="absolute bottom-0 left-0 right-0 -mb-12 lg:-mb-16">
              <div className="bg-blue-600 text-white rounded-2xl p-6 md:p-8 shadow-lg max-w-md">
                <h3 className="text-xl md:text-2xl font-bold mb-6">Our Core Value</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-green-300 font-bold text-lg flex-shrink-0">✓</span>
                    <p className="text-sm md:text-base">Focusing on real solutions for your success.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-300 font-bold text-lg flex-shrink-0">✓</span>
                    <p className="text-sm md:text-base">We provide accurate, human support.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-300 font-bold text-lg flex-shrink-0">✓</span>
                    <p className="text-sm md:text-base">We save you time, cut costs, and boost results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content and Benefit Cards */}
          <div className="lg:pl-8 pt-16 lg:pt-0">
            {/* Mission tagline */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-blue-600"></div>
              <p className="text-blue-600 font-semibold text-sm md:text-base">Your Growth, Our Mission</p>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We simplify your business, so you can grow faster.
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              At Zyrom, we help businesses grow by streamlining operations with smart digital solutions. Our expert team
              saves you time, reduces costs, and boosts efficiency—so you can focus on scaling with confidence.
            </p>

            {/* Benefit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-blue-600 rounded-2xl p-6 text-white hover:shadow-lg transition-shadow">
                <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Boost Productivity with Smart Solutions</h3>
                <p className="text-sm md:text-base text-blue-100">
                  At Zyrom, we help businesses maximize efficiency by automating repetitive tasks and streamlining
                  workflows—so your team can focus on what truly matters.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-blue-600 rounded-2xl p-6 text-white hover:shadow-lg transition-shadow">
                <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Save Time, Focus on Growth</h3>
                <p className="text-sm md:text-base text-blue-100">
                  Zyrom's smart digital solutions handle repetitive and time-consuming tasks, freeing your team to focus
                  on strategic work and business growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
