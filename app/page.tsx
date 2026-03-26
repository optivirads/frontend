// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }


// import { getPageBySlug } from "@/lib/wordpress";

// export default async function HomePage() {
//   const page = await getPageBySlug("home");

//   if (!page) {
//     return (
//       <main className="mx-auto max-w-6xl px-6 py-20">
//         <h1 className="text-4xl font-bold text-slate-900">Home page not found</h1>
//         <p className="mt-4 text-slate-600">
//           Please create a WordPress page with the slug "home".
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
//         className="wp-content mt-8"
//         dangerouslySetInnerHTML={{ __html: page.content.rendered }}
//       />
//     </main>
//   );
// }



// import Link from "next/link";
// import { getPosts } from "@/lib/wordpress";

// const services = [
//   {
//     title: "SEO Growth",
//     description:
//       "Technical SEO, on-page optimization, local SEO, and content strategy built for long-term traffic.",
//   },
//   {
//     title: "Paid Ads",
//     description:
//       "Google Ads and Meta Ads campaigns focused on qualified leads, better ROAS, and scalable growth.",
//   },
//   {
//     title: "Content Marketing",
//     description:
//       "High-converting landing page content, blog strategy, and messaging aligned with search intent.",
//   },
//   {
//     title: "Social Media",
//     description:
//       "Content planning, ad creatives, audience targeting, and performance tracking across key platforms.",
//   },
// ];

// const benefits = [
//   "Performance-focused strategy",
//   "Clean reporting and measurable KPIs",
//   "SEO + paid ads under one team",
//   "Fast execution for growing brands",
// ];

// export default async function HomePage() {
//   const posts = await getPosts();
//   const latestPosts = posts.slice(0, 3);

//   return (
//     <main className="bg-white">
//       <section className="border-b border-slate-200 bg-slate-50">
//         <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
//           <div>
//             <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-600">
//               OptiVir Ads
//             </p>

//             <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
//               We help businesses grow with SEO, paid ads, and smart digital strategy.
//             </h1>

//             <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
//               We build growth-focused campaigns for brands that want more traffic,
//               better leads, and stronger conversions without wasting budget.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <Link
//                 href="/contact"
//                 className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
//               >
//                 Get a Free Consultation
//               </Link>

//               <Link
//                 href="/services"
//                 className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-white"
//               >
//                 Explore Services
//               </Link>
//             </div>

//             <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
//               <div className="rounded-2xl border border-slate-200 bg-white p-5">
//                 <p className="text-3xl font-bold text-slate-900">90%+</p>
//                 <p className="mt-2 text-sm text-slate-600">Performance-focused builds</p>
//               </div>

//               <div className="rounded-2xl border border-slate-200 bg-white p-5">
//                 <p className="text-3xl font-bold text-slate-900">SEO</p>
//                 <p className="mt-2 text-sm text-slate-600">Organic visibility that compounds</p>
//               </div>

//               <div className="rounded-2xl border border-slate-200 bg-white p-5">
//                 <p className="text-3xl font-bold text-slate-900">Ads</p>
//                 <p className="mt-2 text-sm text-slate-600">Lead generation with measurable ROI</p>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
//             <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-400">
//               Why brands choose us
//             </p>

//             <h2 className="mt-5 text-3xl font-bold leading-tight">
//               Strategy, execution, and optimization in one place.
//             </h2>

//             <p className="mt-4 text-base leading-7 text-slate-300">
//               We combine SEO, paid media, content, and conversion thinking to
//               create campaigns that are built for growth, not vanity metrics.
//             </p>

//             <div className="mt-8 grid gap-4">
//               <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//                 <p className="text-sm font-semibold text-white">Local SEO & Search Visibility</p>
//                 <p className="mt-2 text-sm leading-6 text-slate-300">
//                   Stronger rankings, better Google presence, and content aligned to demand.
//                 </p>
//               </div>

