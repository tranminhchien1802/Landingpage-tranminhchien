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
    image: "https://armor-x.com/cdn/shop/files/GO-HRM04-ARMOR-X-Heart-Rate-Monitor-Armband-Support-Dual-Protocol-of-ANT_-and-Bluetooth-for-Running-Cycling-Yoga-Gym-Sports_1.jpg?v=1710121569",
    category: "Accessory",
  },
  {
    id: "p2",
    name: "AeroSpike Pro - Titanium Edition",
    price: 449,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ECfzKR2VNv3wRQZe2AOqQqpVYgzFV8ehfw&s",
    category: "Tracker",
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
    image: "https://product.hstatic.net/1000203080/product/841301056-8_b624187e5d46473b97b65e9dc920955e_master.jpg",
    category: "Tracker",
  },
  {
    id: "p5",
    name: "AeroSpike Pro Band",
    price: 299,
    image: "https://uagvietnam.com/wp-content/uploads/2020/05/day-deo-apple-watch-42mm-_-44mm-uag-scout-silicone_41_bengovn_1.png",
    category: "Tracker",
  },
  {
    id: "p6",
    name: "Elite Performance Strap (Neon)",
    price: 39,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTARnWBY-w6Dp43wVZTzFZSalxqyyb8mnuYA&s",
    category: "Accessory",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHutlb_Gkp2PU3y5hoTRUk90DLvH2PSnRZqA&s",
    category: "Accessory",
  },
];
