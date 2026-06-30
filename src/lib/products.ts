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
    name: "AeroSpike Pro Band",
    price: 299,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400",
    category: "Tracker",
  },
  {
    id: "p2",
    name: "Elite Performance Strap (Neon)",
    price: 39,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTARnWBY-w6Dp43wVZTzFZSalxqyyb8mnuYA&s",
    category: "Accessory",
  },
  {
    id: "p3",
    name: "Magnetic Charging Dock",
    price: 49,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=400",
    category: "Accessory",
  },
  {
    id: "p4",
    name: "AeroSpike Pro - Stealth Edition",
    price: 329,
    image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&q=80&w=400",
    category: "Tracker",
  },
  {
    id: "p5",
    name: "Pro Heart Rate Armband",
    price: 59,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400",
    category: "Accessory",
  },
  {
    id: "p6",
    name: "AeroSpike Pro - Titanium Edition",
    price: 449,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=400",
    category: "Tracker",
  },
  {
    id: "p7",
    name: "Sport Wireless Earbuds",
    price: 129,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=400",
    category: "Audio",
  },
  {
    id: "p8",
    name: "Performance Sensor Pod",
    price: 89,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    category: "Sensor",
  },
];
