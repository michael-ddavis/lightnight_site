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
    heroRing: {
      phrase: "• LOVE JESUS WELL • ALABASTER MINISTRIES  ",
      textColor: "#ffffff",
      dotColor: "#f4cf88",
      speedSeconds: 18,
      logoSrc: "/images/logos/spinning-alabaster.svg", // inner mark, no text
    },

    hero: {
      superTitle: "Love Jesus Well",
      titleMain: "Raising a priesthood",
      titleSub: "formed through worship, prayer, and His Word.",
      body: "Alabaster is a worship and prayer family learning to love Jesus deeply and love Him well — in His presence, in His Word, and together as a people.",
      primaryCta: {
        label: "Learn about Alabaster",
        href: "/about",
      },
      secondaryCta: {
        label: "Light Night Worship",
        href: "/light-night",
      },
      heroImage: {
        src: "/images/home/story-1.jpg", // or /images/home/hero-1.jpg etc
        alt: "Worship night at Alabaster",
      },
    },

    lightNightSection: {
      eyebrow: "Light Night Worship",
      title: "A rhythm of worship & presence.",
      body: "Monthly worship nights hosted by Alabaster Ministries — space to pour out our oil, welcome anyone hungry for Jesus, and make room for His presence.",
      ctaLabel: "See all Light Night dates",
      ctaHref: "/light-night",
    },

    aboutTeaser: {
      eyebrow: "This is Alabaster Ministries",
      title: "A worship & prayer family learning to Love Jesus Well.",
      body: "We’re raising up a priesthood formed through worship, prayer, and His Word — a family for the misfit, the hungry, and those longing to belong.",
      ctaLabel: "Read the full story",
      ctaHref: "/about",
    },

    stories: [
      {
        id: "story-1",
        image: "/images/home/story-1.jpg",
        quote:
          "I came in heavy and left breathing again — like Jesus actually lifted something off of me.",
        source: "Stories from the room",
      },
      {
        id: "story-2",
        image: "/images/home/story-2.jpg",
        quote:
          "Somewhere in the worship, I realized I wasn’t just in a room — I was really with Him.",
        source: "Stories from the room",
      },
      {
        id: "story-3",
        image: "/images/home/story-3.jpg",
        quote:
          "I didn’t feel like I had to perform here. I could just be with Jesus and be honest.",
        source: "Stories from the room",
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
        title: "The Scriptures",
        paragraphs: [
          "We believe the Scriptures — Old and New Testaments — are the inspired, infallible, and authoritative Word of God.",
          "They reveal who God is, how He saves, and how we are called to live — truth without any mixture of error and fully reliable.",
        ],
        scriptures: [
          "2 Timothy 3:16–17",
          "Psalm 19:7–11",
          "John 17:17"
        ]
      },
      {
        id: "trinity",
        title: "The Trinity",
        paragraphs: [
          "We believe in one God, eternal and sovereign, existing forever as Father, Son, and Holy Spirit — three Persons, one essence — worthy of all worship.",
        ],
        scriptures: [
          "Deuteronomy 6:4",
          "Matthew 28:19"
        ]
      },
      {
        id: "jesus",
        title: "Jesus Christ",
        paragraphs: [
          "Jesus is fully God and fully man — the eternal Son who became flesh, lived sinlessly, died sacrificially, rose bodily, ascended gloriously, and will return triumphantly.",
          "He is the only Savior and the only Way to God — the center of all Scripture and the hope of the world.",
        ],
        scriptures: [
          "John 1:1–14",
          "Acts 4:12",
          "1 Corinthians 15:3–4"
        ]
      },
      {
        id: "holy-spirit",
        title: "The Holy Spirit",
        paragraphs: [
          "We believe the Holy Spirit regenerates, indwells, sanctifies, and empowers believers to live holy, joyful, fruitful lives.",
          "He distributes spiritual gifts for the building up of the church — to be exercised in order, humility, and love.",
        ],
        scriptures: [
          "Acts 1:8",
          "1 Corinthians 12:4–11",
          "Galatians 5:22–25"
        ]
      },
      {
        id: "humanity",
        title: "Humanity & Sin",
        paragraphs: [
          "We believe all people are created in the image of God with dignity and purpose, yet are separated from Him by sin and unable to save themselves.",
        ],
        scriptures: [
          "Genesis 1:26–27",
          "Romans 3:23",
          "Ephesians 2:1–3"
        ]
      },
      {
        id: "salvation",
        title: "Salvation",
        paragraphs: [
          "Salvation is by grace alone, through faith alone, in Christ alone — not by works.",
          "Through Christ we receive forgiveness, righteousness, adoption, and eternal life.",
        ],
        scriptures: [
          "Ephesians 2:8–9",
          "Titus 3:4–7",
          "John 3:16"
        ]
      },
      {
        id: "church",
        title: "The Church & Priesthood",
        paragraphs: [
          "Jesus is forming a family — one church, many members — united in the Spirit and grounded in the Word.",
          "We are a royal priesthood called to minister to Jesus first, love one another deeply, and be sent into the world.",
        ],
        scriptures: [
          "1 Peter 2:9",
          "Ephesians 2:19–22",
          "Matthew 28:19–20"
        ]
      },
      {
        id: "worship-prayer",
        title: "Worship & Prayer",
        paragraphs: [
          "We believe worship and prayer are the heart of our ministry — ministering to Jesus is our first calling.",
          "We gather to bless His name, seek His presence, and align our lives to His Word.",
        ],
        scriptures: [
          "Psalm 27:4",
          "Luke 10:42",
          "Revelation 5:8"
        ]
      },
      {
        id: "communion",
        title: "The Lord’s Supper (Communion)",
        paragraphs: [
          "Communion is a sacred and holy mystery — a gift Jesus gave His Church to remember His sacrifice, proclaim His death, and participate in His body and blood.",
          "We receive it with repentance, faith, unity, and holy reverence — discerning the Lord’s Body so that He is honored as holy.",
        ],
        scriptures: [
          "1 Corinthians 10:16–17",
          "1 Corinthians 11:23–29",
          "Luke 22:19–20"
        ]
      },
      {
        id: "kingdom",
        title: "The Kingdom & Return of Christ",
        paragraphs: [
          "Jesus is King — and His Kingdom is advancing through His disciples.",
          "He will return personally and visibly to renew all things — we live awake, holy, and full of hope.",
        ],
        scriptures: [
          "Titus 2:13",
          "Revelation 21:1–5",
          "Matthew 24:42–44"
        ]
      }
    ]
  },

  /* =========================================================
   *  TOP BANNER (NEXT WORSHIP NIGHT)
   * ======================================================= */
  banner: {
    enabled: true,
    event: {
      id: "rigsby-dec-12",
      title: "Jesus Over Everything – Worship Night",
      dateISO: "2025-12-12T19:00:00Z",
      date: "2025-12-13",
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
      title: "Light Night Worship",
      subtitle:
        "Monthly worship nights where we gather as a family and with friends to seek Jesus, pour out our oil, and Love Him well.",
    },
    encounters: [
      // --- PAST NIGHTS (4 dummy) ---

      {
        id: "rigsby-aug-15",
        title: "Only Jesus",
        church: "Divine World Changers",
        dateLabel: "Fri, Aug 15 • 7–9 PM",
        location: "6421 Rigsby Rd",
        city: "Richmond, VA",
        mapsUrl: "https://maps.app.goo.gl/R74C5oprTP3wW3MD6",
        homeImage: "/images/light-night/aug-worship-night.jpg",
        startDate: "2025-08-15T19:00:00-04:00",
        description:
          "A night of turning our affection back to the One thing — Jesus at the center of everything.",
      },
      {
        id: "rigsby-sep-19",
        title: "More of Your Heart",
        church: "Divine World Changers",
        dateLabel: "Fri, Sep 19 • 7–9 PM",
        location: "6421 Rigsby Rd",
        city: "Richmond, VA",
        mapsUrl: "https://maps.app.goo.gl/R74C5oprTP3wW3MD6",
        homeImage: "/images/light-night/sep-worship-night.jpg",
        startDate: "2025-09-19T19:00:00-04:00",
        description:
          "An evening of worship and prayer asking Jesus to share His heart with us in a deeper way.",
      },
      {
        id: "rigsby-oct-17",
        title: "Altars of Worship",
        church: "Divine World Changers",
        dateLabel: "Fri, Oct 17 • 7–9 PM",
        location: "6421 Rigsby Rd",
        city: "Richmond, VA",
        mapsUrl: "https://maps.app.goo.gl/R74C5oprTP3wW3MD6",
        homeImage: "/images/light-night/oct-worship-night.jpg",
        startDate: "2025-10-17T19:00:00-04:00",
        description:
          "Building an altar of praise and surrender to Jesus together as a family.",
      },
      {
        id: "rigsby-nov-14",
        title: "Near to the Brokenhearted",
        church: "Divine World Changers",
        dateLabel: "Fri, Nov 14 • 7–9 PM",
        location: "6421 Rigsby Rd",
        city: "Richmond, VA",
        mapsUrl: "https://maps.app.goo.gl/R74C5oprTP3wW3MD6",
        homeImage: "/images/light-night/nov-worship-night.jpg",
        startDate: "2025-11-14T19:00:00-05:00",
        description:
          "A gentle night for the hurting and weary, making space for Jesus to comfort and restore.",
      },

      // --- UPCOMING (your existing Dec 12 night) ---

      {
        id: "rigsby-dec-12",
        title: "Jesus Over Everything",
        church: "Divine World Changers",
        dateLabel: "Fri, Dec 12 • 7–9 PM",
        location: "6421 Rigsby Rd",
        city: "Richmond, VA",
        mapsUrl: "https://maps.app.goo.gl/R74C5oprTP3wW3MD6",
        flyerImage: "/images/light-night/dec-worship-night.png",
        startDate: "2025-12-12T19:00:00-05:00", // ISO for countdown / ordering
        description:
          "A night set apart to worship Jesus together as a family, pour out our oil, and make room for His presence.",
        setlist: [
          {
            title: "My Reward",
            artist: "UPPERROOM",
            album: "Moments: Color 003",
            albumArt: "/images/setlist/my-reward.jpg",
          },
          {
            title: "The Wonderful Blood",
            artist: "Tiffany Hudson",
            album: "Hidden Here",
            albumArt: "/images/setlist/wonderful-blood.jpg",
          },
        ],
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
      logoSrc: "/images/logos/square.svg",

      // fallback general giving URL (optional)
      customGiving: "https://donate.stripe.com/00g00k9eW4E5be03cc",

      // one-time preset amount links
      oneTimeLinks: [
        { amount: "25", href: "https://donate.stripe.com/00waEX9z3bBR8qDdBR2ZO01" },
        { amount: "50", href: "https://donate.stripe.com/fZueVd7qVcFVeP1gO32ZO02", },
        { amount: "100", href: "https://donate.stripe.com/28EeVd3aFfS7eP169p2ZO03", },
        { amount: "250", href: "https://donate.stripe.com/5kQcN5cLfdJZ36jeFV2ZO04" },
      ],

      // monthly plans (already used by your page)
      monthlyPlans: [
        { id: "m25", label: "$25 / month", href: "https://donate.stripe.com/bJe28r26B6hx5er1T92ZO05" },
        { id: "m50", label: "$50 / month", href: "https://donate.stripe.com/cNi5kDbHb6hxgX98hx2ZO06" },
        { id: "m100", label: "$100 / month", href: "https://donate.stripe.com/dRmeVdh1vaxN36j55l2ZO07" },
        { id: "m250", label: "$250 / month", href: "https://donate.stripe.com/bJe8wP8uZcFVcGT8hx2ZO08" },

      ],
    },

    venmo: {
      username: "alabasterministriesofficial",
      defaultNote: "Alabaster Giving",
      logoSrc: "/images/logos/venmo.svg",
      qrImageSrc: "/images/giving/alabaster-venmo.jpg",
    },

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
        body: "Three intentional discipleship experiences that most people walk through in their first 12 months:",
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
        "In-person cohorts",
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
      country: "USA",
    },

    contact: {
      emailLabel: "Email",
      email: "hello@alabasterchurch.org",
      phoneLabel: "Phone",
      phone: "",
      // optional: small line under email/phone
      note: "For gatherings, serving, and formation tracks, reach out any time.",
    },

    social: {
      instagram: {
        handle: "@alabasterministriesofficial",
        url: "https://instagram.com/alabasterministriesofficial",
      },
      // Add others later if you want (YouTube, Facebook, etc.)
      youtube: null,
      facebook: null,
    },

    nav: {
      // main footer nav – keep it simple and aligned with top nav
      primary: [
        { label: "About", href: "/about" },
        { label: "What We Believe", href: "/beliefs" },
        { label: "Formation / Tracks", href: "/formation" },
        { label: "Merch", href: "/merch" },
        { label: "Light Night", href: "/light-night" },
        { label: "Prayer Room", href: "/prayer-room" }, // you can create this later
      ],
      // smaller, utility-style links
      secondary: [
        { label: "Give", href: "/giving" },
        { label: "Contact", href: "/contact" },
        // { label: "Privacy Policy", href: "/privacy" },
        // { label: "Terms", href: "/terms" }
      ],
    },

    scripture: {
      text: "We’re not building programs. We’re raising a priesthood. A family that lives for His presence and carries His heart to the world.",
      reference: "Alabaster Way of Life",
    },

    copyright: {
      prefix: "©",
      owner: "Alabaster",
      // optional: or new Date().getFullYear() in the component
      yearFallback: 2025,
    },
  },
} as const;

export default content;
