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
  email: "support@manatradeonline.com",
  emailHref: "mailto:support@manatradeonline.com",
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
    a: `Please contact us immediately at ${COMPANY.email} or use the form on this page so we can fix the issue. Include photos of the packaging and the product.`,
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
