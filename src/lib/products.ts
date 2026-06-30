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
    image: "https://www.cnet.com/a/img/resize/6b86727c3ec07ffc8d7b8edffe0c9348d554b8b6/hub/2015/11/18/eb04cffa-49ea-48eb-b258-ad292e68f735/apple-watch-magnetic-charging-dock-34rcharging-screen.png?auto=webp&width=1200",
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
    image: "https://armor-x.com/cdn/shop/files/GO-HRM04-ARMOR-X-Heart-Rate-Monitor-Armband-Support-Dual-Protocol-of-ANT_-and-Bluetooth-for-Running-Cycling-Yoga-Gym-Sports_1.jpg?v=1710121569",
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
