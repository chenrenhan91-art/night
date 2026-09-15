import { withBase } from "@/lib/paths";

export const COMPANY = {
  legalName: "MANA TRADE CO., LIMITED",
  shortName: "mana",
  displayName: "MANA",
  addressLines: [
    "RM R2 UNIT A ON 16/F，OF BLOCK 1 GOLDEN",
    "DRAGON INDUSTRIAL CENTRE，NOS.152-160",
    "TAI LIN PAI ROAD，KWAI CHUNG，",
    "HONG KONG",
  ],
  phone: "+852 96915312",
  phoneHref: "tel:+85296915312",
  year: 2026,
};

export const NAV = [
  {
    label: "Lighting",
    href: "/collections/the-original-nightside",
    children: [{ label: "The MANA Lamp", href: "/products/nightside-lamp-white" }],
  },
  {
    label: "Bedside Accessories",
    href: "/collections/bedside-accessories",
    children: [
      { label: "Journals & Notebooks", href: "/collections/journals" },
      { label: "Wellness Tools", href: "/collections/wellness-tools" },
      { label: "Objects & Accents", href: "/collections/objects-accents" },
      {
        label: "Textiles",
        href: "/products/blacksaw-midnight-sun-reversible-baby-alpaca-wool-throw-blanket",
      },
    ],
  },
  {
    label: "Collections",
    href: "/collections",
    children: [
      { label: "Lighting Collection", href: "/collections/the-original-nightside" },
      { label: "Night Shades Collection", href: "/collections/night-shades-collection" },
      { label: "Partner Products", href: "/pages/partner-products" },
    ],
  },
];

export const FOOTER_MAIN = [
  { label: "Shop", href: "/collections/discover-the-full-collection" },
  { label: "Support", href: "/pages/support" },
  { label: "News", href: "/news" },
  { label: "About", href: "/pages/about" },
  { label: "Contact", href: "/pages/contact" },
];

export const FOOTER_HELP = [
  { label: "Shipping", href: "/pages/shipping" },
  { label: "Returns", href: "/pages/returns" },
  { label: "Wholesale", href: "/pages/wholesale" },
  { label: "Warranty", href: "/pages/warranty" },
  { label: "Privacy", href: "/pages/privacy" },
  { label: "Terms of Service", href: "/pages/terms" },
];

export const COLLECTIONS = [
  {
    handle: "the-original-nightside",
    title: "Lighting",
    subtitle: "NS01 Task Lamp",
    description:
      "Lighting is the first layer of your bedtime ritual, where comfort meets clarity, and atmosphere shapes every moment. Begin here, and let the night fall softly.",
    image: withBase("/media/site/col-lighting-alt.jpg"),
    products: ["nightside-lamp-white"],
  },
  {
    handle: "frontpage",
    title: "NS01 Task Lamp",
    subtitle: "NS01 Task Lamp",
    description:
      "Lighting is the first layer of your bedtime ritual, where comfort meets clarity, and atmosphere shapes every moment.",
    image: withBase("/media/site/col-lamp.jpg"),
    products: ["nightside-lamp-white"],
  },
  {
    handle: "bedside-accessories",
    title: "Bedside Accessories",
    subtitle: "7 products",
    description:
      "The quiet companions of your bedside, objects that bring order, comfort, and beauty to the last moments of your day.",
    image: withBase("/media/site/col-accessories.jpg"),
    products: [
      "nanu-arc-alarm-clock",
      "craighill-brass-jack-puzzle",
      "five-minute-journal",
      "orijin-floring",
      "blacksaw-midnight-sun-reversible-baby-alpaca-wool-throw-blanket",
      "mindful-focus-hour-glass-by-intelligent-change",
      "the-best-year-journal-by-intelligent-change",
    ],
  },
  {
    handle: "journals",
    title: "Journals & Notebooks",
    subtitle: "Journals",
    description: "Guided pages for the last quiet minutes of the day.",
    image: withBase("/media/site/col-journals.jpg"),
    products: ["five-minute-journal", "the-best-year-journal-by-intelligent-change"],
  },
  {
    handle: "wellness-tools",
    title: "Wellness Tools",
    subtitle: "Wellness",
    description: "Small tools for unwinding the body before sleep.",
    image: withBase("/media/site/col-wellness.jpg"),
    products: ["orijin-floring"],
  },
  {
    handle: "objects-accents",
    title: "Objects & Accents",
    subtitle: "Objects",
    description: "Sculptural pieces that earn their place on the nightstand.",
    image: withBase("/media/site/col-objects.jpg"),
    products: [
      "nanu-arc-alarm-clock",
      "orijin-floring",
      "mindful-focus-hour-glass-by-intelligent-change",
      "valet-tray-small-by-ugmonk",
      "craighill-brass-jack-puzzle",
    ],
  },
  {
    handle: "night-shades-collection",
    title: "Night Shades Collection",
    subtitle: "6 products",
    description:
      "From whimsical patterns to calming blackout fabrics, our interchangeable Night Shades let you refresh your lamp's style and function in moments. Night Shades are more than covers. They are a way to shape your light, set your mood, and make your lamp truly your own.",
    image: withBase("/media/site/col-shades.jpg"),
    products: [
      "electric-flowfield-cotton-shade",
      "starlight-cotton-blackout-shade",
      "8-bit-black-hearts-cotton-shade",
      "cursive-lines-cotton-shade",
      "alphabet-cascade-cotton-shade",
      "concentric-circles-cotton-shade",
    ],
  },
  {
    handle: "discover-the-full-collection",
    title: "Discover the Full Collection",
    subtitle: "Shop all",
    description: "The lamp, the shades, and the objects that complete the bedside.",
    image: withBase("/media/site/col-lamp.jpg"),
    products: [
      "nightside-lamp-white",
      "five-minute-journal",
      "nanu-arc-alarm-clock",
      "orijin-floring",
      "electric-flowfield-cotton-shade",
      "mindful-focus-hour-glass-by-intelligent-change",
      "starlight-cotton-blackout-shade",
      "valet-tray-small-by-ugmonk",
      "8-bit-black-hearts-cotton-shade",
      "craighill-brass-jack-puzzle",
      "the-best-year-journal-by-intelligent-change",
      "blacksaw-midnight-sun-reversible-baby-alpaca-wool-throw-blanket",
      "cursive-lines-cotton-shade",
      "ugmonk-valey-tray-bundle",
      "concentric-circles-cotton-shade",
      "alphabet-cascade-cotton-shade",
    ],
  },
  {
    handle: "partner-products",
    title: "Partner Products",
    subtitle: "Collaborations",
    description:
      "Products from like-minded makers whose work pairs seamlessly with ours, chosen for their craft, thoughtfulness, and enduring appeal.",
    image: withBase("/media/site/split-lifestyle.jpg"),
    products: [
      "five-minute-journal",
      "nanu-arc-alarm-clock",
      "orijin-floring",
      "mindful-focus-hour-glass-by-intelligent-change",
      "valet-tray-small-by-ugmonk",
      "craighill-brass-jack-puzzle",
      "the-best-year-journal-by-intelligent-change",
      "blacksaw-midnight-sun-reversible-baby-alpaca-wool-throw-blanket",
      "ugmonk-valey-tray-bundle",
      "valet-tray-walnut-medium",
      "valet-tray-walnut-large",
    ],
  },
];

