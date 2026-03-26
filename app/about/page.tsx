// import { getPageBySlug } from "@/lib/wordpress";

// export default async function AboutPage() {
//   const page = await getPageBySlug("about");

//   if (!page) {
//     return (
//       <main className="mx-auto max-w-6xl px-6 py-20">
//         <h1 className="text-4xl font-bold text-slate-900">Page not found</h1>
//         <p className="mt-4 text-slate-600">
//           The About page could not be found in WordPress.
//         </p>
//       </main>
//     );
//   }

//   return (
//     <main className="mx-auto max-w-4xl px-6 py-20">
//       <h1
//         className="text-4xl font-bold text-slate-900"
//         dangerouslySetInnerHTML={{ __html: page.title.rendered }}
//       />
//       <div
//         className="prose mt-8 max-w-none"
//         dangerouslySetInnerHTML={{ __html: page.content.rendered }}
//       />
//     </main>
//   );
// }

// import { getPageBySlug } from "@/lib/wordpress";

// export default async function AboutPage() {
//   const page = await getPageBySlug("about");

//   if (!page) {
//     return (
//       <main className="mx-auto max-w-6xl px-6 py-20">
//         <h1 className="text-4xl font-bold text-slate-900">Page not found</h1>
//         <p className="mt-4 text-slate-600">
//           The About page could not be found in WordPress.
//         </p>
//       </main>
//     );
//   }

//   return (
//     <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
//       <h1
//         className="max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl"
//         dangerouslySetInnerHTML={{ __html: page.title.rendered }}
//       />
//       <div
//         className="wp-content mt-8 max-w-3xl"
//         dangerouslySetInnerHTML={{ __html: page.content.rendered }}
//       />
//     </main>
//   );
// }


import { connection } from "next/server";
import { getPageBySlug } from "@/lib/wordpress";

export default async function AboutPage() {
  await connection();

  let page = null;

  try {
    page = await getPageBySlug("about");
  } catch (error) {
    console.error("Failed to load About page from WordPress", error);
  }

  if (!page) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-4 text-slate-600">
          The About page could not be found in WordPress.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h1
        className="max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl"
        dangerouslySetInnerHTML={{ __html: page.title.rendered }}
      />
      <div
        className="wp-content mt-8 max-w-3xl"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </main>
  );
}