//               <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//                 <p className="text-sm font-semibold text-white">Paid Campaign Performance</p>
//                 <p className="mt-2 text-sm leading-6 text-slate-300">
//                   Smarter targeting, stronger creatives, and better use of ad spend.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-6 py-20">
//         <div className="max-w-2xl">
//           <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-600">
//             Services
//           </p>
//           <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
//             Marketing services built for growth.
//           </h2>
//           <p className="mt-4 text-lg leading-8 text-slate-600">
//             We focus on the channels that matter most for lead generation, visibility,
//             and sustainable brand growth.
//           </p>
//         </div>

//         <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//           {services.map((service) => (
//             <div
//               key={service.title}
//               className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
//             >
//               <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
//               <p className="mt-3 text-sm leading-7 text-slate-600">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="bg-slate-50">
//         <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-start">
//           <div>
//             <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-600">
//               Why OptiVir
//             </p>
//             <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
//               A lean, focused team that cares about real business results.
//             </h2>
//             <p className="mt-5 text-lg leading-8 text-slate-600">
//               We do not chase vanity metrics. We build marketing systems that help
//               your business rank better, convert more, and scale with confidence.
//             </p>
//             <div className="mt-8">
//               <Link
//                 href="/about"
//                 className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-white"
//               >
//                 Learn More About Us
//               </Link>
//             </div>
//           </div>

//           <div className="grid gap-4">
//             {benefits.map((benefit) => (
//               <div
//                 key={benefit}
//                 className="rounded-2xl border border-slate-200 bg-white p-5"
//               >
//                 <p className="text-base font-medium text-slate-900">{benefit}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-6 py-20">
//         <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//           <div className="max-w-2xl">
//             <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-600">
//               Insights
//             </p>
//             <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
//               Latest articles from our blog.
//             </h2>
//             <p className="mt-4 text-lg leading-8 text-slate-600">
//               SEO, digital ads, growth strategy, and practical insights for modern businesses.
//             </p>
//           </div>

//           <Link
//             href="/blog"
//             className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
//           >
//             View All Posts
//           </Link>
//         </div>

//         <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {latestPosts.map((post) => {
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
//                     className="h-56 w-full object-cover"
//                   />
//                 ) : (
//                   <div className="flex h-56 items-center justify-center bg-slate-100 text-sm text-slate-500">
//                     No image
//                   </div>
//                 )}

//                 <div className="flex flex-1 flex-col p-6">
//                   <h3
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
//                       Read article
//                     </Link>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </section>

//       <section className="px-6 pb-20">
//         <div className="mx-auto max-w-7xl rounded-3xl bg-slate-900 px-8 py-12 text-white md:px-12 md:py-16">
//           <div className="max-w-3xl">
//             <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-400">
//               Ready to grow?
//             </p>
//             <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
//               Let’s build a marketing system that brings in better traffic and better leads.
//             </h2>
//             <p className="mt-4 text-lg leading-8 text-slate-300">
//               Tell us about your business, your market, and your goals. We’ll help you
//               find the right growth path.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <Link
//                 href="/contact"
//                 className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900"
//               >
//                 Contact Us
//               </Link>

//               <Link
//                 href="/services"
//                 className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white"
//               >
//                 See Our Services
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import Link from "next/link";
import { getPosts } from "@/lib/wordpress";

const featuredServices = [
  {
    title: "Social Media Management",
    description:
      "Building consistent brand voice and local narratives that your customers actually connect with.",
    accent: "bg-teal-500",
  },
  {
    title: "Meta & Instagram Ads",
    description:
      "High-conversion campaigns designed to bring qualified leads, not just vanity reach.",
    accent: "bg-slate-900",
  },
  {
    title: "Google Search Ads",
    description:
      "Be the first thing your audience sees when they search for services like yours.",
    accent: "bg-orange-400",
  },
];

const localEdgePoints = [
  "Local market insight grounded in Kerala business reality.",
  "Creative campaigns that feel native to your audience.",
  "Affordable premium execution for growth-minded brands.",
];

