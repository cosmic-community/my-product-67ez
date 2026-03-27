import type { DocumentationPage } from '@/types';
import { getMetafieldValue } from '@/types';

interface DocsSidebarProps {
  categories: Record<string, DocumentationPage[]>;
  categoryNames: string[];
}

export default function DocsSidebar({ categories, categoryNames }: DocsSidebarProps) {
  return (
    <nav className="lg:sticky lg:top-24">
      <div className="bg-gray-50 rounded-2xl p-6">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Categories
        </h3>
        <ul className="space-y-1">
          {categoryNames.map((categoryName) => {
            const pages = categories[categoryName];
            if (!pages || pages.length === 0) return null;

            return (
              <li key={categoryName}>
                <a
                  href={`#category-${categoryName.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-white rounded-lg transition-colors duration-200"
                >
                  <span>{getMetafieldValue(categoryName) || categoryName}</span>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                    {pages.length}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}