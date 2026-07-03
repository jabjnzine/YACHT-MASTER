"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "เกี่ยวกับเรา" },
  { href: "#experiences", label: "ประสบการณ์" },
  { href: "#yacht", label: "เรือของเรา" },
  { href: "#gallery", label: "แกลเลอรี" },
  { href: "#contact", label: "ติดต่อ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-400 ${
        scrolled
          ? "bg-navy/95 shadow-[0_2px_24px_rgba(0,0,0,0.25)] py-3.5"
          : "py-5"
      }`}
    >
      <div className="mx-auto flex w-[90%] max-w-[1200px] items-center justify-between">
        <a href="#" className="flex items-center gap-3 text-white">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-white font-serif-brand text-[22px] font-semibold">
            Y
          </span>
          <span>
            <span className="block font-serif-brand text-xl font-medium tracking-[4px]">
              YACHT MASTER
            </span>
            <span className="block text-[8.5px] uppercase tracking-[3px] text-silver">
              Luxury Yacht Experiences
            </span>
          </span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-9">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative pb-1 text-xs font-normal uppercase tracking-[2.5px] text-white"
                >
                  {l.label}
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="hidden border border-white px-6 py-2.5 text-[11px] uppercase tracking-[2.5px] text-white transition-colors duration-300 hover:bg-white hover:text-navy md:inline-block"
        >
          จองทริป
        </a>

        <button
          className="text-[26px] text-white md:hidden"
          aria-label="menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <nav className="absolute inset-x-0 top-full bg-navy/[.98] px-[6%] py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-xs uppercase tracking-[2.5px] text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
