"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const GIVE_URL = "/giving";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [aboutMobileOpen, setAboutMobileOpen] = React.useState(false);
  const [aboutDesktopOpen, setAboutDesktopOpen] = React.useState(false);

  const desktopAboutRef = React.useRef<HTMLDivElement | null>(null);

  // Close mobile menu & dropdown on route change
  React.useEffect(() => {
    setMobileOpen(false);
    setAboutMobileOpen(false);
    setAboutDesktopOpen(false);
  }, [pathname]);

  // Close desktop "About" dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!desktopAboutRef.current) return;
      if (!desktopAboutRef.current.contains(e.target as Node)) {
        setAboutDesktopOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#050814]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-5 lg:px-6">
        {/* LEFT: LOGO (HOME LINK) */}
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Go to home">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logos/alabaster.svg"
                alt="Alabaster logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="hidden text-xs font-semibold tracking-[0.18em] text-slate-100 sm:inline-block">
                ALABASTER
              </span>
            </div>
          </Link>
        </div>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden items-center gap-6 text-xs font-medium text-slate-200 md:flex">
          {/* About dropdown */}
          <div
            ref={desktopAboutRef}
            className="relative"
            onMouseEnter={() => setAboutDesktopOpen(true)}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1 rounded-full px-2 py-1 transition ${
                isActive("/about") ||
                isActive("/formation") ||
                isActive("/beliefs")
                  ? "text-[#f4cf88]"
                  : "hover:text-[#f4cf88]"
              }`}
              onClick={() =>
                setAboutDesktopOpen((prev) => !prev)
              }
            >
              <span>About</span>
              <span
                className={`text-[10px] transition-transform ${
                  aboutDesktopOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {/* Dropdown panel */}
            {aboutDesktopOpen && (
              <div className="absolute left-0 mt-2 w-52 rounded-2xl border border-slate-800 bg-black/95 p-2 text-xs shadow-xl">
                <Link
                  href="/about"
                  className={`block rounded-xl px-3 py-2 hover:bg-white/5 ${
                    isActive("/about")
                      ? "text-[#f4cf88]"
                      : "text-slate-200"
                  }`}
                >
                  Our Story
                </Link>
                <Link
                  href="/formation"
                  className={`mt-1 block rounded-xl px-3 py-2 hover:bg-white/5 ${
                    isActive("/formation")
                      ? "text-[#f4cf88]"
                      : "text-slate-200"
                  }`}
                >
                  Formation
                </Link>
                <Link
                  href="/beliefs"
                  className={`mt-1 block rounded-xl px-3 py-2 hover:bg-white/5 ${
                    isActive("/beliefs")
                      ? "text-[#f4cf88]"
                      : "text-slate-200"
                  }`}
                >
                  What We Believe
                </Link>
              </div>
            )}
          </div>

          {/* Light Night */}
          <Link
            href="/light-night"
            className={`rounded-full px-2 py-1 transition ${
              isActive("/light-night")
                ? "text-[#f4cf88]"
                : "hover:text-[#f4cf88]"
            }`}
          >
            Light Night
          </Link>

          {/* Merch (top-level) */}
          <Link
            href="/merch"
            className={`rounded-full px-2 py-1 transition ${
              isActive("/merch")
                ? "text-[#f4cf88]"
                : "hover:text-[#f4cf88]"
            }`}
          >
            Merch
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className={`rounded-full px-2 py-1 transition ${
              isActive("/contact")
                ? "text-[#f4cf88]"
                : "hover:text-[#f4cf88]"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* RIGHT: GIVE BUTTON + MOBILE TOGGLE */}
        <div className="flex items-center gap-3">
          <Link
            href={GIVE_URL}
            className="hidden items-center rounded-full border border-[#f4cf88]/80 bg-[#e0c9c1] px-4 py-1.5 text-[11px] font-semibold text-[#050814] shadow-[0_0_18px_rgba(250,204,21,0.35)] transition hover:brightness-110 md:inline-flex"
          >
            Give to Alabaster
          </Link>

          {/* Mobile menu button (unchanged look) */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-100 hover:border-[#f4cf88] hover:text-[#f4cf88] md:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          >
            <span className="sr-only">Open navigation</span>
            <div className="flex flex-col gap-[3px]">
              <span className="h-[2px] w-4 rounded-full bg-current" />
              <span className="h-[2px] w-3 rounded-full bg-current" />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden border-t border-slate-800 bg-[#050814]/98 backdrop-blur-md transition-[max-height,opacity,transform] duration-250 ${
          mobileOpen
            ? "max-h-[420px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-4">
          <ul className="space-y-2 text-sm font-medium text-slate-100">
            {/* About accordion */}
            <li>
              <button
                type="button"
                onClick={() =>
                  setAboutMobileOpen((prev) => !prev)
                }
                className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left hover:bg:white/5 hover:bg-white/5"
              >
                <span>About</span>
                <span
                  className={`text-[10px] transition-transform ${
                    aboutMobileOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
              <div
                className={`mt-1 overflow-hidden pl-3 text-[13px] text-slate-200 transition-[max-height,opacity,transform] duration-200 ${
                  aboutMobileOpen
                    ? "max-h-40 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-1"
                }`}
              >
                <Link
                  href="/about"
                  className={`block rounded-lg px-3 py-2 hover:bg-white/5 ${
                    isActive("/about")
                      ? "text-[#f4cf88]"
                      : "text-slate-200"
                  }`}
                >
                  Our Story
                </Link>
                <Link
                  href="/formation"
                  className={`mt-1 block rounded-lg px-3 py-2 hover:bg:white/5 hover:bg-white/5 ${
                    isActive("/formation")
                      ? "text-[#f4cf88]"
                      : "text-slate-200"
                  }`}
                >
                  Formation
                </Link>
                <Link
                  href="/beliefs"
                  className={`mt-1 block rounded-lg px-3 py-2 hover:bg:white/5 hover:bg-white/5 ${
                    isActive("/beliefs")
                      ? "text-[#f4cf88]"
                      : "text-slate-200"
                  }`}
                >
                  What We Believe
                </Link>
              </div>
            </li>

            <li>
              <Link
                href="/light-night"
                className={`block rounded-xl px-3 py-2 hover:bg:white/5 hover:bg-white/5 ${
                  isActive("/light-night")
                    ? "text-[#f4cf88]"
                    : "text-slate-100"
                }`}
              >
                Light Night
              </Link>
            </li>

            <li>
              <Link
                href="/merch"
                className={`block rounded-xl px-3 py-2 hover:bg:white/5 hover:bg-white/5 ${
                  isActive("/merch")
                    ? "text-[#f4cf88]"
                    : "text-slate-100"
                }`}
              >
                Merch
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`block rounded-xl px-3 py-2 hover:bg:white/5 hover:bg-white/5 ${
                  isActive("/contact")
                    ? "text-[#f4cf88]"
                    : "text-slate-100"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="mt-4 border-t border-slate-800 pt-4">
            <Link
              href={GIVE_URL}
              className="inline-flex w-full items-center justify-center rounded-full border border-[#f4cf88]/80 bg-[#e0c9c1] px-4 py-2 text-[11px] font-semibold text-[#050814] shadow-[0_0_18px_rgba(250,204,21,0.35)] transition hover:brightness-110"
            >
              Give to Alabaster
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
