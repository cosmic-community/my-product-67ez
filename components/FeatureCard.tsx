import type { Feature } from '@/types';
import { getMetafieldValue } from '@/types';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  const name = feature.metadata?.name || feature.title;
  const description = feature.metadata?.description || '';
  const icon = getMetafieldValue(feature.metadata?.icon);
  const image = feature.metadata?.image;

  return (
    <div
      className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      {image?.imgix_url && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={200}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      <div className="p-6">
        {/* Icon */}
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center text-2xl mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        )}

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
          {name}
        </h3>

        {description && (
          <p className="text-gray-600 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}