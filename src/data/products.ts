export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  category: string;
  image: string;
  badge?: string;
}

export const categories = [
  'All',
  'Clothing',
  'Accessories',
  'Footwear',
  'Bags',
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    id: 'wool-overcoat',
    name: 'Italian Wool Overcoat',
    price: 289.0,
    originalPrice: 350.0,
    description:
      'Crafted from premium Italian wool, this overcoat features a tailored silhouette with notched lapels and a double-breasted closure. Perfect for elevating any cold-weather outfit.',
    details: [
      '100% Italian virgin wool',
      'Double-breasted with horn buttons',
      'Fully lined interior',
      'Two front flap pockets',
      'Dry clean only',
    ],
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=750&fit=crop',
    badge: 'Sale',
  },
  {
    id: 'cashmere-sweater',
    name: 'Cashmere Crewneck Sweater',
    price: 165.0,
    description:
      'Luxuriously soft cashmere crewneck sweater in a relaxed fit. A timeless wardrobe essential that pairs effortlessly with jeans or tailored trousers.',
    details: [
      '100% Grade-A Mongolian cashmere',
      'Relaxed fit',
      'Ribbed cuffs and hem',
      'Available in 6 colors',
      'Hand wash recommended',
    ],
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=750&fit=crop',
  },
  {
    id: 'leather-weekender',
    name: 'Full-Grain Leather Weekender',
    price: 345.0,
    description:
      'Handcrafted from full-grain vegetable-tanned leather, this spacious weekender bag develops a beautiful patina over time. Features a padded laptop sleeve and multiple organizer pockets.',
    details: [
      'Full-grain vegetable-tanned leather',
      'Cotton twill lining',
      'Padded 15" laptop compartment',
      'Detachable shoulder strap',
      'Brass hardware',
    ],
    category: 'Bags',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop',
    badge: 'Best Seller',
  },
  {
    id: 'canvas-sneakers',
    name: 'Heritage Canvas Sneakers',
    price: 89.0,
    description:
      'Classic low-top sneakers updated with premium organic canvas and a cushioned insole. The vulcanized rubber sole provides excellent grip and durability.',
    details: [
      'Organic cotton canvas upper',
      'Cushioned memory foam insole',
      'Vulcanized rubber outsole',
      'Reinforced toe cap',
      'Available in 4 colors',
    ],
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=750&fit=crop',
  },
  {
    id: 'minimal-watch',
    name: 'Swiss Minimal Watch',
    price: 220.0,
    originalPrice: 275.0,
    description:
      'A refined timepiece with a clean dial, sapphire crystal glass, and a Japanese quartz movement. The Italian leather strap adds a touch of understated elegance.',
    details: [
      'Japanese quartz movement',
      'Sapphire crystal glass',
      '40mm stainless steel case',
      'Italian leather strap',
      'Water resistant to 50m',
    ],
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=750&fit=crop',
    badge: 'Sale',
  },
  {
    id: 'linen-shirt',
    name: 'Relaxed Linen Shirt',
    price: 98.0,
    description:
      'Breathable pure linen shirt with a relaxed fit and a soft garment wash for lived-in comfort from day one. Essential for warm-weather layering.',
    details: [
      '100% European flax linen',
      'Garment-washed finish',
      'Mother-of-pearl buttons',
      'Chest pocket',
      'Machine washable',
    ],
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=750&fit=crop',
  },
  {
    id: 'leather-chelsea',
    name: 'Leather Chelsea Boots',
    price: 245.0,
    description:
      'Sleek Chelsea boots crafted from supple calfskin leather with a Goodyear-welted sole. The elastic side panels ensure easy on-off while maintaining a clean silhouette.',
    details: [
      'Premium calfskin leather',
      'Goodyear welt construction',
      'Leather sole with rubber grip',
      'Pull tab at heel',
      'Resoleable',
    ],
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=750&fit=crop',
    badge: 'New',
  },
  {
    id: 'crossbody-bag',
    name: 'Minimalist Crossbody Bag',
    price: 128.0,
    description:
      'Compact yet surprisingly spacious, this crossbody bag is crafted from pebbled leather with a sleek magnetic closure. Perfect for everyday essentials.',
    details: [
      'Pebbled Italian leather',
      'Magnetic flap closure',
      'Adjustable strap',
      'Interior card slots',
      'Gold-tone hardware',
    ],
    category: 'Bags',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=750&fit=crop',
  },
  {
    id: 'silk-scarf',
    name: 'Hand-Printed Silk Scarf',
    price: 75.0,
    description:
      'A vibrant silk scarf featuring original artwork printed using artisanal techniques. Can be worn around the neck, as a headband, or tied to your favorite bag.',
    details: [
      '100% mulberry silk',
      'Hand-rolled edges',
      '70cm x 70cm',
      'Original artist design',
      'Dry clean only',
    ],
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=600&h=750&fit=crop',
  },
  {
    id: 'denim-jacket',
    name: 'Selvedge Denim Jacket',
    price: 195.0,
    description:
      'A rugged yet refined trucker jacket made from Japanese selvedge denim. Raw unwashed fabric that will develop unique fades and character with wear.',
    details: [
      '14oz Japanese selvedge denim',
      'Raw / unwashed',
      'Copper button closures',
      'Two chest flap pockets',
      'Adjustable waist tabs',
    ],
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=750&fit=crop',
    badge: 'New',
  },
  {
    id: 'aviator-sunglasses',
    name: 'Titanium Aviator Sunglasses',
    price: 185.0,
    originalPrice: 210.0,
    description:
      'Lightweight titanium frame aviators with polarized lenses for superior clarity and UV protection. A timeless shape with modern construction.',
    details: [
      'Titanium frame',
      'Polarized CR-39 lenses',
      '100% UV protection',
      'Spring hinges',
      'Includes hard case',
    ],
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=750&fit=crop',
  },
  {
    id: 'suede-loafers',
    name: 'Italian Suede Loafers',
    price: 198.0,
    description:
      'Handmade in Italy from buttery-soft suede, these unlined loafers feature a Blake-stitched leather sole. The perfect shoe for smart-casual occasions.',
    details: [
      'Italian suede upper',
      'Unlined for softness',
      'Blake stitch construction',
      'Leather sole',
      'Hand-finished patina',
    ],
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&h=750&fit=crop',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge === 'Best Seller' || p.badge === 'New' || p.badge === 'Sale').slice(0, 4);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
}
