import HeroSection from "@/components/sections/HeroSection";
import BusinessVerticalsSection from "@/components/sections/BusinessVerticalsSection";
import ContactCTASection from "@/components/sections/ContactCTASection";
import { HERO_CONTENT, BUSINESS_VERTICALS, CONTACT_CTA } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      <HeroSection
        headline={HERO_CONTENT.headline}
        subtext={HERO_CONTENT.subtext}
        ctaText={HERO_CONTENT.ctaText}
        ctaLink={HERO_CONTENT.ctaLink}
        backgroundImage={HERO_CONTENT.backgroundImage}
      />
      <BusinessVerticalsSection verticals={BUSINESS_VERTICALS} />
      <ContactCTASection
        headline={CONTACT_CTA.headline}
        description={CONTACT_CTA.description}
        ctaText={CONTACT_CTA.ctaText}
        ctaLink={CONTACT_CTA.ctaLink}
      />
    </main>
  );
}
