"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

type NavItem =
  | {
      type: "link";
      name: string;
      href: string;
    }
  | {
      type: "menu";
      name: string;
      href: string; // parent anchor (About)
      children: { name: string; href: string }[];
    };

const navItems: NavItem[] = [
  {
    type: "menu",
    name: "About",
    href: "/about",
    children: [
      { name: "About Alabaster", href: "/about" },
      { name: "What We Believe", href: "/beliefs" },
    ],
  },
  { type: "link", name: "Light Night", href: "/light-night" },
  { type: "link", name: "Formation", href: "/formation" },
  { type: "link", name: "Merch", href: "/merch" },
  { type: "link", name: "Contact", href: "/contact" },
];

function classNames(...classes: (string | boolean | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <Disclosure as="nav" className="bg-[#050814]/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-900/60">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* LEFT: Logo (bigger, always left-aligned) */}
              <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/images/logos/alabaster.svg" // swap this to your transparent Alabaster logo
                    alt="Alabaster"
                    width={180}
                    height={48}
                    className="h-12 w-auto sm:h-14 lg:h-16"
                  />
                </Link>
              </div>

              {/* DESKTOP NAV */}
              <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:gap-6">
                <div className="flex items-center gap-4 text-xs font-medium">
                  {navItems.map((item) => {
                    if (item.type === "link") {
                      const active = isActive(item.href);
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            "relative px-1 py-1 transition-colors",
                            active
                              ? "text-[#f4cf88]"
                              : "text-slate-200 hover:text-[#f4cf88]"
                          )}
                        >
                          <span>{item.name}</span>
                          {active && (
                            <span className="pointer-events-none absolute inset-x-0 -bottom-1 mx-auto h-[2px] w-full rounded-full bg-gradient-to-r from-[#f4cf88] via-[#e0c9c1] to-[#f4cf88]" />
                          )}
                        </Link>
                      );
                    }

                    // About menu with "What We Believe" as sub-item
                    const activeParent =
                      isActive(item.href) ||
                      item.children.some((c) => isActive(c.href));

                    return (
                      <Menu as="div" className="relative" key={item.name}>
                        <Menu.Button
                          className={classNames(
                            "inline-flex items-center gap-1 px-1 py-1 text-xs font-medium transition-colors",
                            activeParent
                              ? "text-[#f4cf88]"
                              : "text-slate-200 hover:text-[#f4cf88]"
                          )}
                        >
                          <span>{item.name}</span>
                          <ChevronDownIcon className="h-3.5 w-3.5" />
                          {activeParent && (
                            <span className="pointer-events-none absolute inset-x-0 -bottom-1 mx-auto h-[2px] w-full rounded-full bg-gradient-to-r from-[#f4cf88] via-[#e0c9c1] to-[#f4cf88]" />
                          )}
                        </Menu.Button>

                        {/* Fade + slide dropdown */}
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-150"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Menu.Items className="absolute right-0 mt-2 w-52 origin-top-right rounded-xl border border-slate-800 bg-[#050814] shadow-xl ring-1 ring-black/10 focus:outline-none">
                            <div className="py-1 text-xs">
                              {item.children.map((child) => {
                                const activeChild = isActive(child.href);
                                return (
                                  <Menu.Item key={child.name}>
                                    {({ active }) => (
                                      <Link
                                        href={child.href}
                                        className={classNames(
                                          "flex items-center justify-between px-3 py-2",
                                          active
                                            ? "bg-slate-900/70 text-slate-100"
                                            : "text-slate-200",
                                          activeChild &&
                                            "border-l-2 border-[#f4cf88]"
                                        )}
                                      >
                                        <span>{child.name}</span>
                                        {activeChild && (
                                          <span className="h-1.5 w-1.5 rounded-full bg-[#f4cf88]" />
                                        )}
                                      </Link>
                                    )}
                                  </Menu.Item>
                                );
                              })}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    );
                  })}
                </div>

                {/* Desktop Give button */}
                <Link
                  href="/giving"
                  className="ml-4 inline-flex items-center rounded-full border border-[#f4cf88]/70 bg-[#e0c9c1] px-4 py-1.5 text-xs font-semibold text-[#050814] shadow-sm hover:brightness-110"
                >
                  Give
                </Link>
              </div>

              {/* MOBILE: toggle button (logo stays left) */}
              <div className="flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f4cf88] focus:ring-offset-2 focus:ring-offset-[#050814]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-5 w-5" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* MOBILE MENU PANEL */}
          <Disclosure.Panel className="md:hidden border-t border-slate-900/60 bg-[#050814]">
            <div className="space-y-1 px-4 pt-3 pb-4 text-sm">
              {/* About + sublinks stacked */}
              {navItems.map((item) => {
                if (item.type === "link") {
                  const active = isActive(item.href);
                  return (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      href={item.href}
                      className={classNames(
                        "block rounded-md px-3 py-2",
                        active
                          ? "bg-slate-900 text-[#f4cf88]"
                          : "text-slate-200 hover:bg-slate-900/70 hover:text-slate-50"
                      )}
                    >
                      {item.name}
                    </Disclosure.Button>
                  );
                }

                const activeParent =
                  isActive(item.href) ||
                  item.children.some((c) => isActive(c.href));

                return (
                  <div key={item.name} className="space-y-1">
                    <Disclosure.Button
                      as={Link}
                      href={item.href}
                      className={classNames(
                        "flex items-center justify-between rounded-md px-3 py-2",
                        activeParent
                          ? "bg-slate-900 text-[#f4cf88]"
                          : "text-slate-200 hover:bg-slate-900/70 hover:text-slate-50"
                      )}
                    >
                      <span>{item.name}</span>
                    </Disclosure.Button>
                    <div className="ml-4 space-y-1 border-l border-slate-800 pl-3">
                      {item.children.map((child) => {
                        const activeChild = isActive(child.href);
                        return (
                          <Disclosure.Button
                            key={child.name}
                            as={Link}
                            href={child.href}
                            className={classNames(
                              "block rounded-md px-3 py-1.5 text-xs",
                              activeChild
                                ? "bg-slate-900 text-[#f4cf88]"
                                : "text-slate-300 hover:bg-slate-900/70 hover:text-slate-50"
                            )}
                          >
                            {child.name}
                          </Disclosure.Button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {/* Mobile Give button – inline, not giant */}
              <Disclosure.Button
                as={Link}
                href="/giving"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-[#f4cf88]/70 bg-[#e0c9c1] px-4 py-2 text-xs font-semibold text-[#050814] hover:brightness-110"
              >
                Give
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
