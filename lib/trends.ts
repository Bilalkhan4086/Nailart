export type NailTrend = {
  id: number;
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  metaDescription: string;
  category: string;
  shape: string;
  colours: string[];
  signal: string;
  sourceName: string;
  sourceUrl: string;
  sourceDate: string;
  grid: { column: number; row: number };
  whyTrending: string;
  salonBrief: string;
  wearNotes: string;
  related: string[];
};

export const siteUrl = 'https://nailart.bookmylook.co';
export const lastUpdated = '2026-09-27';

export const trends: NailTrend[] = [
  {
    id: 1,
    slug: 'sheer-spice-nails',
    title: 'Sheer Spice Nails',
    seoTitle: 'Sheer Spice Nails: Autumn 2026 UK Trend',
    description: 'A translucent cinnamon-brown wash that gives autumn colour a lighter, glossier finish.',
    metaDescription: 'Discover sheer spice nails, the glossy brown autumn nail trend UK salons are backing for 2026, with colour notes and a salon-ready brief.',
    category: 'Autumn', shape: 'Short oval', colours: ['Cinnamon', 'Amber', 'Sheer brown'], signal: 'Trending in September',
    sourceName: 'Glamour UK', sourceUrl: 'https://www.glamourmagazine.co.uk/article/september-nail-ideas', sourceDate: '4 September 2026',
    grid: { column: 0, row: 0 },
    whyTrending: 'UK beauty editors are moving familiar autumn browns towards transparent, light-catching finishes. The result works with the season’s richer wardrobe without feeling heavy on shorter nails.',
    salonBrief: 'Ask for a warm brown jelly base in two thin coats, finished with an ultra-glossy top coat. Keep the free edge neat and softly rounded.',
    wearNotes: 'A practical everyday choice for short natural nails. The translucent finish makes regrowth less obvious than an opaque dark brown.',
    related: ['chilli-chocolate-nails', 'blackberry-noir-nails', 'short-minimalist-nails'],
  },
  {
    id: 2,
    slug: 'fawn-print-nails',
    title: 'Fawn Print Nails',
    seoTitle: 'Fawn Print Nails: The Bambi Nail Trend for 2026',
    description: 'Soft caramel, cream and irregular brown markings create autumn’s gentler take on animal print.',
    metaDescription: 'See why fawn print nails are a leading UK autumn 2026 design, plus the colours, shape and exact brief to take to your nail appointment.',
    category: 'Print', shape: 'Soft square', colours: ['Caramel', 'Cream', 'Cocoa'], signal: 'UK editor pick',
    sourceName: 'Marie Claire UK', sourceUrl: 'https://www.marieclaire.co.uk/beauty/nails/autumn-nail-trends-2026', sourceDate: '9 September 2026',
    grid: { column: 1, row: 0 },
    whyTrending: 'Animal print is returning in a softer register. Instead of high-contrast leopard spots, fawn nails use diffused brown markings that feel playful but polished enough for everyday wear.',
    salonBrief: 'Request a creamy nude base with varied caramel and chocolate fawn markings. Keep the pattern irregular and leave some nails plain for balance.',
    wearNotes: 'Works well as a full set or as two accent nails. A short square or squoval shape keeps the print modern rather than costume-like.',
    related: ['prep-school-plaid-nails', 'mix-and-match-nails', 'chilli-chocolate-nails'],
  },
  {
    id: 3,
    slug: 'milky-matcha-nails',
    title: 'Milky Matcha Nails',
    seoTitle: 'Milky Matcha Nails: UK Autumn Nail Colour 2026',
    description: 'A translucent matcha-green tint that turns the milky manicure into a calm, seasonal colour statement.',
    metaDescription: 'Milky matcha nails are rising for autumn 2026. Explore the UK trend, the best finish and what to ask for at your next salon appointment.',
    category: 'Colour', shape: 'Oval', colours: ['Matcha', 'Sage', 'Milky white'], signal: 'Autumn breakout',
    sourceName: 'Marie Claire UK', sourceUrl: 'https://www.marieclaire.co.uk/beauty/nails/autumn-nail-trends-2026', sourceDate: '9 September 2026',
    grid: { column: 2, row: 0 },
    whyTrending: 'Sheer green extends the long-running milky nail look without losing its clean finish. The muted tone also fits the mossy and khaki palette appearing across UK autumn beauty edits.',
    salonBrief: 'Ask for a semi-sheer, milky sage or matcha gel with visible depth rather than a flat pastel. Two fine coats should preserve the translucent effect.',
    wearNotes: 'Particularly flattering on short oval and natural almond shapes. Pair it with a glossy finish and minimal jewellery for a clean look.',
    related: ['chiffon-nails', 'short-minimalist-nails', 'velvet-cat-eye-nails'],
  },
  {
    id: 4,
    slug: 'mix-and-match-nails',
    title: 'Polished Mix-and-Match Nails',
    seoTitle: 'Mix-and-Match Nail Designs for Autumn 2026',
    description: 'A controlled mix of print, colour and texture gives every nail personality while keeping one cohesive palette.',
    metaDescription: 'Explore polished mix-and-match nail designs for autumn 2026, including a cohesive colour formula and salon brief for a wearable UK manicure.',
    category: 'Art', shape: 'Almond', colours: ['Berry', 'Gold', 'Neutral'], signal: 'Creative comeback',
    sourceName: 'Marie Claire UK', sourceUrl: 'https://www.marieclaire.co.uk/beauty/nails/autumn-nail-trends-2026', sourceDate: '9 September 2026',
    grid: { column: 3, row: 0 },
    whyTrending: 'After several seasons of uniform minimal manicures, UK trend coverage is making space for individuality again. Repeating two or three colours prevents the deliberately mismatched set from becoming visually noisy.',
    salonBrief: 'Choose one base neutral, one deep colour and one metallic accent. Ask your nail artist to alternate French tips, a small print and one full-colour nail.',
    wearNotes: 'Best when the design scale suits the nail length. Short nails benefit from micro motifs, while almond nails can carry a larger accent.',
    related: ['fawn-print-nails', 'gilded-midnight-blue-nails', 'micro-french-nails'],
  },
  {
    id: 5,
    slug: 'blackberry-noir-nails',
    title: 'Blackberry Noir Nails',
    seoTitle: 'Blackberry Noir Nails: Dark Purple Nail Trend',
    description: 'An almost-black berry shade with a plum undertone: glossy, dramatic and easier to wear than pure black.',
    metaDescription: 'Blackberry noir nails are the deep purple manicure trend for autumn 2026. Find the ideal finish, nail shape and salon wording here.',
    category: 'Colour', shape: 'Short squoval', colours: ['Blackberry', 'Plum', 'Near-black'], signal: 'Dark colour leader',
    sourceName: 'Glamour UK', sourceUrl: 'https://www.glamourmagazine.co.uk/article/nail-trends-2026', sourceDate: '6 July 2026',
    grid: { column: 0, row: 1 },
    whyTrending: 'The shade delivers the sophistication of black with a warmer purple depth. It bridges late summer and autumn and complements the berry tones returning to UK fashion and beauty.',
    salonBrief: 'Ask for a blue-based, near-black plum in a high-shine finish. Check the first coat in daylight so the blackberry undertone remains visible.',
    wearNotes: 'A short, immaculate shape makes the colour feel chic and practical. Add one fine gold line if you want detail without losing the dark impact.',
    related: ['sheer-spice-nails', 'chilli-chocolate-nails', 'gilded-midnight-blue-nails'],
  },
  {
    id: 6,
    slug: 'velvet-cat-eye-nails',
    title: 'Velvet Cat-Eye Nails',
    seoTitle: 'Velvet Cat-Eye Nails: Chrome Nail Trend 2026',
    description: 'Fine magnetic shimmer creates a soft velvet glow that moves across the nail instead of forming a hard stripe.',
    metaDescription: 'Velvet cat-eye nails are evolving for autumn/winter 2026. See the softer UK chrome trend and the exact finish to request at a salon.',
    category: 'Chrome', shape: 'Sculpted almond', colours: ['Pewter', 'Berry', 'Champagne'], signal: 'Pro forecast',
    sourceName: 'Scratch Magazine', sourceUrl: 'https://www.scratchmagazine.co.uk/nailart-technique/aw26-nail-trends/', sourceDate: 'August 2026',
    grid: { column: 1, row: 1 },
    whyTrending: 'Professional UK nail coverage points to softer magnetic effects replacing the sharp cat-eye stripe. The diffused shimmer reads as texture, giving chrome a more refined and wearable direction.',
    salonBrief: 'Request a fine-particle magnetic gel and ask for the magnet to create an even, diffused halo. Finish with a glassy top coat rather than extra glitter.',
    wearNotes: 'The finish looks strongest under changing light. Pewter and berry work for autumn, while champagne is a useful option for events and bridal looks.',
    related: ['gilded-midnight-blue-nails', 'chiffon-nails', 'prep-school-plaid-nails'],
  },
  {
    id: 7,
    slug: 'prep-school-plaid-nails',
    title: 'Prep-School Plaid Nails',
    seoTitle: 'Plaid Nail Art: Preppy Autumn Nails for 2026',
    description: 'Fine intersecting lines turn classic tartan and argyle references into neat, fashion-led autumn nail art.',
    metaDescription: 'Save the prep-school plaid nail trend for autumn 2026. Get UK-inspired colour combinations and a clean salon brief for wearable tartan nails.',
    category: 'Print', shape: 'Short square', colours: ['Oxblood', 'Navy', 'Cream'], signal: 'Runway influence',
    sourceName: 'British Vogue', sourceUrl: 'https://www.vogue.co.uk/article/nail-trends-2026', sourceDate: '31 December 2025',
    grid: { column: 2, row: 1 },
    whyTrending: 'Fashion’s renewed interest in argyle, heritage checks and textured fabrics is crossing into nail art. Fine linework and a limited palette make the reference recognisable without looking busy.',
    salonBrief: 'Pick a sheer or cream base, then add two fine crossing line colours and one darker accent. Keep the check scale small and use it on selected nails.',
    wearNotes: 'Ideal with a short square shape. Oxblood and navy feel seasonal, while soft blue and cream offer a lighter interpretation.',
    related: ['fawn-print-nails', 'mix-and-match-nails', 'micro-french-nails'],
  },
  {
    id: 8,
    slug: 'chiffon-nails',
    title: 'Chiffon Nails',
    seoTitle: 'Chiffon Nails: The Sheer Manicure Trend 2026',
    description: 'Whisper-thin colour lets the natural nail show through, creating an elegant manicure that works with everything.',
    metaDescription: 'Discover chiffon nails, the celebrity-approved sheer manicure trend for 2026, with UK salon advice, colour ideas and wear notes.',
    category: 'Minimal', shape: 'Natural oval', colours: ['Blush', 'Peach', 'Clear pink'], signal: 'Celebrity favourite',
    sourceName: 'British Vogue', sourceUrl: 'https://www.vogue.co.uk/article/chiffon-nails-trend', sourceDate: '14 May 2026',
    grid: { column: 3, row: 1 },
    whyTrending: 'A sheer manicure adapts easily to work, events and changing outfits. British Vogue highlighted the look on celebrities, while the low-contrast finish also supports the wider return to natural-looking nails.',
    salonBrief: 'Ask for one or two whisper-thin coats of a sheer pink, peach or nude that complements your skin tone. The nail should remain visible beneath the colour.',
    wearNotes: 'Preparation matters because the finish is deliberately transparent. A tidy cuticle line and smooth natural nail create the polished effect.',
    related: ['short-minimalist-nails', 'milky-matcha-nails', 'micro-french-nails'],
  },
  {
    id: 9,
    slug: 'micro-french-nails',
    title: 'Autumn Micro-French Nails',
    seoTitle: 'Micro-French Nail Designs for Autumn 2026',
    description: 'Ultra-fine tips in oxblood, chocolate or gold refresh the French manicure for shorter autumn nails.',
    metaDescription: 'Explore autumn micro-French nail designs for 2026, with UK colour ideas, short-nail advice and a precise brief for your nail technician.',
    category: 'French', shape: 'Short oval', colours: ['Oxblood', 'Chocolate', 'Gold'], signal: 'Forever trend, refined',
    sourceName: 'Glamour UK', sourceUrl: 'https://www.glamourmagazine.co.uk/gallery/autumn-nail-designs', sourceDate: '14 August 2026',
    grid: { column: 0, row: 2 },
    whyTrending: 'The French manicure remains a constant, but autumn 2026 coverage emphasises precision and richer seasonal colour. The narrow tip also suits the renewed preference for short, practical lengths.',
    salonBrief: 'Request a clean sheer base with the thinnest possible tip. Choose one autumn shade across the set or alternate two closely related colours.',
    wearNotes: 'A micro tip can visually lengthen a short nail when it follows the natural curve. Avoid a thick line if your nail bed is compact.',
    related: ['short-minimalist-nails', 'prep-school-plaid-nails', 'gilded-midnight-blue-nails'],
  },
  {
    id: 10,
    slug: 'short-minimalist-nails',
    title: 'Short Minimalist Nails',
    seoTitle: 'Short Nail Designs: Minimal UK Ideas for 2026',
    description: 'Clean, practical short nails gain personality through one tiny gem, dot or fine negative-space detail.',
    metaDescription: 'Find stylish short nail designs for 2026, including minimalist UK manicure ideas, shape advice and subtle details that suit natural nails.',
    category: 'Short nails', shape: 'Squoval', colours: ['Milky nude', 'Clear', 'Silver'], signal: 'High search interest',
    sourceName: 'Glamour UK', sourceUrl: 'https://www.glamourmagazine.co.uk/gallery/short-nail-designs', sourceDate: '26 July 2026',
    grid: { column: 1, row: 2 },
    whyTrending: 'Short nails combine everyday practicality with the current preference for cleaner shapes. Small accessories and negative-space details create interest without overwhelming a compact nail bed.',
    salonBrief: 'Ask for a very short squoval or soft round shape, a natural-looking base and one tiny detail placed consistently on each nail.',
    wearNotes: 'Choose flat gems or painted dots if you type or work with your hands. The look is easy to maintain and regrowth stays discreet.',
    related: ['chiffon-nails', 'micro-french-nails', 'sheer-spice-nails'],
  },
  {
    id: 11,
    slug: 'italian-red-manicure',
    title: 'Italian Red Manicure',
    seoTitle: 'Italian Manicure: The Red Nail Technique Explained',
    description: 'Strategic polish placement and a precise red finish create the appearance of a longer, more elegant nail.',
    metaDescription: 'What is an Italian manicure? Discover the 2026 red nail technique seen at Vogue World and how to request the lengthening look in a UK salon.',
    category: 'Technique', shape: 'Natural', colours: ['True red', 'Oxblood', 'High shine'], signal: 'Just in from fashion week',
    sourceName: 'British Vogue', sourceUrl: 'https://www.vogue.co.uk/article/italian-manicure-vogue-world-milan', sourceDate: '23 September 2026',
    grid: { column: 2, row: 2 },
    whyTrending: 'The technique returned to attention at Vogue World 2026. By leaving an almost imperceptible margin at the sidewalls, careful polish placement can give shorter or wider nails a more elongated appearance.',
    salonBrief: 'Ask for a classic glossy red with precise Italian-style application: colour close to the cuticle and a very fine margin along each sidewall.',
    wearNotes: 'This is a technique rather than a single design, so it works with several red tones. A careful, symmetrical application is more important than nail length.',
    related: ['blackberry-noir-nails', 'short-minimalist-nails', 'chilli-chocolate-nails'],
  },
  {
    id: 12,
    slug: 'gilded-midnight-blue-nails',
    title: 'Gilded Midnight Blue Nails',
    seoTitle: 'Midnight Blue and Gold Nails for Autumn 2026',
    description: 'Inky navy meets fine gold detailing for a dark autumn manicure that catches the light.',
    metaDescription: 'Save midnight blue and gold nail ideas for autumn 2026. See why UK editors are backing the colour and get a salon-ready design brief.',
    category: 'Metallic', shape: 'Almond', colours: ['Midnight blue', 'Gold', 'Ink'], signal: 'London artist forecast',
    sourceName: 'Who What Wear UK', sourceUrl: 'https://www.whowhatwear.com/beauty/nails/autumn-nail-trends-2026', sourceDate: '29 August 2026',
    grid: { column: 3, row: 2 },
    whyTrending: 'London-based nail artist insight puts midnight blue and gilded metallic details among autumn’s strongest directions. Navy offers the drama of black while gold adds warmth and dimension.',
    salonBrief: 'Choose an almost-black navy base, then add a very fine gold French edge, half-moon or single irregular accent. Keep the metallic detail sparse.',
    wearNotes: 'High contrast works on both short and long nails. On a short nail, limit the gold to a narrow edge so the blue remains dominant.',
    related: ['velvet-cat-eye-nails', 'blackberry-noir-nails', 'mix-and-match-nails'],
  },
  {
    id: 13,
    slug: 'chilli-chocolate-nails',
    title: 'Chilli Chocolate Nails',
    seoTitle: 'Chilli Chocolate Nails: Autumn 2026 Colour Trend',
    description: 'Chocolate brown warmed with a subtle red undertone creates a rich, spicy neutral for cosy season.',
    metaDescription: 'Chilli chocolate nails are a leading UK autumn 2026 colour. Discover the undertone, finish and salon brief for this rich brown manicure.',
    category: 'Colour', shape: 'Short almond', colours: ['Chocolate', 'Chilli red', 'Warm brown'], signal: 'Emerging this week',
    sourceName: 'Woman & Home', sourceUrl: 'https://www.womanandhome.com/beauty/chilli-chocolate-nails/', sourceDate: '21 September 2026',
    grid: { column: 0, row: 0 },
    whyTrending: 'This emerging shade keeps the familiarity of autumn brown but adds enough red warmth to distinguish it from cooler espresso tones. It pairs naturally with camel, burgundy and dark denim.',
    salonBrief: 'Ask for a deep chocolate polish with a clearly warm red undertone, finished in high gloss. Avoid a cool or grey-based brown.',
    wearNotes: 'A versatile option for short almond, oval or squoval nails. It reads as a neutral indoors and reveals its red warmth in daylight.',
    related: ['sheer-spice-nails', 'blackberry-noir-nails', 'italian-red-manicure'],
  },
];

export const filters = ['All', 'Autumn', 'Colour', 'Chrome', 'Print', 'French', 'Short nails'];

export function getTrend(slug: string) {
  return trends.find((trend) => trend.slug === slug);
}
