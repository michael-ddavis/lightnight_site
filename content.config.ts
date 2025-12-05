// content.config.ts
// Master content config for Alabaster / Light Night
// All copy + links live here so pages can be content-driven.

const content = {
  /* =========================================================
   *  SITE META
   * ======================================================= */
  site: {
    name: "Alabaster",
    fullName: "Alabaster Ministries",
    tagline: "Love Jesus Well",
    description:
      "Discipling a people to Love Jesus Well through worship, prayer, and His Word.",
    brand: {
      primaryGold: "#e0c9c1",
      accentGold: "#f4cf88",
      ink: "#050814",
    },
  },

  /* =========================================================
   *  HOME PAGE
   * ======================================================= */
  home: {
    heroSubtitle:
      "This is a family learning to love Jesus well — through worship nights, encounters, and a house-of-prayer heart.",

    gallery: {
      hero: [
        // Used as background + primary hero image
        "/Home_worship_night.png",
        "/home_tile_3.jpg",
        "/home_tile_2.jpg",
      ],
      strip: [
        "/about_tile_6.JPG",
        "/about_tile_4.jpg",
        "/about_tile_7.JPG",
      ],
    },

    lightNightSection: {
      body:
        "Light Night is a simple, presence-first worship night where we slow down, minister to the Lord, and make room for Him to heal, restore, and speak.",
      primaryCtaLabel: "See upcoming nights",
      primaryCtaHref: "/light-night",
      secondaryCtaHref: "/light-night", // used as a circled button “Learn about Light Night”
    },

    givingSection: {
      ctaLabel: "Give online",
      ctaHref: "/giving",
    },
    stories: [
      {
        id: "story-1",
        image: "/about_tile_10.jpg",
        person: "Jordan",
        role: "Worshipper",
        quote:
          "I came in exhausted and left feeling like Jesus had actually lifted the weight off my chest.",
      },
      {
        id: "story-2",
        image: "/about_tile_15.jpg",
        person: "Samantha",
        role: "Volunteer",
        quote:
          "In the room, I finally believed God wasn’t disappointed in me. It’s changed how I pray.",
      },
      {
        id: "story-3",
        image: "/about_tile_13.JPG",
        person: "Marcus",
        role: "Friend of a friend",
        quote:
          "I didn’t plan to meet Jesus here, but He met me in the middle of a song.",
      },
    ],
  },

  /* =========================================================
   *  ABOUT / OUR STORY
   * ======================================================= */
   about: {
    coreLanguage: {
      whyAlabaster:
        "Alabaster is a family built around one central pursuit: loving Jesus deeply and loving Him well. We exist to raise up a priesthood of believers who minister first to the Lord and then to the world.",
      phrases: [
        "Loving Jesus deeply. Loving Him well.",
        "Raising priests who love Jesus well.",
        "A family living for His presence.",
      ],
    },
    coreValues: [
      { id: "presence", title: "Presence over everything" },
      { id: "word", title: "Founded on the Word" },
      { id: "priesthood", title: "Priestly identity" },
      // ...rest of your values
    ],
  },

  /* =========================================================
   *  BELIEFS / CORE VALUES
   * ======================================================= */
  beliefs: {
    intro:
      "We are a presence-centered, Word-rooted family learning to Love Jesus Well. Our beliefs are anchored in historic, orthodox Christianity and lived out in a culture of prayer, worship, formation, and mission.",

    coreValues: [
      {
        id: "presence",
        title: "Presence Over Everything",
        scripture: "Psalm 27:4 • Luke 10:42",
        body: "We minister to Jesus first. Worship and prayer are our first calling and greatest joy. Everything we do flows from His presence and returns to His presence.",
      },
      {
        id: "word",
        title: "Founded on the Word",
        scripture: "2 Timothy 2:15 • John 14:21",
        body: "We anchor every part of life to Scripture — learning to love Jesus through obedience and truth. We pursue depth, sound doctrine, and a whole-Bible vision of God.",
      },
      {
        id: "priesthood",
        title: "Priestly Identity",
        scripture: "1 Peter 2:9 • Revelation 1:6",
        body: "We are a royal priesthood who belong to Jesus — living before Him, ministering to His heart, and carrying His presence into everyday life.",
      },
      {
        id: "family",
        title: "Family That Loves Well",
        scripture: "Romans 12:9–10 • Ephesians 2:19",
        body: "We build a home of belonging, honor, and healing — where every person is known, loved, and invited into transformation in Christ.",
      },
      {
        id: "sent",
        title: "Sent Ones",
        scripture: "Matthew 28:19 • Acts 13:2–3",
        body: "We carry Jesus’ heart into the world — locally and to the nations — proclaiming the gospel, making disciples, and raising up worshippers in every place He sends us.",
      },
      {
        id: "worship-lifestyle",
        title: "Worship Is Our Lifestyle",
        scripture: "Romans 12:1 • Colossians 3:23",
        body: "We love Jesus in purity, work, relationships, generosity — everything becomes worship as we offer our whole lives to Him.",
      },
      {
        id: "spirit-led",
        title: "Holy Spirit Led",
        scripture: "Galatians 5:25 • Acts 1:8",
        body: "We depend on the Holy Spirit to empower our living, loving, and ministry. We follow His leading above our preferences, plans, or performance.",
      },
    ],

    doctrinalStatements: [
      {
        id: "bible",
        title: "The Bible",
        body: "The Bible is God’s Word to all people. It was written by human authors under the supernatural guidance of the Holy Spirit. Because it was inspired by God, the Bible is truth without any mixture of error and is completely relevant to our daily lives.",
        scriptures: ["Genesis 1:1", "Hebrews 4:12"],
      },
      {
        id: "father",
        title: "God the Father",
        body: "We believe in God the Father, the creator of all things, an infinite, personal spirit, perfect in holiness, wisdom, power and love. He concerns Himself mercifully in the affairs of His children, hears and answers prayer, and saves from sin and death all who come to Him through Jesus Christ.",
        scriptures: ["Genesis 1:1", "John 3:16–17", "John 4:24"],
      },
      {
        id: "son",
        title: "Jesus Christ",
        body: "We believe in Jesus Christ, God's only begotten Son, conceived by the Holy Spirit, born of a virgin, fully God and fully man. Through His sinless life, miracles, teaching, death, burial, and resurrection, He fulfilled prophecy, atoned for the sins of mankind, and established His Church so that all who trust in Him may receive redemption and salvation.",
        scriptures: ["John 1:1–14", "John 3:16–18", "Philippians 2:5–11"],
      },
      {
        id: "spirit",
        title: "The Holy Spirit",
        body: "We believe in the Holy Spirit who proceeds from the Father and the Son to convict the world of sin, righteousness, and judgment. He indwells, sanctifies, empowers for service, and seals until the day of redemption all who believe in Jesus Christ.",
        scriptures: ["John 14:16–17", "John 16:7–11", "Colossians 1:27"],
      },
    ],
  },

  /* =========================================================
   *  TOP BANNER (NEXT WORSHIP NIGHT)
   * ======================================================= */
  banner: {
    enabled: true,
    event: {
      id: "rigsby-dec-12",
      title: "Jesus Over Everything – Worship Night",
      date: "2025-12-12",
      time: "7:00 PM",
      location: "6421 Rigsby Rd, Richmond, VA",
      buttonLabel: "See details",
      linkHref: "/light-night#rigsby-dec-12",
    },
  },


  /* =========================================================
   *  LIGHT NIGHT 
   * ======================================================= */
  lightNight: {
    // Used across /light-night and the home Light Night section
     hero: {
      title: "Light Night Worship Nights",
      subtitle:
        "Monthly worship nights where we gather as a family and with friends to seek Jesus, pour out our oil, and Love Him well.",
    },
    encounters: [
      {
        id: "rigsby-dec-12",
        title: "Jesus Over Everything",
        church: "Divine World Changers",
        dateLabel: "Fri, Dec 12 • 7–9 PM",
        location: "6421 Rigsby Rd, Richmond, VA",
        location_url: "https://maps.app.goo.gl/R74C5oprTP3wW3MD6",
        // ISO string used to compute “next upcoming” on the home page
        startDate: "2025-12-12T19:00:00-05:00",
        // Used for the featured hero-style card in the Light Night block on home
        homeImage: "/images/light-night/dec-worship-night.png",
        city: "Richmond, VA",
        address: "6421 Rigsby Rd, Richmond, VA",
        mapsUrl: "https://maps.app.goo.gl/R74C5oprTP3wW3MD6",
        flyerImage: "/images/light-night/dec-worship-night.png", // 1920x1080
        description:
          "A night set apart to worship Jesus together as a family, pour out our oil, and make room for His presence.",
      },
    ],
  },

  /* =========================================================
   *  GIVING
   * ======================================================= */
  giving: {
    hero: {
      title: "Give",
      body: "Thank you for practicing generosity with us. Your giving supports worship, formation, hospitality, and serving our city.",
    },

    square: {
      checkoutUrl:
        "https://checkout.square.site/merchant/your-merchant/checkout/your-checkout-id",
      logoSrc: "/images/logos/square.svg",
    },

    venmo: {
      username: "YourVenmoUser",
      defaultNote: "Alabaster Giving",
      logoSrc: "/images/logos/venmo.svg",
      qrImageSrc: "/images/qr/venmo.png",
    },

    recurringPlans: [
      {
        id: "m25",
        label: "$25 / month",
        href: "https://square.link/u/plan-25",
      },
      {
        id: "m50",
        label: "$50 / month",
        href: "https://square.link/u/plan-50",
      },
      {
        id: "m100",
        label: "$100 / month",
        href: "https://square.link/u/plan-100",
      },
      {
        id: "custom",
        label: "Custom / month",
        href: "https://square.link/u/plan-custom",
      },
    ],

    trustCards: [
      {
        id: "tax",
        title: "Tax-Deductible",
        body: "Gifts are tax-deductible to the extent allowed by law. Annual statements are emailed in January.",
      },
      {
        id: "receipts",
        title: "Receipts & Records",
        body: "You’ll receive a receipt for each gift. Contact us if you need help updating your information.",
      },
      {
        id: "security",
        title: "Security",
        body: "Payments are processed by Square/Venmo on their secure platforms; no card data is stored on our site.",
      },
    ],
  },

    /* =========================================================
   *  MERCH
   * ======================================================= */
  merch: {
    heroTitle: "Wear the Love Jesus Well story.",
    heroSubtitle:
      "Simple, clean pieces that carry the same heart as our worship nights — all about Jesus, not us.",
    introText:
      "Every hoodie, tee, and hat is an invitation to carry His presence into ordinary spaces — quiet reminders to Love Jesus Well wherever you go.",
    heroBadge: "Alabaster Merch",
  },

  /* =========================================================
   *  FORMATION & TRACKS
   * ======================================================= */
  formation: {
    hero: {
      title: "A pathway to Love Jesus Well.",
      subtitle:
        "At Alabaster, discipleship is not merely learning information. It is a journey of becoming a people who know Jesus, minister to Him, and are formed into His likeness — healed, rooted, devoted, and sent.",
      journeyLine:
        "We call this journey the Formation Pathway — a simple, intentional way to walk from BELONG → BECOME → BEHOLD → BE SENT.",
    },

    stages: [
      {
        id: "belong",
        label: "BELONG",
        description:
          "Finding home in a family centered on Jesus — worship nights, small rhythms, being known and loved.",
      },
      {
        id: "become",
        label: "BECOME",
        description:
          "Intentional formation in His presence and through core tracks that heal, root, and strengthen your walk.",
      },
      {
        id: "behold",
        label: "BEHOLD",
        description:
          "Learning to live before His face — prayer, worship, and a priestly way of life that treasures His presence.",
      },
      {
        id: "be-sent",
        label: "BE SENT",
        description:
          "Carrying His heart into your family, workplace, city, and the nations as a priest and witness.",
      },
    ],

    rails: {
      title: "Presence + Formation → Priests unto Jesus.",
      description:
        "We walk on two rails at the same time: Practicing His Presence and Formation Tracks. One rail without the other leads to imbalance; together they form priests who Love Jesus Well.",

      presence: {
        title: "1️⃣ Practicing His Presence",
        body: "Weekly spaces where we minister to the Lord:",
        points: [
          "Light Night worship gatherings",
          "Alabaster Prayer Room sets",
          "Moments of communion, intercession, and stillness",
        ],
        footer:
          "His presence transforms us. This is where love grows deep, where hearts are softened, and where our priestly identity is lived out.",
      },

      formation: {
        title: "2️⃣ Formation Tracks",
        body: "Three intentional discipleship experiences that most people walk through in their first 12–18 months:",
        points: [
          "Whole Heart – healing & wholeness",
          "His Heart – seeing Jesus clearly",
          "Firm Foundation – following Jesus daily",
        ],
        footer:
          "Presence (encounter) + Formation (growth) → Priests unto Jesus.",
      },
    },

    tracks: [
      {
        id: "whole-heart",
        order: 1,
        label: "Track 1",
        name: "WHOLE HEART",
        course: "Emotionally Healthy Spirituality",
        focus: "Healing & Wholeness",
        description:
          "Jesus restores what’s broken and forms emotional and spiritual maturity. We learn to live from a healed and healthy heart — in relationships, work, and following Jesus.",
        references: "Psalm 147:3 • 3 John 2",
      },
      {
        id: "his-heart",
        order: 2,
        label: "Track 2",
        name: "HIS HEART",
        course: "Gentle and Lowly",
        focus: "Seeing Jesus Clearly",
        description:
          "We behold Jesus as He truly is — gentle, lowly, compassionate, and deeply near. When we see Him rightly, trust and worship come alive and love becomes our natural response.",
        references: "Matthew 11:28–30 • John 14:9",
      },
      {
        id: "firm-foundation",
        order: 3,
        label: "Track 3",
        name: "FIRM FOUNDATION",
        course: "Foundations of Faith",
        focus: "Following Jesus Daily",
        description:
          "We learn identity in Christ, core doctrine, spiritual practices, and what it looks like to follow Jesus in everyday life — building on rock, not sand.",
        references: "Matthew 7:24–25 • Colossians 2:6–7",
      },
    ],

    format: {
      title: "Built to fit real lives.",
      body: "Each track is offered in a simple, flexible format so that people in all seasons can engage:",
      points: [
        "In-person weekly cohorts",
        "Online course format with weekly meetups",
        "Space for processing, questions, and prayer",
      ],
      footer:
        "You don't have to be in the “perfect” season to grow. The Pathway is designed for real people, real schedules, and real transformation.",
    },

    outcomes: {
      title: "A people who Love Jesus Well.",
      intro: "Through Presence + Formation, we see disciples become:",
      points: [
        "Healed — Whole Heart",
        "Devoted — His Heart",
        "Rooted — Firm Foundation",
        "Priests — who minister before the Lord",
        "Sent — raising worshippers in the nations",
      ],
      footer:
        "This is how Alabaster disciples people to Love Jesus deeply and Love Him well — in purity, prayer, obedience, and affection.",
      tagline:
        "We’re not building programs. We’re raising a priesthood. A family that lives for His presence and carries His heart to the world.",
    },
  },

  
  /* =========================================================
  *  CONTACT 
  * ======================================================= */
  contact: {
    // Primary inbox for general inquiries
    primaryEmail: "hello@alabasterchurch.org",

    // Dedicated inbox for prayer & care
    prayerEmail: "prayer@alabasterchurch.org",

    // City / region label for contact + footer
    cityLabel: "Richmond, VA",

    // Socials
    instagramHandle: "@alabasterministriesofficial",
    instagramUrl: "https://instagram.com/alabasterministriesofficial",

    // Optional: short blurb you can reuse later if you want
    blurb:
      "Whether you're curious about Alabaster, wanting to join the family, or simply need someone to pray with you — we’d love to hear from you.",
  },

  /* =========================================================
  *  FOOTER
  *  Used by the global <Footer /> component
  * ======================================================= */
  footer: {
    tagline: "Loving Jesus deeply. Loving Him well.",
    blurb:
      "Alabaster is a family learning to Love Jesus Well through worship, prayer, and His Word — raising a priesthood who live for His presence and carry His heart to the world.",

    churchName: "Alabaster",
    // If you want this to say Alabaster Church instead later, just change this string.

    address: {
      line1: "Richmond, VA",
      line2: null, // or "Meeting at 6421 Rigsby Rd" / "Locations coming soon"
      city: "Richmond",
      state: "VA",
      postalCode: "",
      country: "USA"
    },

    contact: {
      emailLabel: "Email",
      email: "info@alabasterchurch.org",
      phoneLabel: "Phone",
      phone: "",
      // optional: small line under email/phone
      note: "For gatherings, serving, and formation tracks, reach out any time."
    },

    social: {
      instagram: {
        handle: "@alabasterministriesofficial",
        url: "https://instagram.com/alabasterministriesofficial"
      },
      // Add others later if you want (YouTube, Facebook, etc.)
      youtube: null,
      facebook: null
    },

    nav: {
      // main footer nav – keep it simple and aligned with top nav
      primary: [
        { label: "About", href: "/about" },
        { label: "What We Believe", href: "/beliefs" },
        { label: "Formation / Tracks", href: "/formation" },
        { label: "Merch", href: "/merch" },
        { label: "Light Night", href: "/light-night" },
        { label: "Prayer Room", href: "/prayer-room" } // you can create this later
      ],
      // smaller, utility-style links
      secondary: [
        { label: "Give", href: "/giving" },
        { label: "Contact", href: "/contact" },
        // { label: "Privacy Policy", href: "/privacy" },
        // { label: "Terms", href: "/terms" }
      ]
    },

    scripture: {
      text: "We’re not building programs. We’re raising a priesthood. A family that lives for His presence and carries His heart to the world.",
      reference: "Alabaster Way of Life"
    },

    copyright: {
      prefix: "©",
      owner: "Alabaster",
      // optional: or new Date().getFullYear() in the component
      yearFallback: 2025
    }
  }

} as const;

export default content;
