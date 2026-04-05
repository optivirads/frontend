import Link from "next/link";

const serviceCards = [
  {
    title: "SEO Strategy",
    text: "Technical SEO, local SEO, on-page optimization, and content structuring designed to help your business rank where it matters.",
    icon: "⌕",
  },
  {
    title: "Google Ads",
    text: "High-intent search campaigns focused on lead generation, conversion quality, and stronger return on ad spend.",
    icon: "◔",
  },
  {
    title: "Meta & Instagram Ads",
    text: "Creative-led paid campaigns built to increase reach, engagement, and qualified enquiries from the right audience.",
    icon: "◎",
  },
  {
    title: "Social Media Management",
    text: "Content planning, posting, creative direction, audience engagement, and profile management built to strengthen your brand presence.",
    icon: "◉",
  },
];

const processPoints = [
  {
    title: "Discovery & Positioning",
    text: "We understand your business, audience, market, and the growth opportunities available right now.",
  },
  {
    title: "Strategy & Execution",
    text: "We create a focused channel plan and launch work that aligns with your goals, budget, and growth stage.",
  },
  {
    title: "Optimization & Scaling",
    text: "We track what performs, refine the campaigns, and help you scale what is already working.",
  },
];

const highlightPoints = [
  {
    title: "Local Market Fit",
    text: "We shape campaigns with Kerala’s customer behavior, language context, and trust signals in mind.",
  },
  {
    title: "Premium Creative Direction",
    text: "Every service is delivered with polished execution, strong messaging, and a premium visual standard.",
  },
  {
    title: "Performance-Driven Work",
    text: "We focus on measurable outcomes like leads, visibility, enquiries, and meaningful digital growth.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f6f4f8] text-[#041b57]">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-6 lg:px-8 xl:pt-12">
        <div className="grid items-center gap-12 xl:grid-cols-[1fr_1.05fr]">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full bg-[#8ee4ea] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0b7280]">
              Our Services
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.03em] text-[var(--brand-primary)] sm:text-5xl lg:text-6xl xl:text-7xl">
              Strategic services
              <br />
              built for{" "}
              <span className="text-[#0c7f8c]">
                visibility,
                <br />
                leads, and growth.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#33456f] sm:text-lg">
              From local SEO to performance ads and social media management, we
              create tailored digital strategies that help businesses grow with
              clarity, consistency, and measurable results.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--brand-primary)] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,27,99,0.18)] transition hover:bg-[#001552]"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px] xl:justify-self-end">
            <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
                alt="Marketing strategy discussion"
                className="h-[360px] w-full object-cover sm:h-[460px] xl:h-[620px]"
              />
            </div>

            <div className="absolute -bottom-6 left-4 rounded-[22px] border border-[#0c7f8c] bg-white px-6 py-5 shadow-[0_14px_30px_rgba(15,23,42,0.14)] sm:left-6">
              <p className="text-4xl font-bold text-[var(--brand-primary)]">3x</p>
              <p className="mt-2 text-sm leading-6 text-[#33456f]">
                faster clarity on
                <br />
                what drives growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/70 py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#0c7f8c]">
            What We Offer
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-tight tracking-[-0.03em] text-[var(--brand-primary)] sm:text-4xl lg:text-5xl">
            Focused services that help businesses compete, convert, and scale.
          </h2>

          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="h-[3px] w-12 rounded-full bg-[#0c7f8c]" />
            <span className="h-[3px] w-4 rounded-full bg-[#c8cedb]" />
            <span className="h-[3px] w-4 rounded-full bg-[#c8cedb]" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[28px] bg-white p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ece9f0] text-xl text-[var(--brand-primary)]">
                  {card.icon}
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[var(--brand-primary)]">
                  {card.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-[#33456f]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/55 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-14 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] text-[var(--brand-primary)] sm:text-5xl">
                How our service process works.
              </h2>

              <p className="mt-6 text-lg leading-9 text-[#33456f]">
                Every project starts with clarity. We keep the process simple,
                strategic, and tied directly to business outcomes.
              </p>

              <div className="mt-10 space-y-6">
                {processPoints.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-lg text-[#0c7f8c] shadow-sm">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[var(--brand-primary)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base leading-8 text-[#33456f]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="min-h-[240px] rounded-[28px] bg-[#ece9f0] p-8 shadow-sm">
                <div className="flex h-full flex-col justify-end">
                  <p className="text-5xl font-bold text-[var(--brand-primary)]">SEO</p>
                  <p className="mt-3 text-base text-[#33456f]">
                    Organic visibility that compounds over time
                  </p>
                </div>
              </div>

              <div className="min-h-[240px] rounded-[28px] bg-[#8ee4ea] p-8 shadow-sm">
                <p className="text-2xl font-semibold text-[#0c7f8c]">↗</p>
                <p className="mt-14 max-w-[240px] text-3xl font-medium leading-tight tracking-[-0.03em] text-[#0b7280]">
                  Paid campaigns built for enquiries and conversion.
                </p>
              </div>

              <div className="relative min-h-[320px] overflow-hidden rounded-[28px] bg-[#21386d] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop"
                  alt="Performance dashboard"
                  className="h-full w-full object-cover opacity-45"
                />
                <div className="absolute inset-0 bg-[#21386d]/35" />
                <div className="absolute inset-0 p-8">
                  <p className="max-w-[240px] text-4xl font-semibold leading-tight tracking-[-0.03em] text-white">
                    Strategy guided by performance data.
                  </p>
                </div>
              </div>

              <div className="min-h-[240px] rounded-[28px] bg-[#ece9f0] p-8 shadow-sm">
                <p className="text-5xl font-bold text-[var(--brand-primary)]">360°</p>
                <p className="mt-3 text-base text-[#33456f]">
                  Digital support across search, ads, content, and social media
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] text-[var(--brand-primary)] sm:text-5xl">
                Why businesses choose our services.
              </h2>

              <p className="mt-6 text-lg leading-9 text-[#33456f]">
                We bring local understanding, premium execution, and
                performance-first thinking into every campaign.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-[#b9c1d1] bg-transparent px-7 py-4 text-sm font-semibold text-[var(--brand-primary)] transition hover:bg-white"
              >
                Discuss Your Requirements
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {highlightPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] bg-white p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ece9f0] text-xl text-[var(--brand-primary)]">
                  ✦
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[var(--brand-primary)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-[#33456f]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-[var(--brand-primary)] px-8 py-16 text-center text-white shadow-[0_16px_40px_rgba(0,27,99,0.18)] sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Ready to choose the right service path for your business?
          </h2>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#12d4da] px-8 py-4 text-sm font-semibold text-[var(--brand-primary)] transition hover:bg-[#32dde2]"
            >
              Start Your Growth Story
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}