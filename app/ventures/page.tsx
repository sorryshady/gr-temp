import ContactCTASection from "@/components/sections/ContactCTASection";
import { CONTACT_CTA, VENTURES_CONTENT } from "@/lib/constants";
import { formatImageUrl } from "@/lib/utils";
import Image from "next/image";

export const metadata = {
  title: "Lifestyle Ventures - GR Group",
  description: "Fashion-forward sustainable brands that merge sustainability with craftsmanship for conscious consumers. Coming Soon.",
};



export default function VenturesPage() {
  return (
    <main>
      {/* Hero Section with Coming Soon Badge */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={formatImageUrl("photo-1441986300917-64674bd600d8", 1920, 1080)}
            alt="Fashion and lifestyle"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium mb-8 animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Coming Soon
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal mb-6 leading-tight">
            {VENTURES_CONTENT.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {VENTURES_CONTENT.subtitle}
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {VENTURES_CONTENT.description}
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8">
            Our Vision
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            {VENTURES_CONTENT.vision}
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
              Our Foundation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four core pillars guide our approach to building sustainable lifestyle brands that make a positive impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {VENTURES_CONTENT.pillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
                <h3 className="font-serif text-2xl text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Initiatives Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
              What&apos;s Coming
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Exciting initiatives launching throughout 2025 that will redefine how we think about lifestyle and consumption.
            </p>
          </div>

          <div className="space-y-8">
            {VENTURES_CONTENT.upcomingInitiatives.map((initiative, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-serif text-2xl text-gray-900 mb-2">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    {initiative.description}
                  </p>
                  <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                    {initiative.timeline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">
            Values That Drive Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="font-serif text-xl mb-4 text-orange-400">
                Sustainability
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Every decision considers environmental impact and long-term sustainability.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl mb-4 text-orange-400">
                Craftsmanship
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Celebrating traditional skills while embracing innovative techniques.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl mb-4 text-orange-400">
                Community
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Building connections between creators, artisans, and conscious consumers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="py-24 bg-orange-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Be the first to know when our lifestyle ventures launch. Join our community of conscious consumers and creative collaborators.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors duration-300">
            <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
            Coming Soon - Stay Tuned
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTASection
        headline={CONTACT_CTA.headline}
        description="Interested in partnering with us on sustainable lifestyle ventures? Let's discuss how we can create something meaningful together."
        ctaText={CONTACT_CTA.ctaText}
        ctaLink={CONTACT_CTA.ctaLink}
      />
    </main>
  );
}