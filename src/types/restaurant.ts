export type MenuCategory =
  | 'All'
  | 'Shawaya & Combos'
  | 'Shawarma'
  | 'Grills & Alfaham'
  | 'Rice & Meals'
  | 'Snacks & Sides'
  | 'Beverages';

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'All'>;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  portion: string;
  calories?: string;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  isSpicy?: boolean;
  isVeg?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  selectedOption?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  source: string;
  avatarBg: string;
  initials: string;
  dishRecommended?: string;
  location: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Shop & Ambiance' | 'Menu Card' | 'Grills' | 'Food';
  imageUrl: string;
  caption: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  motto: string;
  description: string;
  trustStatement: string;
  phone: string;
  phone2: string;
  phoneFormatted: string;
  phone2Formatted: string;
  phoneClean: string;
  phone2Clean: string;
  whatsapp: string;
  whatsapp2: string;
  whatsappClean: string;
  whatsapp2Clean: string;
  email: string;
  address: string;
  directions: string;
  openingHours: string;
  hoursWeekday: string;
  hoursWeekend: string;
  serviceOption: string;
  deliveryZones: string;
  currency: string;
  ambiance: {
    title: string;
    description: string;
  };
  social: {
    instagram: string;
    facebook: string;
    whatsapp: string;
    whatsapp2: string;
    googleMaps: string;
  };
}
