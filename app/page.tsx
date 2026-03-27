import HeroSection from '@/components/HeroSection';
import FeaturesPreview from '@/components/FeaturesPreview';
import PricingPreview from '@/components/PricingPreview';
import TestimonialsPreview from '@/components/TestimonialsPreview';
import { getFeatures, getPricingTiers, getTestimonials } from '@/lib/cosmic';

export default async function HomePage() {
  const [features, pricingTiers, testimonials] = await Promise.all([
    getFeatures(),
    getPricingTiers(),
    getTestimonials(),
  ]);

  return (
    <>
      <HeroSection />
      <FeaturesPreview features={features.slice(0, 3)} />
      <PricingPreview tiers={pricingTiers} />
      <TestimonialsPreview testimonials={testimonials.slice(0, 3)} />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Join thousands of teams already using My Product to build better, faster, and smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-white text-primary-700 hover:bg-primary-50 transition-colors duration-200 shadow-lg"
            >
              View Pricing
            </a>
            <a
              href="/docs"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-colors duration-200"
            >
              Read the Docs
            </a>
          </div>
        </div>
      </section>
    </>
  );
}