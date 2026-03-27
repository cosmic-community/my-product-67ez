import Link from 'next/link';
import TestimonialCard from '@/components/TestimonialCard';
import type { Testimonial } from '@/types';

interface TestimonialsPreviewProps {
  testimonials: Testimonial[];
}

export default function TestimonialsPreview({ testimonials }: TestimonialsPreviewProps) {
  if (testimonials.length === 0) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            ⭐ Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers{' '}
            <span className="gradient-text">Are Saying</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from real teams. See why thousands trust My Product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-xl transition-colors duration-200"
          >
            Read All Testimonials
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}