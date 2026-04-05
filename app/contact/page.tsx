import Link from "next/link";

const contactMethods = [
  {
    title: "Email Us",
    text: "optivirads@gmail.com",
    subtext: "For proposals, project discussions, and business inquiries.",
    icon: "✉",
  },
  {
    title: "Call Us",
    text: "+91 99999 99999",
    subtext: "Speak with us directly about your goals and requirements.",
    icon: "☎",
  },
  {
    title: "Location",
    text: "Kannur, Kerala, India",
    subtext: "Working with businesses across Kerala, India, and beyond.",
    icon: "⌖",
  },
];

const expectations = [
  "Clear understanding of your business goals and growth stage.",
  "A recommendation on the right channels for visibility and leads.",
  "A practical discussion on SEO, ads, content, or brand positioning.",
  "A focused next-step plan without unnecessary complexity.",
];

type ContactPageProps = {
  searchParams: Promise<{
    success?: string;
    error?: string;
  }>;
};

const ui = {
  primaryButton:
    "inline-flex items-center justify-center rounded-xl bg-[var(--brand-primary)] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,27,99,0.18)] transition hover:bg-[#001552]",
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const success = params.success === "1";
  const error = params.error;

  return (
    <main className="bg-[#f6f4f8] text-[#041b57]">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-6 lg:px-8 xl:pt-12">
        <div className="grid gap-12 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <div className="max-w-xl">
            <p className="inline-flex rounded-full bg-[#8ee4ea] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0b7280]">
              Get In Touch
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.03em] text-[var(--brand-primary)] sm:text-5xl lg:text-6xl xl:text-7xl">
              Let&apos;s build your
              <br />
              next chapter of
              <br />
              <span className="text-[#0c7f8c]">digital growth.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#33456f] sm:text-lg">
              Whether you need stronger SEO, better ad performance, or a more
              premium digital presence, we&apos;re ready to help you move
              forward with clarity and confidence.
            </p>

            <div className="mt-10 space-y-5">
              {contactMethods.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-lg text-[#0c7f8c] shadow-sm">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[var(--brand-primary)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-base font-medium text-[var(--brand-primary)]">
                      {item.text}
                    </p>
                    <p className="mt-1 text-sm leading-7 text-[#33456f]">
                      {item.subtext}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ContactFormCard success={success} error={error} />
        </div>
      </section>

      <section className="border-t border-white/70 py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#0c7f8c]">
            What To Expect
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-tight tracking-[-0.03em] text-[var(--brand-primary)] sm:text-4xl lg:text-5xl">
            A focused conversation built around your business goals.
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
          <div className="grid gap-14 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] text-[var(--brand-primary)] sm:text-5xl">
                Working with us starts with clarity.
              </h2>

              <p className="mt-6 text-lg leading-9 text-[#33456f]">
                We keep the process simple, strategic, and tailored to where
                your business is right now.
              </p>

              <div className="mt-10 space-y-5">
                {expectations.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-primary)] text-sm text-white">
                      ✓
                    </div>
                    <p className="text-base leading-8 text-[#33456f]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="min-h-[240px] rounded-[28px] bg-[#ece9f0] p-8 shadow-sm">
                <div className="flex h-full flex-col justify-end">
                  <p className="text-5xl font-bold text-[var(--brand-primary)]">24h</p>
                  <p className="mt-3 text-base text-[#33456f]">
                    Typical response window
                  </p>
                </div>
              </div>

              <div className="min-h-[240px] rounded-[28px] bg-[#8ee4ea] p-8 shadow-sm">
                <p className="text-2xl font-semibold text-[#0c7f8c]">↗</p>
                <p className="mt-14 max-w-[240px] text-3xl font-medium leading-tight tracking-[-0.03em] text-[#0b7280]">
                  Tailored strategy for growth-focused brands.
                </p>
              </div>

              <div className="relative min-h-[320px] overflow-hidden rounded-[28px] bg-[#21386d] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
                  alt="Team meeting"
                  className="h-full w-full object-cover opacity-45"
                />
                <div className="absolute inset-0 bg-[#21386d]/35" />
                <div className="absolute inset-0 p-8">
                  <p className="max-w-[240px] text-4xl font-semibold leading-tight tracking-[-0.03em] text-white">
                    Conversations built around outcomes, not noise.
                  </p>
                </div>
              </div>

              <div className="min-h-[240px] rounded-[28px] bg-[#ece9f0] p-8 shadow-sm">
                <p className="text-5xl font-bold text-[var(--brand-primary)]">1:1</p>
                <p className="mt-3 text-base text-[#33456f]">
                  Dedicated discussion for your business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactFormCard({
  success,
  error,
}: {
  success: boolean;
  error?: string;
}) {
  return (
    <form action="/api/contact" method="POST">
      <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.10)] sm:p-8">
        {success ? (
          <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 px-4 py-4 text-sm text-green-800">
            Enquiry submitted successfully. We&apos;ll get back to you soon.
          </div>
        ) : null}

        {error ? (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-800">
            {error === "missing" && "Please fill in all required fields."}
            {error === "email" && "Please enter a valid email address."}
            {error === "phone" && "Please enter a valid phone number."}
            {error === "name" && "Please enter a valid full name."}
            {error === "message" && "Message must be at least 20 characters."}
            {error === "config" && "Email sending is not configured yet."}
            {error === "server" && "Something went wrong while sending your enquiry."}
          </div>
        ) : null}

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            id="name"
            name="name"
            label="Full Name"
            placeholder="Your name"
            required
            minLength={2}
            maxLength={80}
            pattern="^[A-Za-z][A-Za-z\s.'-]{1,79}$"
            title="Please enter a valid full name"
          />

          <FormField
            id="email"
            name="email"
            type="email"
            label="Email Address"
            placeholder="you@example.com"
            required
            maxLength={120}
          />

          <FormField
            id="phone"
            name="phone"
            label="Phone Number"
            placeholder="+91 9876543210"
            required
            minLength={8}
            maxLength={20}
            pattern="^[0-9+\-\s()]{8,20}$"
            title="Please enter a valid phone number"
          />

          <FormField
            id="businessType"
            name="businessType"
            label="Business Type"
            placeholder="Clinic, cafe, startup..."
            required
            minLength={2}
            maxLength={80}
          />
        </div>

        <div className="mt-5">
          <FormField
            id="services"
            name="services"
            label="Services Needed"
            placeholder="SEO, Ads, Social Media, Content..."
            required
            minLength={2}
            maxLength={120}
          />
        </div>

        <div className="mt-5">
          <TextAreaField
            id="message"
            name="message"
            label="Tell Us About Your Goals"
            placeholder="Tell us about your business, your goals, and what kind of growth you're looking for."
            rows={6}
            required
            minLength={20}
            maxLength={2000}
          />
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-7 text-[#33456f]">
            We usually reply within 24 hours on working days.
          </p>

          <button type="submit" className={ui.primaryButton}>
            Send Inquiry
          </button>
        </div>
      </div>
    </form>
  );
}

function FormField({
  id,
  name,
  label,
  placeholder,
  type = "text",
  required,
  minLength,
  maxLength,
  pattern,
  title,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  title?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-[var(--brand-primary)]">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        title={title}
        className="mt-2 h-14 w-full rounded-xl border border-[#d9dfea] bg-[#f8f9fc] px-4 text-sm text-[var(--brand-primary)] outline-none transition focus:border-[#0c7f8c]"
      />
    </div>
  );
}

function TextAreaField({
  id,
  name,
  label,
  placeholder,
  rows,
  required,
  minLength,
  maxLength,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  rows: number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-[var(--brand-primary)]">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        className="mt-2 w-full rounded-xl border border-[#d9dfea] bg-[#f8f9fc] px-4 py-4 text-sm leading-7 text-[var(--brand-primary)] outline-none transition focus:border-[#0c7f8c]"
      />
    </div>
  );
}