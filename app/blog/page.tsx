

import Link from "next/link";
import { getPosts } from "@/lib/wordpress";

export const revalidate = 60;

export default async function BlogPage() {
  let posts = [];

  try {
    posts = await getPosts();
  } catch (error) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
            Blog
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Latest insights
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            We could not load blog posts right now. Please try again later.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#f5f3f8]">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
            Blog
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Insights, strategies, and growth ideas for modern businesses
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Explore our latest articles on SEO, paid ads, content strategy, and
            digital growth.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-slate-600">No blog posts found.</p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {posts.map((post) => {
              const featuredImage =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

              const featuredAlt =
                post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                post.title.rendered;

              return (
                <article
                  key={post.id}
                  className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm"
                >
                  {featuredImage ? (
                    <img
                      src={featuredImage}
                      alt={featuredAlt}
                      className="h-56 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-56 items-center justify-center bg-slate-100 text-sm text-slate-500">
                      No image
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    <h2
                      className="line-clamp-2 text-xl font-semibold leading-snug text-slate-900"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />

                    <div
                      className="mt-4 flex-1 text-sm leading-7 text-slate-600 line-clamp-4"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />

                    <div className="mt-6">
                      <Link
                        href={`/blog/post?slug=${encodeURIComponent(post.slug)}`}
                        className="inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
                      >
                        Read article
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}