export const FEATURED_TABS = [
  { label: "Discover the full collection", handle: "discover-the-full-collection" },
  { label: "Night Shades", handle: "night-shades-collection" },
  { label: "Bedside Accessories", handle: "bedside-accessories" },
];

export const FEATURED_PRODUCTS = [
  "nightside-lamp-white",
  "five-minute-journal",
  "nanu-arc-alarm-clock",
  "orijin-floring",
  "electric-flowfield-cotton-shade",
  "mindful-focus-hour-glass-by-intelligent-change",
  "starlight-cotton-blackout-shade",
  "valet-tray-small-by-ugmonk",
];

export const SPLIT_PRODUCTS = [
  "nanu-arc-alarm-clock",
  "craighill-brass-jack-puzzle",
  "five-minute-journal",
  "orijin-floring",
];

export const HOME_COLLECTION_CARDS = [
  { handle: "frontpage", title: "NS01 Task Lamp", subtitle: "NS01 Task Lamp" },
  { handle: "bedside-accessories", title: "Bedside Accessories", subtitle: "7 products" },
  { handle: "night-shades-collection", title: "Night Shades Collection", subtitle: "6 products" },
];

export const ARTICLES = [
  {
    handle: "best-bedside-reading-lamp",
    title: "What Makes the Best Bedside Reading Lamp? 8 Features to Look For",
    date: "July 27, 2026",
    image: withBase("/media/site/news-1.jpg"),
    excerpt:
      "A bedside lamp has one job after sunset: enough light to read, and not so much that the room stays awake. Here is what actually matters when you choose one.",
    body: `Most reading lights fail in the same few ways. They spill brightness across the bed. They throw a hard shadow on the page. They run too cool, so the room never quite settles.

A focused warm spotlight changes that. Look for a color temperature near 3000K, a beam you can aim, and a shade that still gives the room a soft ambient glow when the task light is tucked away.

Dimming should be on the lamp itself, not buried in an app. The switch belongs where your hand already is. USB-C power keeps replacement simple. A removable shade lets you change the mood without replacing the whole fixture.

Height around 18 inches keeps the light above the page without looming over the pillow. And if you share a bed, the beam has to stop at the book. That is the difference between a lamp and a ceiling light that happens to sit on a table.`,
  },
  {
    handle: "summer-reading-reconsidered",
    title: "Summer Reading, Reconsidered",
    date: "June 27, 2026",
    image: withBase("/media/site/news-summer.jpg"),
    excerpt:
      "Longer evenings do not mean brighter rooms. Summer reading works better when the light stays close to the page.",
    body: `Summer stretches the day, then dumps you into a warm, restless night. Screens stay on later. Overhead lights feel harsher against still-bright windows.

A small, warm task lamp gives the evening a border. You can finish a chapter without lighting the whole room, and you can close the book without the house still humming at full brightness.

Keep the rest of the bedside quiet: a journal, a glass of water, a clock that does not glare. The lamp does the rest.`,
  },
  {
    handle: "bedroom-probably-isnt-dark-enough",
    title: "Your Bedroom Probably Isn't Dark Enough",
    date: "January 26, 2026",
    image: withBase("/media/site/news-dark.webp"),
    excerpt:
      "Even a little leftover light can keep the body from settling. The last hour before sleep deserves a different kind of lamp.",
    body: `Streetlight, hallway glow, a phone face-down but still breathing. Bedrooms collect light they were never meant to keep.

Warm, directional light is easier to shut down. When you are done reading, the room can actually go dark. That is the point of a bedside lamp that does one thing well, then gets out of the way.`,
  },
  {
    handle: "design-for-the-dark",
    title: "Design for the Dark",
    date: "October 20, 2025",
    image: withBase("/media/site/news-design.jpg"),
    excerpt:
      "The transition from wakefulness to sleep is one of the few rituals that remains universal, and yet it has become increasingly neglected.",
    body: `The transition from wakefulness to sleep is one of the few rituals that remains universal, and yet it has become increasingly neglected. Surrounded by screens and artificial brightness, we carry daylight into the one room that should release it.

Designing for the dark is not about making objects gloomy. It is about objects that still work when the house is quiet: a warm beam, a shade that glows instead of glares, a switch you can find without thinking.

That is the brief behind the NS01. Ambient light for the room. A spotlight for the page. Nothing extra once you are ready to sleep.`,
  },
  {
    handle: "inclusive-design-sensory-spaces",
    title: "Shedding Light on Inclusive Design: Sensory Spaces",
    date: "June 20, 2025",
    image: withBase("/media/site/news-icff.png"),
    excerpt:
      "Soft, controllable light is not a luxury finish. For many people it is the difference between a room that calms and a room that overwhelms.",
    body: `Inclusive lighting starts with control. Brightness you can lower. Color that stays warm. A beam that does not rake across a partner's pillow.

Sensory-friendly rooms need fewer surprises: no flicker, no blue spike, no app between you and the switch. A single warm LED, dimmable by hand, is still one of the kindest things you can put beside a bed.`,
  },
  {
    handle: "quiet-light-for-late-hours",
    title: "Quiet Light for Late Hours",
    date: "March 03, 2025",
    image: withBase("/media/site/news-gear.png"),
    excerpt:
      "The NS01 was built for the last hour of the day: a calm glow for the room, and a tight spotlight when you still have pages left.",
    body: `Late hours ask for a different tool than a desk lamp. You want the page bright and the rest of the bed left alone.

The NS01 keeps a cotton shade for ambient light and hides a reading spotlight until you need it. Warm white, one watt, a dimmer on the front. It is a small machine for a small ritual.`,
  },
];

