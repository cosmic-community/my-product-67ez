import type { Metadata } from 'next';
import { getDocumentationPages } from '@/lib/cosmic';
import DocsSidebar from '@/components/DocsSidebar';
import DocsContent from '@/components/DocsContent';

export const metadata: Metadata = {
  title: 'Documentation — My Product',
  description: 'Browse our comprehensive documentation to get the most out of My Product.',
};

export default async function DocsPage() {
  const pages = await getDocumentationPages();

  // Group pages by category
  const categories: Record<string, typeof pages> = {};
  for (const page of pages) {
    const category = page.metadata?.category || 'General';
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(page);
  }

  const categoryNames = Object.keys(categories);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200/30 rounded-full blur-3xl" />
        </div>
        <div className="container-max relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
            📖 Documentation
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Documentation &{' '}
            <span className="gradient-text">Guides</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to get started, configure, and master My Product.
          </p>
        </div>
      </section>

      {/* Docs Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          {pages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Documentation is being prepared. Check back soon!</p>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Sidebar */}
              <div className="lg:w-64 flex-shrink-0">
                <DocsSidebar categories={categories} categoryNames={categoryNames} />
              </div>

              {/* Main Content */}
              <div className="flex-1 min-w-0">
                <DocsContent categories={categories} categoryNames={categoryNames} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}