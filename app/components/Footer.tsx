import Link from "next/link";

interface navigationPieces {
  name: string;
  href: string;
}

let navigation: navigationPieces[] = [
  { name: "About", href: "#" },
  { name: "Our Vision", href: "#" },
  { name: "Our Beliefs", href: "#" },
  { name: "Encounters", href: "#" },
  { name: "Give", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white sticky top-[100vh]">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-24 lg:px-2">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 Light Night, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
