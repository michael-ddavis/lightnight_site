import Link from "next/link";
import Image from "next/image";

interface Encounter {
  id: number;
  image: string;
  title: string;
  church: string;
  location: string;
  location_url: string;
  time: string;
}

const encountersList: Encounter[] = [
  {
    id: 1,
    image: "/Home_worship_night.png",
    title: "Sat, Feb 22nd • Midlothian, VA",
    church: "Home",
    location: "15737 Whirland Drive, Midlothian, 23112",
    location_url: "https://maps.app.goo.gl/XkZaLt1KdSReGUsG7",
    time: "7pm - 9pm",
  },
  {
    id: 2,
    image: "/March_worship_night.png",
    title: "Fri, March 14th • Richmond, VA",
    church: "Divine World Changers",
    location: "6421 Rigsby Rd",
    location_url: "https://maps.app.goo.gl/HxP581rB8iUGqXbj9",
    time: "7pm - 9pm",
  }
];

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
          className="object-center w-full object-cover h-56 sm:h-64 md:h-72 lg:h-96 brightness-50"
        />
        <h1 className="absolute text-2xl md:text-4xl lg:text-6xl text-white font-bold uppercase tracking-wide top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Encounters
        </h1>
      </div>

      <div className="relative mx-auto max-w-6xl py-12 sm:py-2 md:py-8 lg:py-12 px-4 lg:px-8">
        {encountersList.map((encounter) => (
          <div key={encounter.id}>
            <div className="items-center flex flex-wrap my-8">
              <Image
                alt="..."
                height="500"
                width="1000"
                className="rounded-lg shadow-lg object-fit w-full h-full sm:w-9/12 md:w-7/12 lg:w-6/12 ml-auto mr-auto"
                src={encounter.image}
              />
              <div className="w-full md:w-5/12 ml-auto mr-auto md:pl-8 py-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-700">
                  {encounter.title}
                </h3>
                <p className="text-xl md:text-2xl font-medium text-gray-600">
                  {encounter.church}
                </p>
                <p className="mt-2 text-base md:text-lg leading-relaxed text-black">
                  <span className="font-semibold">Location:</span>{" "}
                  <Link
                    href={encounter.location_url}
                    target="_blank"
                    className="text-blue-700"
                  >
                    {encounter.location}
                  </Link>
                </p>
                <p className="mt-2 text-base md:text-lg leading-relaxed text-black">
                  <span className="font-semibold">Time:</span> {encounter.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
