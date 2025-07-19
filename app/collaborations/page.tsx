import ContactCTASection from "@/components/sections/ContactCTASection";
import { COLLABORATIONS_CONTENT, CONTACT_CTA } from "@/lib/constants";
import { formatImageUrl } from "@/lib/utils";
import Image from "next/image";
import AnimatedHeading from "@/components/animations/AnimatedHeading";

export const metadata = {
  title: "Collaborations & Community - GR Group",
  description: "Co-creating the future through partnerships with entrepreneurs, agencies, and artists. Building creative hubs and impact-first ventures. Coming Soon.",
};



export default function CollaborationsPage() {
  return (
    <main>
      {/* Hero Section with Coming Soon Badge */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={formatImageUrl("photo-1522202176988-66273c2fd55f", 1920, 1080)}
            alt="Collaboration and teamwork"
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
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
            {COLLABORATIONS_CONTENT.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {COLLABORATIONS_CONTENT.subtitle}
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {COLLABORATIONS_CONTENT.description}
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedHeading 
            as="h2" 
            className="font-serif text-4xl md:text-5xl text-gray-900 mb-8"
            animationType="words"
          >
            Our Collaboration Vision
          </AnimatedHeading>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            {COLLABORATIONS_CONTENT.vision}
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedHeading 
              as="h2" 
              className="font-serif text-4xl md:text-5xl text-gray-900 mb-6"
              animationType="slide"
            >
              Our Focus Areas
            </AnimatedHeading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four key areas where we&apos;re building infrastructure and programs to support meaningful collaborations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {COLLABORATIONS_CONTENT.focusAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="font-serif text-2xl text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedHeading 
              as="h2" 
              className="font-serif text-4xl md:text-5xl text-gray-900 mb-6"
              animationType="fade"
            >
              Who We Collaborate With
            </AnimatedHeading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re building partnerships across diverse creative and entrepreneurial communities.
            </p>
          </div>

          <div className="space-y-12">
            {COLLABORATIONS_CONTENT.collaborationTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <h3 className="font-serif text-3xl text-gray-900 mb-4">
                      {type.category}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                  <div className="lg:w-2/3">
                    <h4 className="font-medium text-gray-900 mb-4 text-lg">
                      Collaboration Opportunities:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {type.opportunities.map((opportunity, oppIndex) => (
                        <div key={oppIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{opportunity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Programs Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedHeading 
              as="h2" 
              className="font-serif text-4xl md:text-5xl mb-6"
              animationType="words"
            >
              Launching in 2025
            </AnimatedHeading>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Exciting programs and initiatives that will bring our collaboration vision to life.
            </p>
          </div>

          <div className="space-y-8">
            {COLLABORATIONS_CONTENT.upcomingPrograms.map((program, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors duration-300">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="font-serif text-2xl mb-2 md:mb-0">
                        {program.title}
                      </h3>
                      <div className="flex gap-3">
                        <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                          {program.timeline}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-gray-600 text-gray-200 text-sm font-medium rounded-full">
                          {program.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action for Collaborators */}
      <section className="py-24 bg-orange-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedHeading 
            as="h2" 
            className="font-serif text-4xl md:text-5xl text-gray-900 mb-6"
            animationType="slide"
          >
            Ready to Collaborate?
          </AnimatedHeading>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re an entrepreneur with a bold vision, a creative agency looking for innovative partnerships, or an artist seeking meaningful collaboration opportunities, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors duration-300">
              <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
              Applications Opening Soon
            </div>
            <div className="inline-flex items-center px-6 py-3 border-2 border-orange-500 text-orange-600 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-colors duration-300">
              Join Our Waitlist
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTASection
        headline={CONTACT_CTA.headline}
        description="Interested in exploring collaboration opportunities? Let's discuss how we can work together to create something extraordinary."
        ctaText={CONTACT_CTA.ctaText}
        ctaLink={CONTACT_CTA.ctaLink}
      />
    </main>
  );
}