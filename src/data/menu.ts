export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  popular?: boolean;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    title: "Breakfast",
    items: [
      {
        name: "Luma Breakfast Plate",
        description:
          "Soft eggs, roasted tomatoes, labneh, herbs and sourdough.",
        price: "AED 48",
        popular: true,
      },
      {
        name: "Avocado Sourdough",
        description:
          "Avocado, whipped feta, lemon, chili and fresh herbs.",
        price: "AED 42",
      },
      {
        name: "Berry Oat Bowl",
        description:
          "Overnight oats, berries, almond butter and toasted seeds.",
        price: "AED 34",
      },
      {
        name: "Honey Brioche Toast",
        description:
          "Brioche, vanilla cream, seasonal fruit and honey.",
        price: "AED 39",
      },
    ],
  },
  {
    title: "All Day",
    items: [
      {
        name: "Garden Pasta",
        description:
          "Rigatoni, roasted tomato sauce, basil and parmesan.",
        price: "AED 54",
      },
      {
        name: "Crispy Chicken Bowl",
        description:
          "Spiced chicken, rice, cabbage, avocado and sesame dressing.",
        price: "AED 58",
        popular: true,
      },
      {
        name: "Grilled Halloumi Salad",
        description:
          "Greens, cucumber, citrus, herbs and toasted almonds.",
        price: "AED 49",
      },
      {
        name: "Roasted Salmon Plate",
        description:
          "Salmon, herbed rice, charred vegetables and lemon.",
        price: "AED 72",
      },
    ],
  },
  {
    title: "Coffee",
    items: [
      {
        name: "Espresso",
        price: "AED 18",
      },
      {
        name: "Flat White",
        price: "AED 24",
      },
      {
        name: "Iced Vanilla Latte",
        price: "AED 29",
        popular: true,
      },
      {
        name: "V60",
        price: "AED 32",
      },
      {
        name: "Spanish Latte",
        price: "AED 30",
      },
    ],
  },
  {
    title: "Cold Drinks",
    items: [
      {
        name: "Iced Matcha",
        price: "AED 31",
      },
      {
        name: "Peach Iced Tea",
        price: "AED 27",
      },
      {
        name: "Rose Lemonade",
        price: "AED 26",
      },
      {
        name: "Mango Cloud",
        price: "AED 32",
        popular: true,
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Burnt Cheesecake",
        price: "AED 36",
        popular: true,
      },
      {
        name: "Date Pudding",
        price: "AED 32",
      },
      {
        name: "Chocolate Sea Salt Cookie",
        price: "AED 18",
      },
      {
        name: "Pistachio Tiramisu",
        price: "AED 38",
      },
    ],
  },
];

export const hours = [
  {
    day: "Monday",
    time: "7 AM – 10 PM",
  },
  {
    day: "Tuesday",
    time: "7 AM – 10 PM",
  },
  {
    day: "Wednesday",
    time: "7 AM – 10 PM",
  },
  {
    day: "Thursday",
    time: "7 AM – 11 PM",
  },
  {
    day: "Friday",
    time: "7 AM – 12 AM",
  },
  {
    day: "Saturday",
    time: "7 AM – 12 AM",
  },
  {
    day: "Sunday",
    time: "7 AM – 10 PM",
  },
];
