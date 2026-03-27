import type { Metadata } from 'next';
import { getFeatures } from '@/lib/cosmic';
import FeatureCard from '@/components/FeatureCard';

export const metadata: Metadata = {
  title: 'Features — My Product',
  description: 'Explore all the powerful features that make My Product the best choice for your team.',
};

export default async function FeaturesPage() {
  const features = await getFeatures();

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
            🚀 Features
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">Succeed</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            My Product is packed with powerful features designed to help your team work smarter, move faster, and deliver better results.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          {features.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No features available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={feature.id} feature={feature} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}