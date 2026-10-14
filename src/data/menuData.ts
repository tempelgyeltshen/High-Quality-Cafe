export interface MenuItem {
  name: string;
  subtitle?: string;
  description?: string;
}

export interface MenuSubCategory {
  title: string;
  items: MenuItem[];
}

export interface MenuBookPageData {
  pageNumber: number;
  categoryTitle?: string;
  subCategories?: MenuSubCategory[];
  items?: MenuItem[];
}

export const RESTAURANT_INFO = {
  name: "HIGH QUALITY CAFÉ",
};

export const MENU_BOOK_PAGES: MenuBookPageData[] = [
  // Page 1: STARTER
  {
    pageNumber: 1,
    categoryTitle: "STARTER",
    items: [
      {
        name: "SUJA-SHAMDRAY",
        description: "Traditional Bhutanese-style dish prepared with fresh vegetables, aromatic spices and a rich, flavorful sauce. Served hot with butter tea (suja).",
      },
      {
        name: "CAESAR SALAD WITH GRILLED CHICKEN BREAST",
        description: "Fresh crisp lettuce, grilled chicken breast, Caesar dressing, Parmesan cheese and crunchy croutons, finished with freshly ground pepper.",
      },
      {
        name: "POTATO WEDGES",
        description: "Golden crispy potato wedges seasoned with herbs and spices. Served with a creamy dipping sauce.",
      },
      {
        name: "FISH & CHIPS",
        description: "Crispy battered fish served with golden French fries, fresh salad and tartar sauce.",
      },
      {
        name: "PRAWN TEMPURA",
        description: "Succulent prawns lightly coated in a delicate, crispy tempura batter and deep-fried to golden perfection. Served with Japanese-style dipping sauce and fresh salad.",
      },
    ],
  },

  // Page 2: MAIN COURSE (Part 1)
  {
    pageNumber: 2,
    categoryTitle: "MAIN COURSE",
    items: [
      {
        name: "SPAGHETTI CARBONARA",
        description: "Spaghetti Carbonara is a classic Italian pasta dish made with spaghetti, eggs, cheese, cured pork, and black pepper.",
      },
      {
        name: "TOMATO THO TSHE",
        description: "A traditional Bhutanese vegetarian dish made with fresh tomatoes, onions, green chillies and Bhutanese spices. Simple, fresh and flavorful.",
      },
      {
        name: "GOLDEN EGG FRIED RICE",
        description: "Fragrant rice wok-fried with eggs, fresh vegetables and aromatic seasonings, finished to a delicious golden perfection.",
      },
      {
        name: "CHICKEN KHATSHU",
        description: "Tender chicken cooked with a flavorful Bhutanese-style sauce, fresh chillies and aromatic spices. Served with steamed rice.",
      },
      {
        name: "TERIYAKI CHICKEN",
        description: "Juicy grilled chicken glazed with a sweet and savory teriyaki sauce, garnished with sesame seeds and spring onions. Served with steamed rice.",
      },
      {
        name: "TERIYAKI BASA",
        description: "Tender Basa fillet glazed with a rich sweet and savory teriyaki sauce, finished with sesame seeds and spring onions. Served with steamed rice.",
      },
    ],
  },

  // Page 3: MAIN COURSE (Part 2)
  {
    pageNumber: 3,
    categoryTitle: "MAIN COURSE",
    items: [
      {
        name: "BEEF BURGER",
        description: "Juicy seasoned beef patty served in a soft burger bun with fresh lettuce, tomato, onion, cheese and our signature burger sauce. Served with French fries.",
      },
      {
        name: "PIZZA",
        subtitle: "Bacon, Chicken & Cheese Pizza",
        description: "Freshly baked pizza topped with crispy bacon, seasoned chicken and generous melted cheese on a golden, crispy crust.",
      },
      {
        name: "SPICY CHICKEN WINGS",
        description: "Crispy chicken wings tossed in a bold and spicy sauce, seasoned with aromatic herbs and spices. Served with a dipping sauce.",
      },
      {
        name: "CHICKEN CHILLI",
        description: "Tender pieces of chicken stir-fried with fresh green chillies, onions, bell peppers and aromatic spices in a flavorful chilli sauce.",
      },
      {
        name: "PRAWN CHILLI",
        description: "Succulent prawns stir-fried with fresh green chillies, onions, bell peppers and aromatic spices in a flavorful sweet and spicy chilli sauce. Served hot and garnished with spring onions.",
      },
    ],
  },

  // Page 4: HOT DRINKS & COLD DRINKS
  {
    pageNumber: 4,
    subCategories: [
      {
        title: "HOT DRINKS",
        items: [
          { name: "ESPRESSO" },
          { name: "AMERICANO" },
          { name: "CAFÉ LATTE" },
          { name: "CAPPUCCINO" },
          { name: "MOCHA" },
          { name: "WHITE MOCHA" },
          { name: "CARAMEL MACCHIATO" },
          { name: "MACCHIATO" },
          { name: "CORTADO" },
          { name: "FLAT WHITE" },
          { name: "HOT CHOCOLATE" },
          { name: "MILK TEA" },
          { name: "LEMON HONEY TEA" },
        ],
      },
      {
        title: "COLD DRINKS",
        items: [
          { name: "ICED AMERICANO" },
          { name: "ICED MATCHA" },
          { name: "ICED LATTE" },
          { name: "ESPRESSO SHAKER" },
        ],
      },
    ],
  },

  // Page 5: BEVERAGES
  {
    pageNumber: 5,
    categoryTitle: "BEVERAGES",
    items: [
      { name: "JACK DANIEL’S" },
      { name: "BLACK LABEL" },
      { name: "RED LABEL" },
      { name: "DOUBLE BLACK" },
      { name: "K5" },
      { name: "MISTY PEAK" },
      { name: "LAGER" },
      { name: "11,000" },
      { name: "HIGH LAND" },
      { name: "SOJU" },
      { name: "BREEZER" },
      { name: "COKE (CAN)" },
      { name: "SPRITE (CAN)" },
      { name: "LIPTON" },
      { name: "WATER (1000ML / 500ML)" },
    ],
  },

  // Page 6: COCKTAILS AND MOCKTAILS
  {
    pageNumber: 6,
    categoryTitle: "COCKTAILS AND MOCKTAILS",
    subCategories: [
      {
        title: "COCKTAILS",
        items: [
          { name: "MOJITO" },
          { name: "BLUE LAGOON" },
          { name: "MARGARITA" },
          { name: "TEQUILA SUNRISE" },
          { name: "COSMOPOLITAN" },
          { name: "WHISKEY SOUR" },
          { name: "DAIQUIRI" },
          { name: "SEX ON THE BEACH" },
          { name: "SCREWDRIVER" },
        ],
      },
      {
        title: "MOCKTAILS",
        items: [
          { name: "VIRGIN MOJITO" },
          { name: "BLUE LAGOON MOCKTAIL" },
          { name: "SHIRLEY TEMPLE" },
          { name: "LEMON MINT COOLER" },
          { name: "SUNRISE MOCKTAIL" },
          { name: "CRANBERRY SPRITZER" },
        ],
      },
    ],
  },
];

// Single source of truth for the quick page navigation bar (derived from MENU_BOOK_PAGES
// so the navigator can never drift out of sync with the menu pages).
const NAV_LABELS: Record<number, string> = {
  1: 'Starter',
  2: 'Main Course',
  3: 'Main Course II',
  4: 'Hot & Cold',
  5: 'Beverages',
  6: 'Cocktails & Mocktails',
};

// Pages whose content still appears in the menu but which have no pill in the
// quick navigation bar (page 3 "Main Course II" is covered by the "Main Course"
// pill for page 2, which the scroll-spy keeps highlighted across both pages).
const NAV_HIDDEN_PAGES: number[] = [3];

export const NAVIGATOR_PAGES: { id: string; label: string }[] = MENU_BOOK_PAGES
  .filter((page) => !NAV_HIDDEN_PAGES.includes(page.pageNumber))
  .map((page) => ({
    id: `page-${page.pageNumber}`,
    label: NAV_LABELS[page.pageNumber] ?? page.categoryTitle ?? `Page ${page.pageNumber}`,
  }));
