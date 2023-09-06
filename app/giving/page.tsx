import Image from "next/image";
import Link from "next/link";

export default function Giving() {
  return (
    <main className="bg-white">
      {/* Image section */}
      <div className="xl:mx-auto xl:max-w-full relative">
        <Image
          src="/giving_header.jpeg"
          alt=""
          width="505"
          height="100"
          className="object-center w-full object-cover h-56 sm:h-64 md:h-72 lg:h-96 brightness-50"
        />
        <h1 className="absolute text-3xl md:text-4xl lg:text-6xl text-white font-bold uppercase tracking-wide top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Giving
        </h1>
      </div>

      <div className="relative overflow-hidden bg-white py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <p className="text-xl text-center leading-8 text-gray-700">
              As we continue to move forward with bringing a move of God to this
              generation, we need support. Your giving contributes to booking
              worship spaces, blessing our volunteers, and
              purchasing audio equipment to ensure that we operate in
              excellence and begin traveling to different places with our own equipment.
            </p>
          </div>
          <div className="flex flex-row justify-center items-center p-16">
            <Link
              href="https://donate.stripe.com/00g00k9eW4E5be03cc"
              target="_blank"
              className="mx-auto bg-orange-500 hover:bg-orange-700 text-white text-lg sm:text-xl md:text-2xl lg:text-2xl px-8 py-4 rounded-full"
            >
              GIVE ONLINE
            </Link>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
              <figure className="border-l border-blue-600 pl-8">
                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  <p>
                    You will do well to send them on their journey in a manner
                    worthy of God. For they have gone out for the sake of the
                    name, accepting nothing from the Gentiles. Therefore we
                    ought to support people like these, that we may be fellow
                    workers for the truth.
                  </p>
                </blockquote>
                <figcaption className="mt-4 flex gap-x-4">
                  <div className="text-sm leading-6">
                    <div className="font-semibold text-gray-900">
                      3 John 1:6-8
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
              <p>
                Our first goal is to aquire the necessary audio equipment to be
                able to take our worship nights to any church or venue with
                ease. Having the right equipment will ensure that our services
                are held in excellence for those in person and online. The
                approximate cost for everything, long term will be{" "}
                <span className="font-semibold">~$40,000</span>
              </p>
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Phase 1 - $5000
                    </strong>{" "}
                    <ul className="list-disc list-inside">
                      <li>
                        <Link
                          className="underline text-blue-600"
                          target="_blank"
                          href="https://www.sweetwater.com/store/detail/U4R4--xvive-audio-u4r4-wireless-in-ear-monitoring-system"
                        >
                          In Ear System
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="underline text-blue-600"
                          target="_blank"
                          href="https://www.sweetwater.com/store/detail/K12.2StdPk--qsc-k12.2-powered-speaker-pair-with-stands-and-cables"
                        >
                          K12 Speakers, carrying bags & cables (2)
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="underline text-blue-600"
                          target="_blank"
                          href="https://www.sweetwater.com/store/detail/X32RackPackS--behringer-x32-rack-pack-with-s16-stage-box"
                        >
                          Behringer X32 Rack
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="underline text-blue-600"
                          target="_blank"
                          href=" https://www.sweetwater.com/store/detail/F1220D--behringer-eurolive-f1220d-250w-12-inch-powered-speaker"
                        >
                          Floor Monitor (2)
                        </Link>
                      </li>
                    </ul>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Phase 2
                    </strong>{" "}
                    <p>TBD</p>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Phase 3
                    </strong>{" "}
                    <p>TBD</p>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
