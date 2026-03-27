import type { Metadata } from 'next';
import { getTestimonials } from '@/lib/cosmic';
import TestimonialCard from '@/components/TestimonialCard';

export const metadata: Metadata = {
  title: 'Testimonials — My Product',
  description: 'See what our customers are saying about My Product.',
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

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
            ⭐ Testimonials
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Loved by{' '}
            <span className="gradient-text">Customers</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Hear from the teams and individuals who rely on My Product every day.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          {testimonials.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No testimonials available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}