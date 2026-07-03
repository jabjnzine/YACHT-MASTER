const links = [
  { href: "#about", label: "About" },
  { href: "#experiences", label: "Experiences" },
  { href: "#yacht", label: "The Yacht" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black pb-8 pt-16 text-silver">
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <div className="flex flex-wrap items-center justify-between gap-7 border-b border-silver/[.18] pb-9">
          <div className="flex items-center gap-3 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-white font-serif-brand text-[19px]">
              Y
            </span>
            <span className="font-serif-brand text-lg tracking-[4px]">
              YACHT MASTER
            </span>
          </div>
          <div className="flex flex-wrap gap-7 text-[11px] uppercase tracking-[2px]">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 pt-6 text-xs tracking-[1px]">
          <span>© 2026 Yacht Master. All rights reserved.</span>
          <span className="font-serif-brand italic text-pearl">
            The experience is what stays with you forever.
          </span>
        </div>
      </div>
    </footer>
  );
}
