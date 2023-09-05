import Link from "next/link";
import Image from "next/image";

interface faqPieces {
  id: number;
  scripture_id: number
  question: string;
  answer: string;
  scriptures?: string[];
}

const faqs: faqPieces[] = [
  {
    id: 1,
    scripture_id: 100,
    question: "The Bible",
    answer:
      "The Bible is God’s Word to all people. It was written by human authors under the supernatural guidance of the Holy Spirit. Because it was inspired by God, the Bible is truth without any mixture of error and is completely relevant to our daily lives.",
    scriptures: ["Genesis 1:1", "Genesis 1:2", "Hebrews 4:12"],
  },
  {
    id: 2,
    scripture_id: 200,
    question: "The Father",
    answer:
      "We believe in God the Father, the creator of all things, an infinite, personal spirit, perfect in holiness, wisdom, power and love. We believe that He concerns Himself mercifully in the affairs of His children, He hears and answers prayer, and that He saves from sin and death all who come to Him through Jesus Christ.",
    scriptures: ["Genesis 1:1", "John 3:16-17", "John 4:24"],
  },
  {
    id: 3,
    scripture_id: 300,
    question: "Jesus",
    answer:
      "We believe in Jesus Christ, God's only begotten Son, conceived by the Holy Spirit. We believe in His virgin birth, sinless life, miracles, and teachings. We believe that through His death, burial and resurrection He fulfilled prophecy, atoned for the sins of mankind and established His divine church so that all who trust in Him may receive redemption and salvation.",
    scriptures: [
      "Matthew 1:18", "John 1:1-14", "John 3:16-18", "Philippians 2:5-11",
    ],
  },
  {
    id: 4,
    scripture_id: 400,
    question: "The Holy Spirit",
    answer:
      "We believe in the Holy Spirit who came forth from the Father and the Son to convict the world of sin, righteousness and judgment. It is His work to indwell, sanctify, empower for service and seal until redemption all who believe in Jesus Christ. We believe that the Holy Spirit indwells every believer in Christ and that He is an abiding helper, teacher and guide.",
    scriptures: ["John 4:24", "John 14:16-17", "John 16:7-11"],
  },
];

export default function About() {
  return (
    <main className="bg-white">
      {/* Image section */}
      <div className="xl:mx-auto xl:max-w-full relative">
        <Image
          src="/about_header.jpg"
          alt=""
          width="505"
          height="100"
          className="object-top w-full object-cover h-56 sm:h-64 md:h-72 lg:h-96 brightness-50"
        />
        <h1 className="absolute text-2xl md:text-4xl lg:text-6xl text-white font-bold uppercase tracking-wide top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          About Us
        </h1>
      </div>

      <div className="relative isolate overflow-hidden py-12 sm:py-32 text-gray-400">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className=" text-xl sm:text-3xl font-semibold leading-8 tracking-tight text-indigo-600">
              Light Night History
            </p>
            <p className="mt-6 text-xl leading-8">
              One moment with <span className="text-blue-700">Jesus</span>{" "}
              changes everything. To see His face is what our hearts yearn for
              above all in this world. When we worship Jesus, an atmosphere is
              created where His Spirit can move in the myidst of His people. As
              He moves, we walk away burning brighter, lighting up the night!
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
              <figure className="border-l border-indigo-600 pl-8">
                <blockquote className="text-2xl font-semibold leading-8 tracking-tight">
                  <p>
                    His life is the light that shines through the darkness-and
                    the darkness can never extinguish it.
                  </p>
                </blockquote>
                <figcaption className="mt-4 flex gap-x-4">
                  <div className="text-sm leading-6">
                    <div className="font-semibold ">John 1:5</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="max-w-xl text-base leading-7 lg:col-span-7">
              <p>
                In 2020, we got a Word from God saying &quot;have a worship
                night&quot;. Who knew that such a seemigly simple Word could
                have turned into this. As we have grown and continue to grow,
                God is adding to what Light Night is doing andd its reach. Only
                He could have done this and we give Him all the praise, glory
                and honor for it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Beliefs section */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:pt-32 lg:px-8 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-xl sm:text-3xl font-bold leading-10 tracking-tight text-gray-900">
              What we believe
            </h2>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {faq.answer}
                  </dd>
                  <div className="sm:flex mt-2">
                  {faq.scriptures?.map((scripture) => (
                    <div key={faq.scripture_id} className="text-gray-900 text-base bg-gray-300 px-2 py-1 sm:rounded-lg mr-2 mt-2 sm:mt-0">{scripture}</div>
                  ))}
                  </div>
                  
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* End Beliefs section */}

      <div className="p-4 sm:px-6 lg:px-16">
        {/* Content section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2 lg:gap-4">
          <div className="grid gap-1 sm:gap-2 lg:gap-4">
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/about_tile_6.jpg"
              alt=""
              width="1000"
              height="500"
            />
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/about_tile_1.jpg"
              width="1000"
              height="500"
              alt=""
            />
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/about_tile_3.jpg"
              alt=""
              width="1000"
              height="500"
            />
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/about_tile_16.jpg"
              alt=""
              width="1000"
              height="500"
            />
          </div>
          <div className="grid gap-1 sm:gap-2 lg:gap-4">
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/about_tile_4.jpg"
              alt=""
              width="1000"
              height="500"
            />
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/about_tile_5.jpg"
              alt=""
              width="1000"
              height="500"
            />
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/about_tile_2.jpg"
              alt=""
              width="1000"
              height="500"
            />
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/about_tile_11.jpg"
              alt=""
              width="1000"
              height="500"
            />
          </div>
          <div className="grid gap-1 sm:gap-2 lg:gap-4">
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/about_tile_7.jpg"
              alt=""
              width="1000"
              height="500"
            />
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/about_tile_15.jpg"
              alt=""
              width="1000"
              height="700"
            />
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/about_tile_8.jpg"
              alt=""
              width="1000"
              height="500"
            />
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/about_tile_9.jpg"
              alt=""
              width="500"
              height="500"
            />
          </div>
          <div className="grid gap-1 sm:gap-2 lg:gap-4">
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/about_tile_10.jpg"
              alt=""
              width="1000"
              height="700"
            />
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/about_tile_14.jpg"
              alt=""
              width="1000"
              height="700"
            />
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/about_tile_13.jpg"
              alt=""
              width="1000"
              height="700"
            />
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/about_tile_12.jpeg"
              alt=""
              width="1000"
              height="500"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
