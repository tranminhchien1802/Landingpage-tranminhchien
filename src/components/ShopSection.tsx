"use client";

import Image from "next/image";
import { useStore } from "@/lib/StoreContext";
import { products } from "@/lib/products";
import { useReveal } from "@/lib/useReveal";

export default function ShopSection() {
  const { addToCart, toggleFavorite, favorites, addRecentlyViewed } = useStore();
  const { ref, revealed } = useReveal(0.1);

  return (
    <section id="shop" className="bg-card px-4 py-16 sm:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div
          className={`text-center transition-all duration-700 ${
            revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pro Shop
          </h2>
          <p className="mt-4 text-muted">
            Gear up with the latest AeroSpike Pro devices and accessories.
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => {
            const isFav = favorites.some((f) => f.id === product.id);
            return (
              <div
                key={product.id}
                onClick={() => addRecentlyViewed(product)}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-700 hover:border-primary/30 hover:shadow-xl ${
                  revealed
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative aspect-square overflow-hidden bg-image-bg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button 
                    onClick={(e) => { e.stopPropagation(); toggleFavorite(product); }}
                    className="absolute right-3 top-3 rounded-full bg-background/80 p-2 backdrop-blur-sm transition-colors hover:bg-background"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={isFav ? "var(--color-primary)" : "none"} stroke={isFav ? "var(--color-primary)" : "currentColor"} strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                  <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm text-foreground">
                    {product.category}
                  </span>
                </div>
                
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold text-foreground line-clamp-1">{product.name}</h3>
                  <p className="mt-1 text-lg font-bold text-primary">${product.price}</p>
                  
                  <button
                    onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                    className="mt-4 w-full rounded-full bg-primary/10 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
