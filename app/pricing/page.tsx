import type { Metadata } from 'next';
import { getPricingTiers } from '@/lib/cosmic';
import PricingCard from '@/components/PricingCard';

export const metadata: Metadata = {
  title: 'Pricing — My Product',
  description: 'Simple, transparent pricing. Choose the plan that fits your needs.',
};

export default async function PricingPage() {
  const tiers = await getPricingTiers();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 section-padding">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200/30 rounded-full blur-3xl" />
        </div>
        <div className="container-max relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
            💰 Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees. No surprises. Choose the plan that works best for your team.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-white">
        <div className="container-max">
          {tiers.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Pricing information coming soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {tiers.map((tier, index) => (
                <PricingCard key={tier.id} tier={tier} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ-like section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Have questions about pricing?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is happy to help you find the right plan. Reach out to us anytime.
          </p>
          <a
            href="/docs"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200 shadow-lg shadow-primary-200"
          >
            Visit Documentation →
          </a>
        </div>
      </section>
    </>
  );
}