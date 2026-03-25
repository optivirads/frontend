import { getPageBySlug } from "@/lib/wordpress";

export default async function HomePage() {
  const page = await getPageBySlug("home");

  if (!page) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-bold text-slate-900">Home page not found</h1>
        <p className="mt-4 text-slate-600">
          Please create a WordPress page with the slug "home".
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1
        className="text-4xl font-bold text-slate-900"
        dangerouslySetInnerHTML={{ __html: page.title.rendered }}
      />
      <div
        className="wp-content mt-8"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </main>
  );
}