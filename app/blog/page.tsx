// import Link from "next/link";
// import { getPosts } from "@/lib/wordpress";

// export default async function BlogPage() {
//   const posts = await getPosts();

//   return (
//     <main className="mx-auto max-w-7xl px-6 py-20">
//       <div className="max-w-2xl">
//         <h1 className="text-4xl font-bold text-slate-900">Blog</h1>
//         <p className="mt-4 text-lg text-slate-600">
//           Latest posts from WordPress.
//         </p>
//       </div>

//       <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
//         {posts.length === 0 ? (
//           <p className="text-slate-600">No posts found.</p>
//         ) : (
//           posts.map((post) => {
//             const featuredImage =
//               post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
//             const featuredAlt =
//               post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
//               post.title.rendered;

//             return (
//               <article
//                 key={post.id}
//                 className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
//               >
//                 {featuredImage ? (
//                   <img
//                     src={featuredImage}
//                     alt={featuredAlt}
//                     className="h-52 w-full object-cover"
//                   />
//                 ) : (
//                   <div className="flex h-52 items-center justify-center bg-slate-100 text-sm text-slate-500">
//                     No image
//                   </div>
//                 )}

//                 <div className="flex flex-1 flex-col p-6">
//                   <h2
//                     className="text-2xl font-semibold leading-snug text-slate-900"
//                     dangerouslySetInnerHTML={{ __html: post.title.rendered }}
//                   />

//                   <div
//                     className="mt-4 flex-1 text-sm leading-6 text-slate-600"
//                     dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
//                   />

//                   <div className="mt-6">
//                     <Link
//                       href={`/blog/post?slug=${encodeURIComponent(post.slug)}`}
//                       className="inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
//                     >
//                       Read more
//                     </Link>
//                   </div>
//                 </div>
//               </article>
//             );
//           })
//         )}
//       </div>
//     </main>
//   );
// }

// "use client";

// import Link from "next/link";
// import { Suspense, useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";

// type WordPressRenderedField = {
//   rendered: string;
// };

// type WordPressFeaturedMedia = {
//   source_url: string;
//   alt_text?: string;
// };

// type WordPressPost = {
//   id: number;
//   slug: string;
//   title: WordPressRenderedField;
//   content: WordPressRenderedField;
//   _embedded?: {
//     "wp:featuredmedia"?: WordPressFeaturedMedia[];
//   };
// };

// function BlogPostContent() {
//   const searchParams = useSearchParams();
//   const slug = searchParams.get("slug");

//   const [post, setPost] = useState<WordPressPost | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

//     if (!slug) {
//       setError("Slug not found in URL.");
//       setLoading(false);
//       return;
//     }

//     if (!baseUrl) {
//       setError("NEXT_PUBLIC_WORDPRESS_API_URL is not set.");
//       setLoading(false);
//       return;
//     }

//     async function loadPost() {
//       try {
//         const response = await fetch(`${baseUrl}/posts?per_page=100&_embed`);

//         if (!response.ok) {
//           throw new Error("Failed to fetch posts from WordPress");
//         }

//         const posts: WordPressPost[] = await response.json();
//         const matchedPost = posts.find((item) => item.slug === slug) ?? null;

//         if (!matchedPost) {
//           setError("Post not found.");
//         } else {
//           setPost(matchedPost);
//         }
//       } catch {
//         setError("Failed to load blog post.");
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadPost();
//   }, [slug]);

//   if (loading) {
//     return (
//       <main className="mx-auto max-w-4xl px-6 py-20">
//         <p className="text-slate-600">Loading post...</p>
//       </main>
//     );
//   }

//   if (error || !post) {
//     return (
//       <main className="mx-auto max-w-4xl px-6 py-20">
//         <h1 className="text-4xl font-bold text-slate-900">Post not found</h1>
//         <p className="mt-4 text-slate-600">
//           The blog post could not be found in WordPress.
//         </p>
//         <Link href="/blog" className="mt-6 inline-block text-teal-600">
//           ← Back to blog
//         </Link>
//       </main>
//     );
//   }

//   const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
//   const featuredAlt =
//     post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered;

//   return (
//     <main className="mx-auto max-w-4xl px-6 py-20">
//       <Link
//         href="/blog"
//         className="mb-8 inline-block text-sm font-medium text-teal-600"
//       >
//         ← Back to blog
//       </Link>

//       <h1
//         className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl"
//         dangerouslySetInnerHTML={{ __html: post.title.rendered }}
//       />

//       {featuredImage ? (
//         <img
//           src={featuredImage}
//           alt={featuredAlt}
//           className="mt-8 h-auto w-full rounded-2xl object-cover"
//         />
//       ) : null}

//       <article
//         className="wp-content mt-10"
//         dangerouslySetInnerHTML={{ __html: post.content.rendered }}
//       />
//     </main>
//   );
// }

// export default function BlogPostPage() {
//   return (
//     <Suspense
//       fallback={
//         <main className="mx-auto max-w-4xl px-6 py-20">
//           <p className="text-slate-600">Loading post...</p>
//         </main>
//       }
//     >
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