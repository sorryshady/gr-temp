"use client";

import { useState, useRef, useEffect } from "react";
import { gsap, createScrollTrigger } from "@/lib/gsap";
import { SITE_CONFIG } from "@/lib/constants";
import { formatEmailLink } from "@/lib/utils";
import type { ContactForm } from "@/types";
import AnimatedHeading from "@/components/animations/AnimatedHeading";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !formRef.current || !infoRef.current) return;

    // Hero section animation
    const heroTl = gsap.timeline({ paused: true });
    const heroElements = heroRef.current.children;

    heroTl.fromTo(
      heroElements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      },
    );

    // Form section animation
    const formTl = gsap.timeline({ paused: true });
    const formElements = formRef.current.children;

    formTl.fromTo(
      formElements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
      },
    );

    // Info section animation
    const infoTl = gsap.timeline({ paused: true });
    const infoElements = infoRef.current.children;

    infoTl.fromTo(
      infoElements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
      },
    );

    // Create scroll triggers
    createScrollTrigger(heroRef.current, heroTl, { start: "top 80%" });
    createScrollTrigger(formRef.current, formTl, { start: "top 80%" });
    createScrollTrigger(infoRef.current, infoTl, { start: "top 80%" });

    return () => {
      heroTl.kill();
      formTl.kill();
      infoTl.kill();
    };
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // For now, we'll use mailto as a fallback
      // In a real implementation, you'd send this to your backend API
      const subject = `Business Inquiry from ${formData.name}`;
      const body = `Name: ${formData.name}
Email: ${formData.email}
${formData.company ? `Company: ${formData.company}` : ""}

Message:
${formData.message}`;

      const mailtoLink = formatEmailLink(SITE_CONFIG.email, subject, body);
      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="main-content" role="main">
      {/* Hero Section */}
      <section
        className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-gray-50 to-white"
        aria-labelledby="contact-hero-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div ref={heroRef}>
            <h1
              id="contact-hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              Let&apos;s Build Something Exceptional
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to explore partnership opportunities or discuss your next
              project? We&apos;re here to turn ambitious ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <div ref={formRef}>
              <AnimatedHeading
                as="h2"
                className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 sm:mb-8"
                animationType="words"
                triggerOnScroll={false}
              >
                Send Us a Message
              </AnimatedHeading>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-base ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your full name"
                    required
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-1 text-sm text-red-600"
                      role="alert"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-base ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="your.email@company.com"
                    required
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-1 text-sm text-red-600"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-base"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-3 sm:px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-vertical text-base ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Tell us about your project, partnership opportunity, or how we can help..."
                    required
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-1 text-sm text-red-600"
                      role="alert"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 text-white font-medium py-3 sm:py-4 px-6 rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation text-base"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm sm:text-base">
                      Thank you for your message! We&apos;ll get back to you
                      soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm sm:text-base">
                      There was an error sending your message. Please try again
                      or contact us directly.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div ref={infoRef} className="mt-8 lg:mt-0">
              <AnimatedHeading
                as="h2"
                className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 sm:mb-8"
                animationType="slide"
                triggerOnScroll={false}
              >
                Get In Touch
              </AnimatedHeading>

              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    Business Inquiries
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    Whether you&apos;re interested in our export services,
                    planning a signature event, or exploring collaboration
                    opportunities, we&apos;d love to hear from you.
                  </p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors touch-manipulation text-sm sm:text-base"
                  >
                    {SITE_CONFIG.email}
                    <svg
                      className="ml-2 w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    Partnership Opportunities
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    We&apos;re always looking for strategic partnerships that
                    align with our vision of redefining lifestyle and driving
                    global change.
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Global Export Partnerships
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Event Collaboration
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Creative Ventures
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Investment Opportunities
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    Connect With Us
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    Follow our journey and stay updated on our latest ventures
                    and collaborations.
                  </p>
                  <div className="flex space-x-3 sm:space-x-4">
                    <a
                      href={SITE_CONFIG.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href={SITE_CONFIG.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.896 4.896a.896.896 0 11-1.792 0 .896.896 0 011.792 0zM10 6.7a3.3 3.3 0 100 6.6 3.3 3.3 0 000-6.6zm0 5.45a2.15 2.15 0 110-4.3 2.15 2.15 0 010 4.3zm4.108-9.85H5.892C2.633.3.3 2.633.3 5.892v8.216C.3 17.367 2.633 19.7 5.892 19.7h8.216c3.259 0 5.592-2.333 5.592-5.592V5.892C19.7 2.633 17.367.3 14.108.3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href={SITE_CONFIG.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label="Twitter"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                    Response Time
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    We typically respond to all inquiries within 24-48 hours
                    during business days. For urgent matters, please indicate
                    the priority in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
