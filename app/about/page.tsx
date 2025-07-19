import Image from "next/image";
import Timeline from "@/components/ui/Timeline";
import ContactCTASection from "@/components/sections/ContactCTASection";
import { TIMELINE_ITEMS, CONTACT_CTA } from "@/lib/constants";
import { formatImageUrl } from "@/lib/utils";
import AnimatedHeading from "@/components/animations/AnimatedHeading";

export const metadata = {
  title: "About Us - GR Group",
  description: "Learn about GR Group's journey, philosophy, and vision for redefining lifestyle and driving global change through our multidisciplinary approach.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={formatImageUrl("photo-1497366216548-37526070297c", 1920, 1080)}
            alt="Modern office building representing GR Group's vision"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal mb-6 leading-tight">
            About GR Group
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Redefining Lifestyle. Driving Global Change.
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A multidisciplinary conglomerate building bridges between premium products, unforgettable experiences, and innovative ventures.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedHeading 
                as="h2" 
                className="font-serif text-4xl md:text-5xl text-gray-900 mb-8"
                animationType="words"
              >
                Our Philosophy
              </AnimatedHeading>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At GR Group, we believe that true innovation happens at the intersection of diverse industries and perspectives. Our multidisciplinary approach allows us to see opportunities where others see boundaries.
                </p>
                <p>
                  We are committed to excellence in everything we do, from sourcing premium products for global markets to creating unforgettable experiences that build brands and move markets. Our vision extends beyond traditional business models to embrace sustainability, craftsmanship, and conscious consumerism.
                </p>
                <p>
                  Every partnership we forge, every event we create, and every venture we launch is guided by our core principle: to redefine lifestyle while driving meaningful global change.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src={formatImageUrl("photo-1552664730-d307ca884978", 600, 400)}
                alt="Team collaboration representing GR Group's philosophy"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedHeading 
              as="h2" 
              className="font-serif text-4xl md:text-5xl text-gray-900 mb-6"
              animationType="slide"
            >
              Leadership & Vision
            </AnimatedHeading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our leadership team brings together decades of experience across diverse industries, united by a shared vision for innovation and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent-alt rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-serif text-2xl font-bold">GR</span>
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-2">
                Global Exports Leadership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Driving excellence in international trade with a focus on premium products and trusted partnerships across global markets.
              </p>
            </div>

            <div className="text-center bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent-alt rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-serif text-2xl font-bold">SE</span>
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-2">
                Signature Events Leadership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Creating unforgettable experiences that make headlines, build brands, and move markets through innovative event management.
              </p>
            </div>

            <div className="text-center bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent-alt rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-serif text-2xl font-bold">FV</span>
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-2">
                Future Ventures Leadership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pioneering sustainable lifestyle ventures and creative collaborations that shape the future of conscious consumerism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedHeading 
              as="h2" 
              className="font-serif text-4xl md:text-5xl text-gray-900 mb-6"
              animationType="fade"
            >
              Our Journey
            </AnimatedHeading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From our founding vision to our ambitious future plans, explore the milestones that define GR Group&apos;s evolution and growth.
            </p>
          </div>

          <Timeline items={TIMELINE_ITEMS} className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedHeading 
              as="h2" 
              className="font-serif text-4xl md:text-5xl text-gray-900 mb-6"
              animationType="words"
            >
              Our Values
            </AnimatedHeading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every partnership we forge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We deliver what we promise — excellence in every shipment, event, and venture.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We see opportunities where others see boundaries, constantly pushing the limits of what&apos;s possible.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-4">
                Sustainability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our future ventures prioritize conscious consumerism and sustainable practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-4">
                Collaboration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of partnerships to create meaningful impact and drive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTASection
        headline={CONTACT_CTA.headline}
        description={CONTACT_CTA.description}
        ctaText={CONTACT_CTA.ctaText}
        ctaLink={CONTACT_CTA.ctaLink}
      />
    </main>
  );
}