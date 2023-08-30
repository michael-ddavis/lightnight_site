import Link from "next/link";
import Image from "next/image";

export default function encounters() {
  return (
    <main className="bg-white">
      {/* Image section */}
      <div className="xl:mx-auto xl:max-w-full relative">
        <Image
          src="/encounters_header.jpg"
          alt=""
          width="505"
          height="100"
          className="object-center w-full object-cover lg:h-96 brightness-50"
        />
        <h1 className="absolute text-2xl md:text-4xl lg:text-6xl text-white font-bold uppercase tracking-wide top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Encounters
        </h1>
      </div>

      <div className="relative overflow-hidden py-12 sm:py-24 text-gray-400">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <section className="relative bg-blueGray-50">
            <div className="items-center flex flex-wrap">
              <div className="w-full h-full sm:w-9/12 md:w-7/12 ml-auto mr-auto">
                <Image
                  alt="..."
                  height="500"
                  width="1000"
                  className="rounded-lg shadow-lg object-fit"
                  src="/worship_night.jpg"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 md:pl-8 py-4">
                <div className="md:pr-12">
                  <h3 className="text-2xl font-semibold">
                    Sept 8th • Richmond, VA
                  </h3>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-blueGray-500">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you&apos;re good to go.
                  </p>
                  <button className="flex items-center mt-4 text-indigo-500 text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                    <span>More Info</span>
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
        </div>
      </div>
      <div className="relative overflow-hidden pb-8 sm:pb-16 text-gray-400">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <section className="relative bg-blueGray-50">
            <div className="items-center flex flex-wrap">
              <div className="w-full h-full sm:w-9/12 md:w-6/12 ml-auto mr-auto">
                <Image
                  alt="..."
                  height="500"
                  width="1000"
                  className="rounded-lg shadow-lg object-fit"
                  src="/rally.jpeg"
                />
              </div>
              <div className="w-full md:w-6/12 ml-auto mr-auto px-4 md:pl-8 py-4">
                <div className="md:pr-12">
                  <h3 className="text-2xl font-semibold">
                    Oct 6th • Ashland, VA
                  </h3>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-blueGray-500">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you&apos;re good to go.
                  </p>
                  <button className="flex items-center mt-4 text-indigo-500 text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                    <span>More Info</span>
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
        </div>
      </div>
    </main>
  );
}
