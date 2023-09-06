import Link from "next/link";
import Image from "next/image";

export default function contact() {
  return (
    <main className="bg-white min-h-screen">
      {/* Image section */}
      <div className="xl:mx-auto xl:max-w-full relative">
        <Image
          src="/contact_header.jpeg"
          alt=""
          width="1000"
          height="1000"
          className="object-center w-full object-cover h-56 sm:h-64 md:h-72 lg:h-96 brightness-50"
        />
        <h1 className="absolute text-2xl md:text-4xl lg:text-6xl text-white font-bold uppercase tracking-wide top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Contact Us
        </h1>
      </div>
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex"></div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  We want to hear from you!
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Whether you want to learn more about us, book us for a worship
                  event, join our team or even just grab coffee and chat, give
                  us a shout and we&apos;ll be in touch with you soon!{" "}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="https://forms.gle/NytffuUdfJjrSpVy9"
                    target="_blank"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/contact_image_1.jpg"
            width="1000"
            height="1000"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
