import Link from "next/link";
import { getPosts } from "@/lib/wordpress";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-slate-900">Blog</h1>
        <p className="mt-4 text-lg text-slate-600">
          Latest posts from WordPress.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {posts.length === 0 ? (
          <p className="text-slate-600">No posts found.</p>
        ) : (
          posts.map((post) => {
            const featuredImage =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
            const featuredAlt =
              post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
              post.title.rendered;

            return (
              <article
                key={post.id}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                {featuredImage ? (
                  <img
                    src={featuredImage}
                    alt={featuredAlt}
                    className="h-52 w-full object-cover"
                  />
                ) : (
                  <div className="flex h-52 items-center justify-center bg-slate-100 text-sm text-slate-500">
                    No image
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <h2
                    className="text-2xl font-semibold leading-snug text-slate-900"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />

                  <div
                    className="mt-4 flex-1 text-sm leading-6 text-slate-600"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />

                  <div className="mt-6">
                    <Link
                      href={`/blog/post?slug=${encodeURIComponent(post.slug)}`}
                      className="inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>
    </main>
  );
}