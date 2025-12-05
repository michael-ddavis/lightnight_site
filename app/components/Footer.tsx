"use client";

import Link from "next/link";
import content from "../../content.config";

const footer = (content as any).footer || {};

export default function Footer() {
  if (!footer) return null;

  const year =
    footer?.copyright?.yearFallback ?? new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#050814] text-slate-300">
      {/* Main row */}
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        {/* Brand / tagline */}
        <div className="max-w-sm">
          <p className="text-sm font-semibold text-slate-50">
            {footer.churchName ?? "Alabaster"}
          </p>
          {footer.tagline && (
            <p className="mt-1 text-xs text-[#e0c9c1]">
              {footer.tagline}
            </p>
          )}
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Navigate
            </p>
            <div className="mt-2 flex flex-col gap-1">
              {footer.nav?.primary?.map((item: any) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs hover:text-[#e0c9c1]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Next steps
            </p>
            <div className="mt-2 flex flex-col gap-1">
              {footer.nav?.secondary?.map((item: any) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs hover:text-[#f4cf88]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact / social */}
        <div className="space-y-1 text-xs sm:text-right">
          {footer.contact?.email && (
            <p>
              <span className="font-semibold">
                {footer.contact.emailLabel || "Email"}:{" "}
              </span>
              <a
                href={`mailto:${footer.contact.email}`}
                className="hover:text-[#e0c9c1]"
              >
                {footer.contact.email}
              </a>
            </p>
          )}

          {footer.social?.instagram?.url && (
            <p>
              <a
                href={footer.social.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#f4cf88]"
              >
                {footer.social.instagram.handle}
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-3 text-center text-[11px] text-slate-500">
        <span>
          {footer.copyright?.prefix || "©"} {year}{" "}
          {footer.copyright?.owner || footer.churchName || "Alabaster"}. All
          rights reserved.
        </span>
      </div>
    </footer>
  );
}
