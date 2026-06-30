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
    image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1581110169-belkin-apple-watch-stand-1581110138.jpg?crop=1xw:1xh;center,top&resize=980:*",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ECfzKR2VNv3wRQZe2AOqQqpVYgzFV8ehfw&s",
    category: "Tracker",
  },
  {
    id: "p7",
    name: "Sport Wireless Earbuds",
    price: 129,
    image: "https://antuan.vn/public/uploads/2020/10/tai-nghe-bose-sport-earbuds-2.jpg",
    category: "Audio",
  },
  {
    id: "p8",
    name: "AeroSpike Recovery Band",
    price: 89,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    category: "Accessory",
  },
];
