// export default function Footer() {
//   return (
//     <footer className="border-t border-slate-200 bg-white">
//       <div className="mx-auto max-w-6xl px-6 py-8 text-sm ">
//                 <div className="text-center text-sm text-[#7d8ba8] text-slate-600">
//           © 2024 OptiVir Ads. Curating digital excellence in Kannur, Kerala.
//         </div> 
//       </div>
//     </footer>
//   );
// }



// import Link from "next/link";

// const footerLinks = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   { href: "/services", label: "Services" },
//   { href: "/blog", label: "Blog" },
//   { href: "/contact", label: "Contact" },
// ];

// const socialLinks = [
//   {
//     href: "https://instagram.com/optivirads",
//     label: "Instagram",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         className="h-5 w-5"
//         stroke="currentColor"
//         strokeWidth="1.8"
//       >
//         <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
//         <circle cx="12" cy="12" r="4" />
//         <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
//       </svg>
//     ),
//   },
//   {
//     href: "https://facebook.com/optivirads",
//     label: "Facebook",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         className="h-5 w-5"
//         stroke="currentColor"
//         strokeWidth="1.8"
//       >
//         <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3.5l.5-4H13V9c0-.7.3-1 1-1Z" />
//       </svg>
//     ),
//   },
//   {
//     href: "https://linkedin.com/company/optivirads",
//     label: "LinkedIn",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         className="h-5 w-5"
//         stroke="currentColor"
//         strokeWidth="1.8"
//       >
//         <rect x="4" y="9" width="4" height="11" />
//         <circle cx="6" cy="5.5" r="1.5" fill="currentColor" stroke="none" />
//         <path d="M12 20v-6.5c0-1.7 1.3-3 3-3s3 1.3 3 3V20" />
//         <path d="M12 9v11" />
//       </svg>
//     ),
//   },
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-[#001b63] text-white">
//       <div className="mx-auto max-w-6xl px-6 py-12">
//         <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
//           <div className="max-w-md">
//             <Link href="/" className="inline-flex items-center gap-3">
//               <img
//                 src="/logo.png"
//                 alt="OptiVir Ads Logo"
//                 className="h-12 w-auto object-contain"
//               />
//               <span className="text-xl font-bold tracking-wide text-white">
//                 OptiVir Ads
//               </span>
//             </Link>

//             <p className="mt-4 text-sm leading-7 text-[#d8e2ff]">
//               Performance-focused digital marketing for brands that want better
//               visibility, stronger leads, and consistent growth.
//             </p>
//           </div>

//           <div className="flex flex-col items-start gap-6 md:items-end">
//             <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-[#d8e2ff]">
//               {footerLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="transition hover:text-[#12d4da]"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </nav>

//             <div className="flex items-center gap-3">
//               {socialLinks.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label={item.label}
//                   className="flex h-10 w-10 items-center justify-center rounded-full bg-[#12d4da] text-[#001b63] transition hover:bg-white"
//                 >
//                   {item.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-[#b8c8f0]">
//           © 2024 OptiVir Ads. Curating digital excellence in Kannur, Kerala.
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://instagram.com/optivirads",
    label: "Instagram",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://facebook.com/optivirads",
    label: "Facebook",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3.5l.5-4H13V9c0-.7.3-1 1-1Z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/company/optivirads",
    label: "LinkedIn",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="4" y="9" width="4" height="11" />
        <circle cx="6" cy="5.5" r="1.5" fill="currentColor" stroke="none" />
        <path d="M12 20v-6.5c0-1.7 1.3-3 3-3s3 1.3 3 3V20" />
        <path d="M12 9v11" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1f311f] bg-[var(--brand-primary)] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl bg-white/95 px-3 py-2"
            >
              <img
                src="/logo-horizontal.png"
                alt="OptiVir Ads"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-4 text-sm leading-7 text-white/80">
              Performance-focused digital marketing for brands that want better
              visibility, stronger leads, and consistent growth.
            </p>
          </div>

          <div className="flex flex-col items-start gap-6 md:items-end">
            <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-white/90">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-[#cfe0c9]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-[var(--brand-primary)]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/70">
          © 2024 OptiVir Ads. Curating digital excellence in Kannur, Kerala.
        </div>
      </div>
    </footer>
  );
}