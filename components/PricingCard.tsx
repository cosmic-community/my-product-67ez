import type { PricingTier } from '@/types';
import { getMetafieldValue } from '@/types';

interface PricingCardProps {
  tier: PricingTier;
  index: number;
}

export default function PricingCard({ tier, index }: PricingCardProps) {
  const name = tier.metadata?.name || tier.title;
  const price = tier.metadata?.price || '';
  const billingNote = tier.metadata?.billing_note || '';
  const description = tier.metadata?.description || '';
  const highlightedFeatures = tier.metadata?.highlighted_features || '';
  const ctaLabel = tier.metadata?.cta_label || 'Get Started';

  // Handle is_popular which can be boolean or string
  const isPopularRaw = tier.metadata?.is_popular;
  const isPopular =
    isPopularRaw === true ||
    getMetafieldValue(isPopularRaw).toLowerCase() === 'true' ||
    getMetafieldValue(isPopularRaw).toLowerCase() === 'yes';

  // Parse highlighted features (assumes newline or comma separated)
  const featureList = highlightedFeatures
    .split(/[\n,]+/)
    .map((f) => f.trim())
    .filter(Boolean);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden card-hover ${
        isPopular
          ? 'bg-white border-2 border-primary-500 shadow-xl shadow-primary-100'
          : 'bg-white border border-gray-200'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-center text-sm font-semibold py-2">
          ⭐ Most Popular
        </div>
      )}

      <div className={`p-8 ${isPopular ? 'pt-14' : ''}`}>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        {description && (
          <p className="text-gray-500 text-sm mb-6">{description}</p>
        )}

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-black text-gray-900">{price}</span>
          </div>
          {billingNote && (
            <p className="text-gray-500 text-sm mt-1">{billingNote}</p>
          )}
        </div>

        {/* CTA */}
        <button
          className={`w-full py-3.5 px-6 rounded-xl text-base font-semibold transition-all duration-200 mb-8 ${
            isPopular
              ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-200'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          {ctaLabel}
        </button>

        {/* Features */}
        {featureList.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              What&apos;s included
            </p>
            <ul className="space-y-3">
              {featureList.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      isPopular ? 'text-primary-500' : 'text-green-500'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}