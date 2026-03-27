import type { Testimonial } from '@/types';
import StarRating from '@/components/StarRating';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const quote = testimonial.metadata?.quote || '';
  const authorName = testimonial.metadata?.author_name || 'Anonymous';
  const authorTitle = testimonial.metadata?.author_title || '';
  const authorPhoto = testimonial.metadata?.author_photo;
  const rating = testimonial.metadata?.rating ?? 5;

  return (
    <div
      className="group bg-white rounded-2xl border border-gray-100 p-8 card-hover"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Rating */}
      <StarRating rating={rating} />

      {/* Quote */}
      <blockquote className="mt-4 mb-6">
        <p className="text-gray-700 leading-relaxed text-base italic">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        {authorPhoto?.imgix_url ? (
          <img
            src={`${authorPhoto.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={authorName}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-100"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold text-sm ring-2 ring-primary-100">
            {authorName.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900 text-sm">{authorName}</p>
          {authorTitle && (
            <p className="text-gray-500 text-sm">{authorTitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}