export const FAQS = [
  {
    q: "When will my order ship?",
    a: "We typically ship orders within 1-2 business days unless expedited shipping is selected. Tracking information is sent by email once the order is on its way.",
  },
  {
    q: "Can I return my order for a refund?",
    a: "Yes. Read our Returns & Refunds policy for the full terms, including the 14-day window from delivery.",
  },
  {
    q: "My order arrived damaged. What should I do?",
    a: "Please contact us immediately using the form on this page so we can fix the issue. Include photos of the packaging and the product.",
  },
  {
    q: "How do I clean the fabric shade?",
    a: "The fabric shade must be hand-washed to avoid shrinkage. See the care notes on the Support page before washing.",
  },
  {
    q: "How big is the lamp?",
    a: 'The lamp dimensions are 18" (46cm) H x 6" (15cm) W x 6" (15cm) D.',
  },
  {
    q: "How bright is the LED?",
    a: "The NS01 uses a high-quality CREE warm-white LED rated at 340 lumens, 3000K, with a Color Rendering Index (CRI) of 80.",
  },
  {
    q: "How much power does the lamp use?",
    a: "Because it uses a single LED, the NS01 uses only a single watt of power.",
  },
  {
    q: "How long is the power cord?",
    a: "The NS01 comes with a USB Type C cord that measures 6 ft. long, but any length USB-C cord can be used instead.",
  },
  {
    q: "Does the NS01 have a battery?",
    a: "No, there is no battery. The lamp is powered directly from an outlet.",
  },
  {
    q: "Is there a warranty on the NS01?",
    a: "We offer a 1 year limited warranty on certain parts. See the Warranty page for details.",
  },
];

export const PRODUCT_EXTRAS: Record<
  string,
  { materials?: string; dimensions?: string; care?: string }
> = {
  "nightside-lamp-white": {
    materials: "ABS/Polycarbonate body, Aluminum, Glass, Cotton.",
    dimensions: '18" (46cm) H x 6" (15cm) W x 6" (15cm) D; Weight: 3 lbs.',
    care: "See the care and maintenance notes on the Support page. The fabric shade must be hand-washed to avoid shrinkage.",
  },
};
