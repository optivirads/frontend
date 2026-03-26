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

"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

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

function BlogPostContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

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
      } catch {
        setError("Failed to load blog post.");
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
        <Link href="/blog" className="mt-6 inline-block text-teal-600">
          ← Back to blog
        </Link>
      </main>
    );
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const featuredAlt =
    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered;

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <Link
        href="/blog"
        className="mb-8 inline-block text-sm font-medium text-teal-600"
      >
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