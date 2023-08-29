"use client";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

interface navigationPieces {
  name: string;
  href: string;
  current: boolean;
}

let navigation: navigationPieces[] = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Encounters", href: "/encounters", current: false },
  { name: "Give", href: "/give", current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 bg-white drop-shadow z-40">
      <Popover as="div" className=" z-40">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 pb-6 pt-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex flex-1 items-center">
            <div className="flex w-full items-center justify-between lg:w-auto">
              <Link href="/">
                <Image
                  className="h-6 w-auto"
                  width="205"
                  height="60"
                  src="/light_logo.png"
                  alt=""
                />
              </Link>
              <div className="-mr-2 flex items-center lg:hidden">
                <Popover.Button className="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-slate-900 bg-opacity-0 p-2 text-black hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-10 lg:ml-10 lg:flex">
              {navigation.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className={classNames(
                    "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                    pathname === item.href
                      ? "border-indigo-500 text-black"
                      : "border-transparent text-black hover:border-orange-500 hover:text-black"
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <Transition
          as={Fragment}
          enter="transition duration-300 transform"
          enterFrom="opacity-0 -translate-y-12"
          enterTo="opacity-100 translate-y-0"
          leave="transition duration-300 transform"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-12"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top transform transition lg:hidden"
          >
            <div className="overflow-hidden bg-white shadow-lg ring-1 ring-black ring-opacity-5 h-max">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <Image className="h-6 w-auto" src="/light_logo.png" height="60" width="205" alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-blue-800 p-2 text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pb-6 pt-5">
                <div className="space-y-1 px-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-orange-500"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
