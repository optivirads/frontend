// // "use client";

// // import Link from "next/link";
// // import { useSearchParams } from "next/navigation";
// // import { useEffect, useState } from "react";

// // type WordPressRenderedField = {
// //   rendered: string;
// // };

// // type WordPressFeaturedMedia = {
// //   source_url: string;
// //   alt_text?: string;
// // };

// // type WordPressPost = {
// //   id: number;
// //   slug: string;
// //   title: WordPressRenderedField;
// //   content: WordPressRenderedField;
// //   _embedded?: {
// //     "wp:featuredmedia"?: WordPressFeaturedMedia[];
// //   };
// // };

// // export default function BlogPostPage() {
// //   const searchParams = useSearchParams();
// //   const slug = searchParams.get("slug");

// //   const [post, setPost] = useState<WordPressPost | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   useEffect(() => {
// //     const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

// //     if (!slug) {
// //       setError("Slug not found in URL.");
// //       setLoading(false);
// //       return;
// //     }

// //     if (!baseUrl) {
// //       setError("NEXT_PUBLIC_WORDPRESS_API_URL is not set in .env.local");
// //       setLoading(false);
// //       return;
// //     }

// //     async function loadPost() {
// //       try {
// //         const response = await fetch(`${baseUrl}/posts?per_page=100&_embed`);

// //         if (!response.ok) {
// //           throw new Error("Failed to fetch posts from WordPress");
// //         }

// //         const posts: WordPressPost[] = await response.json();
// //         const matchedPost = posts.find((item) => item.slug === slug) ?? null;

// //         setPost(matchedPost);
// //       } catch (err) {
// //         setError("Failed to load blog post.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     loadPost();
// //   }, [slug]);

// //   if (loading) {
// //     return (
// //       <main className="mx-auto max-w-4xl px-6 py-20">
// //         <p className="text-slate-600">Loading post...</p>
// //       </main>
// //     );
// //   }

// //   if (error || !post) {
// //     return (
// //       <main className="mx-auto max-w-4xl px-6 py-20">
// //         <h1 className="text-4xl font-bold text-slate-900">Post not found</h1>
// //         <p className="mt-4 text-slate-600">
// //           The blog post could not be found in WordPress.
// //         </p>
// //         <Link href="/blog" className="mt-6 inline-block text-teal-600">
// //           ← Back to blog
// //         </Link>
// //       </main>
// //     );
// //   }

// //   const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
// //   const featuredAlt =
// //     post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered;

// //   return (
// //     <main className="mx-auto max-w-4xl px-6 py-20">
// //       <Link href="/blog" className="mb-8 inline-block text-sm font-medium text-teal-600">
// //         ← Back to blog
// //       </Link>

// //       <h1
// //         className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl"
// //         dangerouslySetInnerHTML={{ __html: post.title.rendered }}
// //       />

// //       {featuredImage ? (
// //         <img
// //           src={featuredImage}
// //           alt={featuredAlt}
// //           className="mt-8 h-auto w-full rounded-2xl object-cover"
// //         />
// //       ) : null}

// //       <article
// //         className="wp-content mt-10"
// //         dangerouslySetInnerHTML={{ __html: post.content.rendered }}
// //       />
// //     </main>
// //   );
// // }

// // app/blog/post/page.tsx
// 'use client';

// import Link from 'next/link';
// import { Suspense, useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';

// // Define types…
// type WordPressPost = { /* … */ };

// function BlogPostContent() {
//   const searchParams = useSearchParams();
//   const slug = searchParams.get('slug');

//   const [post, setPost] = useState<WordPressPost | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // fetch the post asynchronously, then update state
//     // never make the component itself `async`
//     // …
//   }, [slug]);

//   if (loading) {
//     return (
//       <main className="mx-auto max-w-4xl px-6 py-20">
//         <p className="text-slate-600">Loading post…</p>
//       </main>
//     );
//   }

//   if (error || !post) {
//     return (
//       <main className="mx-auto max-w-4xl px-6 py-20">
//         <h1 className="text-4xl font-bold text-slate-900">Post not found</h1>
//         <p className="mt-4 text-slate-600">{error || 'The blog post could not be found in WordPress.'}</p>
//         <Link href="/blog" className="mt-6 inline-block text-teal-600">
//           ← Back to blog
//         </Link>
//       </main>
//     );
//   }

