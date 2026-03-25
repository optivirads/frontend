import { getPageBySlug } from "@/lib/wordpress";

export default async function ServicesPage() {
  const page = await getPageBySlug("services");

  if (!page) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-4 text-slate-600">
          The Services page could not be found in WordPress.
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