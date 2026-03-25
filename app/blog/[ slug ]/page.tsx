"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type WordPressRenderedField = {
  rendered: string;
};

type WordPressPost = {
  id: number;
  slug: string;
  title: WordPressRenderedField;
  content: WordPressRenderedField;
};

export default function BlogPostPage() {
  const params = useParams<{ slug: string | string[] }>();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

    if (!slug) {
      setError("Route slug not found.");
      setLoading(false);
      return;
    }

    if (!baseUrl) {
      setError("NEXT_PUBLIC_WORDPRESS_API_URL is not set in .env.local");
      setLoading(false);
      return;
    }

    async function loadPost() {
      try {
        const response = await fetch(
          `${baseUrl}/posts?per_page=100&_fields=id,slug,title,content`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts from WordPress");
        }

        const posts: WordPressPost[] = await response.json();
        const matchedPost = posts.find((item) => item.slug === slug) ?? null;

        setPost(matchedPost);
      } catch (err) {
        setError("Failed to load the blog post.");
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-slate-600">Loading post...</p>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold text-slate-900">Post not found</h1>
        <p className="mt-4 text-slate-600">
          The blog post could not be found in WordPress.
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Requested slug: {slug || "undefined"}
        </p>
        {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
        <Link href="/blog" className="mt-6 inline-block text-teal-600">
          ← Back to blog
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <Link href="/blog" className="mb-8 inline-block text-sm font-medium text-teal-600">
        ← Back to blog
      </Link>

      <h1
        className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />

      <article
        className="wp-content mt-10"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </main>
  );
}