//   // render the loaded post
//   return (
//     <main className="mx-auto max-w-4xl px-6 py-20">
//       {/* render title and content as before */}
//     </main>
//   );
// }

// export default function BlogPostPage() {
//   return (
//     // Wrap the client component with Suspense to satisfy the Next.js rule:contentReference[oaicite:0]{index=0}.
//     <Suspense fallback={<div>Loading post…</div>}>
//       <BlogPostContent />
//     </Suspense>
//   );
// }


"use client";

/**
 * This page is responsible for rendering individual blog posts.
 * It reads the `slug` query parameter using `useSearchParams` in a child
 * component and wraps that child in a `<Suspense>` boundary. This fixes
 * the production build error in Next.js 16.x when `useSearchParams` is
 * called in a Client Component without a Suspense boundary. See
 * https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout for details.
 */

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// Define the shape of a WordPress post.
type WordPressRenderedField = {
  rendered: string;
};

type WordPressFeaturedMedia = {
  source_url: string;
  alt_text?: string;
};

type WordPressPost = {
  id: number;
  slug: string;
  title: WordPressRenderedField;
  content: WordPressRenderedField;
  _embedded?: {
    "wp:featuredmedia"?: WordPressFeaturedMedia[];
  };
};

/**
 * This component fetches and displays a single blog post. It is a separate
 * Client Component so that it can safely call `useSearchParams` to read
 * the `slug` query parameter. The parent component wraps this in a
 * Suspense boundary so that the page can still be statically pre-rendered.
 */
function BlogPostContent() {
  // Read search params from the URL.
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  // State to track the post data and loading/error states.
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    /**
     * Try to read the WordPress API URL from either the server-only
     * environment variable (`WORDPRESS_API_URL`) or the client-exposed
     * environment variable (`NEXT_PUBLIC_WORDPRESS_API_URL`). This allows
     * the site to function whether the variable is prefixed for client
     * usage or not. Vercel will pass through both names if configured.
     */
    const baseUrl =
      // Prefer server-only variable for consistency with lib/wordpress.ts
      process.env.WORDPRESS_API_URL ||
      // Fallback to the public variable for backward compatibility
      process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

    if (!slug) {
      setError("Slug not found in URL.");
      setLoading(false);
      return;
    }

    if (!baseUrl) {
      setError("NEXT_PUBLIC_WORDPRESS_API_URL is not set.");
      setLoading(false);
      return;
    }

    async function loadPost() {
      try {
        const response = await fetch(`${baseUrl}/posts?per_page=100&_embed`);
        if (!response.ok) {
          throw new Error("Failed to fetch posts from WordPress");
        }
        const posts: WordPressPost[] = await response.json();
        const matchedPost = posts.find((item) => item.slug === slug) ?? null;
        if (!matchedPost) {
          setError("Post not found.");
        } else {
          setPost(matchedPost);
        }
      } catch (err) {
        setError("Failed to load blog post.");
      } finally {
        setLoading(false);
      }
    }
    loadPost();
  }, [slug]);

  // Render loading state
  if (loading) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-slate-600">Loading post...</p>
      </main>
    );
  }

  // Render error state or if no post found
  if (error || !post) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold text-slate-900">Post not found</h1>
        <p className="mt-4 text-slate-600">{error || 'The blog post could not be found in WordPress.'}</p>
        <Link href="/blog" className="mt-6 inline-block text-teal-600">
          ← Back to blog
        </Link>
      </main>
    );
  }

  // Extract featured image details if available
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const featuredAlt = post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered;

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <Link href="/blog" className="mb-8 inline-block text-sm font-medium text-teal-600">
        ← Back to blog
      </Link>
      <h1
        className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      {featuredImage ? (
        <img
          src={featuredImage}
          alt={featuredAlt}
          className="mt-8 h-auto w-full rounded-2xl object-cover"
        />
      ) : null}
      <article
        className="wp-content mt-10"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </main>
  );
}

/**
 * The page component wraps `BlogPostContent` in a Suspense boundary. Next.js
 * will preserve the static shell of the page while waiting for the client
 * component to hydrate. This resolves the CSR bailout error.
 */
export default function BlogPostPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-slate-600">Loading post...</p>
        </main>
      }
    >
      <BlogPostContent />
    </Suspense>
  );
}