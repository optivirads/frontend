// import Link from "next/link";

// export default function Header() {
//   return (
//     <header className="border-b border-slate-200 bg-white">
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
//         <Link href="/" className="text-lg font-bold tracking-wide text-slate-900">
//           OptiVir Ads
//         </Link>

        
//         <nav className="hidden gap-5 text-sm font-medium text-slate-700 md:flex">
//           <Link href="/">Home</Link>
//           <Link href="/about">About</Link>
//           <Link href="/services">Services</Link>
//           <Link href="/blog">Blog</Link>
//           <Link href="/contact">Contact</Link>
//         </nav>

//         <button
//           type="button"
//           className="rounded-md p-2 text-slate-700 md:hidden"
//           aria-label="Menu"
//         >
//           ☰
//         </button>
//       </div>
//     </header>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useState } from "react";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   { href: "/services", label: "Services" },
//   { href: "/blog", label: "Blog" },
//   { href: "/contact", label: "Contact" },
// ];

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="border-b border-slate-200 bg-white">
//       <div className="mx-auto max-w-6xl px-6 py-4">
//         <div className="flex items-center justify-between">
//           <Link
//             href="/"
//             className="text-lg font-bold tracking-wide text-slate-900"
//           >
//             OptiVir Ads
//           </Link>

//           <nav className="hidden gap-5 text-sm font-medium text-slate-700 md:flex">
//             {navLinks.map((link) => (
//               <Link key={link.href} href={link.href}>
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           <button
//             type="button"
//             className="rounded-md p-2 text-slate-700 md:hidden"
//             aria-label="Toggle menu"
//             aria-expanded={isOpen}
//             onClick={() => setIsOpen((prev) => !prev)}
//           >
//             {isOpen ? "✕" : "☰"}
//           </button>
//         </div>

//         {isOpen ? (
//           <nav className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4 text-sm font-medium text-slate-700 md:hidden">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="rounded-md px-2 py-2 hover:bg-slate-50"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>
//         ) : null}
//       </div>
//     </header>
//   );
// }


"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-[#223822] bg-[var(--brand-primary)]">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center">
            <img
              src="/logo-horizontal.png"
              alt="OptiVir Ads"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="hidden gap-6 text-sm font-medium text-white/90 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-[#dce7d7]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="rounded-md p-2 text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {isOpen ? (
          <nav className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 text-sm font-medium text-white md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-2 transition hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}