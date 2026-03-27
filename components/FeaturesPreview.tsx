import Link from 'next/link';
import FeatureCard from '@/components/FeatureCard';
import type { Feature } from '@/types';

interface FeaturesPreviewProps {
  features: Feature[];
}

export default function FeaturesPreview({ features }: FeaturesPreviewProps) {
  if (features.length === 0) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            🚀 Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for{' '}
            <span className="gradient-text">Modern Teams</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to streamline your workflow and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-xl transition-colors duration-200"
          >
            View All Features
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}