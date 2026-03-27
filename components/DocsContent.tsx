import type { DocumentationPage } from '@/types';
import { getMetafieldValue } from '@/types';

interface DocsContentProps {
  categories: Record<string, DocumentationPage[]>;
  categoryNames: string[];
}

export default function DocsContent({ categories, categoryNames }: DocsContentProps) {
  return (
    <div className="space-y-12">
      {categoryNames.map((categoryName) => {
        const pages = categories[categoryName];
        if (!pages || pages.length === 0) return null;

        return (
          <section
            key={categoryName}
            id={`category-${categoryName.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">
                📄
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {getMetafieldValue(categoryName) || categoryName}
              </h2>
            </div>

            <div className="space-y-6">
              {pages.map((page) => {
                const content = page.metadata?.content || '';

                return (
                  <article
                    key={page.id}
                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-primary-200 transition-colors duration-200"
                  >
                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {page.title}
                      </h3>
                      {content ? (
                        <div
                          className="prose prose-gray max-w-none prose-headings:font-bold prose-a:text-primary-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
                          dangerouslySetInnerHTML={{ __html: content }}
                        />
                      ) : (
                        <p className="text-gray-500 italic">Content coming soon.</p>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}