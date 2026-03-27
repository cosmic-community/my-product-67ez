// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Feature object type
export interface Feature extends CosmicObject {
  type: 'features';
  metadata: {
    name?: string;
    description?: string;
    icon?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
    order?: number;
  };
}

// Pricing Tier object type
export interface PricingTier extends CosmicObject {
  type: 'pricing-tiers';
  metadata: {
    name?: string;
    price?: string;
    billing_note?: string;
    description?: string;
    highlighted_features?: string;
    is_popular?: boolean | string;
    cta_label?: string;
    order?: number;
  };
}

// Documentation Page object type
export interface DocumentationPage extends CosmicObject {
  type: 'documentation-pages';
  metadata: {
    content?: string;
    category?: string;
    order?: number;
  };
}

// Testimonial object type
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote?: string;
    author_name?: string;
    author_title?: string;
    author_photo?: {
      url: string;
      imgix_url: string;
    };
    rating?: number;
  };
}

// Helper to check if value has a status property (for Cosmic SDK errors)
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Helper to extract metafield value from select-dropdown / radio fields
export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}