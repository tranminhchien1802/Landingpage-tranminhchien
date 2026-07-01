export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Pro Heart Rate Armband",
    price: 59,
    image: "/images/anh1.jpeg",
    category: "Accessory",
  },
  {
    id: "p2",
    name: "AeroSpike Pro - Titanium Edition",
    price: 449,
    image: "/images/anh2.jpeg",
    category: "Tracker",
  },
  {
    id: "p3",
    name: "Magnetic Charging Dock",
    price: 49,
    image: "/images/anh3.jpeg",
    category: "Accessory",
  },
  {
    id: "p4",
    name: "AeroSpike Pro - Stealth Edition",
    price: 329,
    image: "/images/anh4.jpeg",
    category: "Tracker",
  },
  {
    id: "p5",
    name: "AeroSpike Pro Band",
    price: 299,
    image: "/images/anh5.png",
    category: "Tracker",
  },
  {
    id: "p6",
    name: "Elite Performance Strap (Neon)",
    price: 39,
    image: "/images/anh6.jpeg",
    category: "Accessory",
  },
  {
    id: "p7",
    name: "Sport Wireless Earbuds",
    price: 129,
    image: "/images/anh7.webp",
    category: "Audio",
  },
  {
    id: "p8",
    name: "AeroSpike Recovery Band",
    price: 89,
    image: "/images/anh8.jpeg",
    category: "Accessory",
  },
];
