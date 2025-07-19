import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { EXPORTS_CONTENT } from "@/lib/constants";
import ContactCTASection from "@/components/sections/ContactCTASection";
import { CONTACT_CTA } from "@/lib/constants";
import AnimatedHeading from "@/components/animations/AnimatedHeading";
import Copy from "@/components/animations/Copy";

export const metadata = {
  title: "Global Exports - GR Group",
  description:
    "Premium products, trusted sourcing, and seamless delivery across global markets. We deliver what we promise — excellence in every shipment.",
};

export default function ExportsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ResponsiveImage
            unsplashId="photo-1586528116311-ad8dd3c8310d"
            width={1920}
            height={1080}
            alt="Global shipping and logistics"
            priority
            quality={85}
            className="w-full h-full opacity-40"
            brightness={-10}
            contrast={5}
            sizes={{
              mobile: "100vw",
              tablet: "100vw",
              desktop: "100vw",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Copy>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 sm:mb-6 leading-tight">
              {EXPORTS_CONTENT.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {EXPORTS_CONTENT.subtitle}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {EXPORTS_CONTENT.description}
            </p>
          </Copy>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <AnimatedHeading
              as="h2"
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6"
              animationType="words"
            >
              Our Capabilities
            </AnimatedHeading>
            <Copy>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We provide comprehensive export solutions backed by years of
                experience and a global network of trusted partners.
              </p>
            </Copy>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {EXPORTS_CONTENT.features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-lg p-6 sm:p-8 h-full transition-all duration-300 hover:shadow-lg hover:bg-gray-100 touch-manipulation">
                  <Copy>
                    <h3 className="font-serif text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </Copy>
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
            <Copy>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our expertise spans across multiple industries, ensuring
                specialized knowledge and tailored solutions for every sector.
              </p>
            </Copy>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPORTS_CONTENT.industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Copy>
                  <h3 className="font-medium text-gray-900 text-lg">
                    {industry}
                  </h3>
                </Copy>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Copy>
            <blockquote className="font-serif text-3xl md:text-4xl text-gray-900 mb-8 leading-relaxed">
              &ldquo;{EXPORTS_CONTENT.testimonial}&rdquo;
            </blockquote>
          </Copy>
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
            <Copy>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From initial consultation to final delivery, we ensure a
                seamless experience at every step of the export process.
              </p>
            </Copy>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                1
              </div>
              <Copy>
                <h3 className="font-serif text-xl text-gray-900 mb-4">
                  Consultation & Planning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We work closely with you to understand your requirements and
                  develop a customized export strategy.
                </p>
              </Copy>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                2
              </div>
              <Copy>
                <h3 className="font-serif text-xl text-gray-900 mb-4">
                  Sourcing & Quality Control
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our network of trusted suppliers ensures premium products that
                  meet rigorous quality standards.
                </p>
              </Copy>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                3
              </div>
              <Copy>
                <h3 className="font-serif text-xl text-gray-900 mb-4">
                  Logistics & Delivery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Seamless logistics management ensures your products reach
                  their destination on time and in perfect condition.
                </p>
              </Copy>
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
