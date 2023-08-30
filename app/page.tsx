import Image from "next/image";

import aboutSectionImage from "../images/about_section.jpg";
import aboutImage from "../images/about-image.jpg";
import givingImage from "../images/giving-image.jpg";
import Link from "next/link";

const cards = [
  {
    name: "Our Beliefs",
    description:
      "See how we view God, Jesus, the Bible, man, and many significant aspects of our faith. Firmly rooted in Scripture, the beliefs of Light Night guide our decisions as a ministry.",
  },
  {
    name: "Our Vision",
    description:
      "Without a vision, we perish. See what Light Night's vision is, how we're working to accomplish it, and how you can partner with us.",
  },
  {
    name: "Our Team",
    description:
      "Executing the vision takes more than one person, it takes a dedicated group. View who is on our team and see how you can join us.",
  },
];

export default function Home() {
  return (
    <main className="bg-white overflow-hidden min-h-screen m-0 ">
      <div className="mx-auto max-w-7xl md:pb-32 pt-8 md:pt-16 lg:px-8">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl">
              We’re pursuing <span className="text-blue-700">Jesus</span>,
              advancing <span className="text-orange-500">Revival</span> and
              taking His{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
                Presence
              </span>{" "}
              to this generation
            </h1>
          </div>
          <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <div className="relative">
                <Image
                  src="/home_tile_1.jpg"
                  alt=""
                  width="500"
                  height="1000"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div className="relative">
                <Image
                  src="/home_tile_3.jpg"
                  alt=""
                  width="500"
                  height="1000"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="relative">
                <Image
                  src="/home_tile_2.jpg"
                  alt=""
                  width="500"
                  height="1000"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="w-44 flex-none space-y-8 pt-8 sm:pt-12">
              <div className="relative">
                <Image
                  src="/home_tile_4.jpg"
                  alt=""
                  width="500"
                  height="1000"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="relative">
                <Image
                  src="/home_tile_5.jpg"
                  alt=""
                  width="500"
                  height="1000"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <section className="p-4">
        <div
          className="w-full h-96 mt-8 rounded-md overflow-hidden bg-cover bg-center md:mt-0"
          style={{
            backgroundImage: `url(/home_about_section.jpg)`,
          }}
        >
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold">
                Learn About Light Night
              </h2>
              <p className="mt-2 text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore facere provident molestias ipsam sint voluptatum
                pariatur.
              </p>
              <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                <span>View All</span>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
      {/* Encounters Section */}
      <section className="p-4">
        <div
          className="w-full h-96 mt-8 rounded-md overflow-hidden bg-cover bg-center md:mt-0"
          style={{
            backgroundImage: `url(/home_encounters_section.jpg)`,
          }}
        >
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold">
                Encounters
              </h2>
              <p className="mt-2 text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore facere provident molestias ipsam sint voluptatum
                pariatur.
              </p>
              <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                <span>View All</span>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* End Encounters Section */}
      {/* Giving Section */}
      <section className="p-4">
        <div
          className="w-full h-96 mt-8 rounded-md overflow-hidden bg-cover bg-bottom md:mt-0"
          style={{
            backgroundImage: `url(/home_giving_section.jpg)`,
          }}
        >
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold">
                Giving
              </h2>
              <p className="mt-2 text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore facere provident molestias ipsam sint voluptatum
                pariatur.
              </p>
              <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                <span>Give now</span>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