const testimonials = [
  {
    name: "Rahul Das",
    role: "Cafe Owner",
    quote:
      "OptiVir transformed how our cafe reaches people in Kannur. Our inbound leads increased by 60% within the first month after their local SEO and ad support.",
  },
  {
    name: "Dr. Anjali M.",
    role: "Clinic Founder",
    quote:
      "As a clinic, trust is everything. OptiVir created a digital presence that felt professional, relevant, and credible from day one.",
  },
];

export default async function HomePage() {
  const posts = await getPosts();
  const latestPosts = posts.slice(0, 2);

  return (
    <main className="bg-[#faf8ff] text-slate-900">
      <section className="mx-auto max-w-5xl px-6 pt-10 pb-16">
        <p className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-700">
          Local Growth Expert
        </p>

        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          The Digital Growth Partner for Kerala&apos;s Small Businesses
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
          Bespoke digital marketing strategies that deliver high-impact results
          without the enterprise price tag. From local clinics to Kannur&apos;s
          finest cafes, we curate your success.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm"
          >
            Get a Free Strategy Call
          </Link>

          <Link
            href="/blog"
            className="text-sm font-medium text-slate-700 underline-offset-4 hover:underline"
          >
            View Case Studies
          </Link>
        </div>

        <div className="mt-10 relative">
          <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
              alt="Premium office interior"
              className="h-[260px] w-full object-cover md:h-[340px]"
            />
          </div>

          <div className="absolute left-4 top-4 rounded-2xl bg-white px-4 py-3 shadow-md md:left-6 md:top-6">
            <p className="text-2xl font-bold text-slate-900">+ 140%</p>
            <p className="mt-1 text-xs text-slate-500">
              engagement for a local restaurant
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f3f9] py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold">Curated Digital Services</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We don’t just run ads, we craft narratives that resonate with the local
            Malayalam audience while maintaining global standards.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-800">
              SEO Strategy
            </span>
            <span className="rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
              Meta Ads
            </span>
          </div>

          <div className="mt-10 grid gap-5">
            {featuredServices.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className={`mt-1 h-3 w-3 rounded-full ${service.accent}`} />
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="max-w-2xl text-3xl font-bold">
          The Local Edge, Global Excellence.
        </h2>

        <div className="mt-8 grid gap-4">
          {localEdgePoints.map((point) => (
            <div
              key={point}
              className="rounded-2xl bg-white px-5 py-4 shadow-sm"
            >
              <p className="text-sm leading-7 text-slate-700">{point}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-[28px] bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
            alt="Editorial interior scene"
            className="h-[260px] w-full object-cover md:h-[380px]"
          />
        </div>
      </section>

      <section className="bg-[#00113a] py-16 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold">Voice of Our Partners</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Real results from the businesses that drive our local economy.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl bg-[#0a235c] p-6"
              >
                <p className="text-base leading-8 text-slate-100">
                  “{item.quote}”
                </p>
                <p className="mt-6 text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-slate-300">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="max-w-2xl text-3xl font-bold">
          Ready to lead the market?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Your growth journey begins with a sharper digital strategy, a clearer
          story, and stronger local visibility.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              Latest Insights
            </p>
            <h2 className="mt-3 text-2xl font-bold">From the blog</h2>
          </div>
          <Link href="/blog" className="text-sm font-medium text-slate-700">
            View all
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {latestPosts.map((post) => {
            const featuredImage =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
            const featuredAlt =
              post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
              post.title.rendered;

            return (
              <article
                key={post.id}
                className="overflow-hidden rounded-3xl bg-white shadow-sm"
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

                <div className="p-6">
                  <h3
                    className="text-xl font-semibold leading-snug"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div
                    className="mt-3 text-sm leading-7 text-slate-600"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <div className="mt-5">
                    <Link
                      href={`/blog/post?slug=${encodeURIComponent(post.slug)}`}
                      className="text-sm font-medium text-teal-700"
                    >
                      Read article →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}