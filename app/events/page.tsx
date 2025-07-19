import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { EVENTS_CONTENT } from "@/lib/constants";
import ContactCTASection from "@/components/sections/ContactCTASection";
import { CONTACT_CTA } from "@/lib/constants";
import AnimatedHeading from "@/components/animations/AnimatedHeading";
import Copy from "@/components/animations/Copy";

export const metadata = {
  title: "Signature Events - GR Group",
  description:
    "Luxury automobile showcases, product launches, experiential marketing, and corporate gatherings. Our events make headlines, build brands, and move markets.",
};

export default function EventsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ResponsiveImage
            unsplashId="photo-1492684223066-81342ee5ff30"
            width={1920}
            height={1080}
            alt="Luxury event showcase"
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

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Copy>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal mb-6 leading-tight">
              {EVENTS_CONTENT.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {EVENTS_CONTENT.subtitle}
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {EVENTS_CONTENT.description}
            </p>
          </Copy>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedHeading
              as="h2"
              className="font-serif text-4xl md:text-5xl text-gray-900 mb-6"
              animationType="words"
            >
              Event Capabilities
            </AnimatedHeading>
            <Copy>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We specialize in creating exceptional experiences across
                multiple event categories, each designed to deliver maximum
                impact and lasting impressions.
              </p>
            </Copy>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {EVENTS_CONTENT.eventTypes.map((eventType, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-lg p-8 h-full transition-all duration-300 hover:shadow-lg hover:bg-gray-100">
                  <Copy>
                    <h3 className="font-serif text-2xl text-gray-900 mb-4">
                      {eventType.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {eventType.description}
                    </p>
                  </Copy>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Copy>
            <blockquote className="font-serif text-3xl md:text-4xl text-gray-900 mb-8 leading-relaxed">
              &ldquo;{EVENTS_CONTENT.testimonial}&rdquo;
            </blockquote>
          </Copy>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedHeading
              as="h2"
              className="font-serif text-4xl md:text-5xl text-gray-900 mb-6"
              animationType="slide"
            >
              Notable Events
            </AnimatedHeading>
            <Copy>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A selection of our signature events that have made headlines and
                delivered exceptional results for our clients.
              </p>
            </Copy>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENTS_CONTENT.pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300"
              >
                <Copy>
                  <h3 className="font-medium text-gray-900 text-lg">{event}</h3>
                </Copy>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedHeading
              as="h2"
              className="font-serif text-4xl md:text-5xl text-gray-900 mb-6"
              animationType="fade"
            >
              Our Event Process
            </AnimatedHeading>
            <Copy>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From concept to execution, we manage every detail to ensure your
                event exceeds expectations and achieves its objectives.
              </p>
            </Copy>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                1
              </div>
              <Copy>
                <h3 className="font-serif text-xl text-gray-900 mb-4">
                  Strategy & Concept
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We develop a comprehensive event strategy aligned with your
                  brand objectives and target audience.
                </p>
              </Copy>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                2
              </div>
              <Copy>
                <h3 className="font-serif text-xl text-gray-900 mb-4">
                  Planning & Design
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Detailed planning and creative design ensure every element
                  contributes to an exceptional experience.
                </p>
              </Copy>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                3
              </div>
              <Copy>
                <h3 className="font-serif text-xl text-gray-900 mb-4">
                  Production & Setup
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional production and meticulous setup create the
                  perfect environment for your event.
                </p>
              </Copy>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                4
              </div>
              <Copy>
                <h3 className="font-serif text-xl text-gray-900 mb-4">
                  Execution & Follow-up
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Flawless execution and comprehensive follow-up ensure lasting
                  impact and measurable results.
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedHeading
              as="h2"
              className="font-serif text-4xl md:text-5xl text-gray-900 mb-6"
              animationType="words"
            >
              Event Showcase
            </AnimatedHeading>
            <Copy>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Visual highlights from our signature events, showcasing the
                quality and attention to detail that defines our work.
              </p>
            </Copy>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
              <ResponsiveImage
                unsplashId="photo-1540575467063-178a50c2df87"
                width={800}
                height={600}
                alt="Luxury automobile showcase"
                quality={80}
                className="w-full h-full group-hover:scale-105"
                brightness={-5}
                contrast={10}
                sizes={{
                  mobile: "100vw",
                  tablet: "50vw",
                  desktop: "33vw",
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
              <ResponsiveImage
                unsplashId="photo-1511578314322-379afb476865"
                width={800}
                height={600}
                alt="Product launch event"
                quality={80}
                className="w-full h-full group-hover:scale-105"
                brightness={-5}
                contrast={10}
                sizes={{
                  mobile: "100vw",
                  tablet: "50vw",
                  desktop: "33vw",
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
              <ResponsiveImage
                unsplashId="photo-1505236858219-8359eb29e329"
                width={800}
                height={600}
                alt="Corporate gathering"
                quality={80}
                className="w-full h-full group-hover:scale-105"
                brightness={-5}
                contrast={10}
                sizes={{
                  mobile: "100vw",
                  tablet: "50vw",
                  desktop: "33vw",
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
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
