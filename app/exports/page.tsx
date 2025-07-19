import Image from "next/image";
import { EXPORTS_CONTENT } from "@/lib/constants";
import { formatImageUrl } from "@/lib/utils";
import ContactCTASection from "@/components/sections/ContactCTASection";
import { CONTACT_CTA } from "@/lib/constants";
import AnimatedHeading from "@/components/animations/AnimatedHeading";

export const metadata = {
  title: "Global Exports - GR Group",
  description: "Premium products, trusted sourcing, and seamless delivery across global markets. We deliver what we promise — excellence in every shipment.",
};

export default function ExportsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={formatImageUrl("photo-1586528116311-ad8dd3c8310d", 1920, 1080)}
            alt="Global shipping and logistics"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal mb-6 leading-tight">
            {EXPORTS_CONTENT.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {EXPORTS_CONTENT.subtitle}
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {EXPORTS_CONTENT.description}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedHeading 
              as="h2" 
              className="font-serif text-4xl md:text-5xl text-gray-900 mb-6"
              animationType="words"
            >
              Our Capabilities
            </AnimatedHeading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive export solutions backed by years of experience and a global network of trusted partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {EXPORTS_CONTENT.features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-lg p-8 h-full transition-all duration-300 hover:shadow-lg hover:bg-gray-100">
                  <h3 className="font-serif text-xl text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedHeading 
              as="h2" 
              className="font-serif text-4xl md:text-5xl text-gray-900 mb-6"
              animationType="slide"
            >
              Industries We Serve
            </AnimatedHeading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across multiple industries, ensuring specialized knowledge and tailored solutions for every sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPORTS_CONTENT.industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-medium text-gray-900 text-lg">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="font-serif text-3xl md:text-4xl text-gray-900 mb-8 leading-relaxed">
            &ldquo;{EXPORTS_CONTENT.testimonial}&rdquo;
          </blockquote>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedHeading 
              as="h2" 
              className="font-serif text-4xl md:text-5xl text-gray-900 mb-6"
              animationType="fade"
            >
              Our Process
            </AnimatedHeading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial consultation to final delivery, we ensure a seamless experience at every step of the export process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                1
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-4">
                Consultation & Planning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We work closely with you to understand your requirements and develop a customized export strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                2
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-4">
                Sourcing & Quality Control
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our network of trusted suppliers ensures premium products that meet rigorous quality standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                3
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-4">
                Logistics & Delivery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless logistics management ensures your products reach their destination on time and in perfect condition.
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