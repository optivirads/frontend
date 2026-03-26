import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-wide text-slate-900">
          OptiVir Ads
        </Link>

        
        <nav className="hidden gap-5 text-sm font-medium text-slate-700 md:flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-slate-700 md:hidden"
          aria-label="Menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}


// import Link from "next/link";

// export default function Header() {
//   return (
//     <header className="bg-[#f5f3f8]">
//       <div className="mx-auto flex max-w-[420px] items-center justify-between px-5 py-4">
//         <Link href="/" className="text-xl font-semibold text-slate-900">
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