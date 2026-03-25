type WordPressRenderedField = {
  rendered: string;
};

type WordPressFeaturedMedia = {
  source_url: string;
  alt_text?: string;
};

export type WordPressPost = {
  id: number;
  slug: string;
  title: WordPressRenderedField;
  excerpt: WordPressRenderedField;
  content: WordPressRenderedField;
  _embedded?: {
    "wp:featuredmedia"?: WordPressFeaturedMedia[];
  };
};

export type WordPressPage = {
  id: number;
  slug: string;
  title: WordPressRenderedField;
  content: WordPressRenderedField;
};

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

if (!WORDPRESS_API_URL) {
  throw new Error("WORDPRESS_API_URL is not set in .env.local");
}

export async function getPosts(): Promise<WordPressPost[]> {
  const response = await fetch(`${WORDPRESS_API_URL}/posts?_embed`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts from WordPress");
  }

  return response.json();
}

export async function getPageBySlug(slug: string): Promise<WordPressPage | null> {
  const response = await fetch(`${WORDPRESS_API_URL}/pages?slug=${slug}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch page: ${slug}`);
  }

  const pages: WordPressPage[] = await response.json();

  return pages.length > 0 ? pages[0] : null;
}

export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  const cleanSlug = decodeURIComponent(slug).trim().toLowerCase();

  const response = await fetch(`${WORDPRESS_API_URL}/posts?per_page=100&_embed`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts from WordPress");
  }

  const posts: WordPressPost[] = await response.json();

  const matchedPost = posts.find(
    (post) => post.slug.trim().toLowerCase() === cleanSlug
  );

  return matchedPost ?? null;
}