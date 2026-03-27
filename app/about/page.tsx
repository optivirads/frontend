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

import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const VISION_POINTS = [
  "Local Expertise — We understand Kerala's market, Malayalam-first communication, and how trust is built locally.",
  "Quality Visuals — Premium-looking execution tailored for small businesses and growth-focused brands.",
  "Results-First — We focus on visibility, leads, and brand credibility instead of vanity metrics.",
];

const STORY_CARDS = [
  {
    icon: "◎",
    title: "Strategic Curation",
    text: "We don't just market, we curate a digital presence that reflects your ambition and business goals.",
  },
  {
    icon: "◫",
    title: "Local Expertise",
    text: "We combine deep understanding of Kerala's audience with modern execution standards.",
  },
  {
    icon: "♥",
    title: "Premium Delivery",
    text: "Every campaign, visual, and touchpoint is shaped to feel polished, credible, and conversion-ready.",
  },
];

const STATS = [
  { value: "98%", label: "Retention Rate", bg: "bg-[#ece8ef]", align: "end" },
  { value: "12k+", label: "Ad Campaigns", bg: "bg-[#ece8ef]", align: "start" },
] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-700">
      {children}
    </p>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
    >
      {children}
    </Link>
  );
}

function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
    >
      {children}
    </Link>
  );
}

function VisionPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs text-white">
        ✓
      </div>
      <p className="text-sm leading-7 text-slate-700">{text}</p>
    </div>
  );
}

function StoryCard({ icon, title, text }: (typeof STORY_CARDS)[number]) {
  return (
    <div className="rounded-[24px] bg-white p-6 shadow-sm">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef1f6] text-sm text-slate-700">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-6 lg:px-8 xl:pt-12">
      <div className="grid gap-10 xl:grid-cols-2 xl:items-center">
        <div className="max-w-xl">
          <SectionLabel>Our Vision</SectionLabel>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl xl:text-6xl">
            Empowering Kerala&apos;s Local Businesses Through Smart Marketing.
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-7 text-slate-600 sm:text-base">
            We bridge the gap between local digital excellence and the unique pulse of Kerala&apos;s
            vibrant marketplace.
          </p>
          <div className="mt-8">
            <PrimaryButton href="/contact">Join Our Journey</PrimaryButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[580px] xl:justify-self-end">
          <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
              alt="Team discussing strategy"
              className="h-[340px] w-full object-cover sm:h-[420px] xl:h-[520px]"
            />
          </div>
          <div className="absolute -bottom-5 left-4 rounded-2xl border border-teal-200 bg-white px-4 py-3 shadow-lg sm:left-6">
            <p className="text-2xl font-bold text-slate-900">500+</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Local businesses <br /> transformed across Kerala.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="border-t border-white/60 py-14">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
        <SectionLabel>The Mission</SectionLabel>
        <blockquote className="mx-auto mt-5 max-w-3xl text-2xl font-semibold italic leading-relaxed text-slate-900 sm:text-3xl">
          "Making professional digital marketing accessible to small businesses, one neighborhood at
          a time."
        </blockquote>
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="h-[2px] w-10 bg-teal-700" />
          <span className="h-[2px] w-4 bg-slate-300" />
          <span className="h-[2px] w-4 bg-slate-300" />
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="bg-white/40 py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              A Vision Without Borders
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base">
              To become the most trusted growth partner in Kerala and beyond, enabling businesses
              across India and the GCC with curated digital strategies.
            </p>
            <div className="mt-7 space-y-4">
              {VISION_POINTS.map((point) => (
                <VisionPoint key={point} text={point} />
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <StatCard value="98%" label="Retention Rate" className="bg-[#ece8ef]" alignEnd />
            <div className="min-h-[170px] rounded-[24px] bg-[#89e4ea] p-5 shadow-sm sm:min-h-[190px]">
              <p className="text-lg font-semibold text-slate-900">↗</p>
              <p className="mt-8 max-w-[190px] text-sm leading-7 text-slate-800">
                Exponential Growth for local clinics &amp; cafes.
              </p>
            </div>
            <div className="min-h-[170px] overflow-hidden rounded-[24px] bg-[#172554] shadow-sm sm:min-h-[190px]">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
                alt="Minimal workspace"
                className="h-full w-full object-cover opacity-85"
              />
            </div>
            <StatCard value="12k+" label="Ad Campaigns" className="bg-[#ece8ef]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  className,
  alignEnd,
}: {
  value: string;
  label: string;
  className?: string;
  alignEnd?: boolean;
}) {
  return (
    <div
      className={`min-h-[170px] rounded-[24px] p-5 shadow-sm sm:min-h-[190px] ${className ?? ""}`}
    >
      <div className={`flex h-full flex-col justify-${alignEnd ? "end" : "start"}`}>
        <p className="text-3xl font-bold text-slate-900">{value}</p>
        <p className="mt-2 text-xs text-slate-500">{label}</p>
      </div>
    </div>
  );
}

function StorySection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Our Story &amp; Expertise
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base">
              Rooted in a desire to see Kerala&apos;s local entrepreneurs win in the digital age.
              Our team combines international agency exposure with deep local understanding.
            </p>
          </div>
          <OutlineButton href="/contact">Meet the Curation Team</OutlineButton>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {STORY_CARDS.map((card) => (
            <StoryCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="px-5 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[28px] bg-[#001b63] px-6 py-12 text-center text-white shadow-sm sm:px-10 sm:py-14">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
          Ready to scale your business in the digital landscape?
        </h2>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-medium text-slate-900 transition hover:bg-teal-400"
          >
            Start Your Growth Story
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="bg-[#f5f3f8] text-slate-900">
      <HeroSection />
      <MissionSection />
      <VisionSection />
      <StorySection />
      <CTASection />
    </main>
  );
}
