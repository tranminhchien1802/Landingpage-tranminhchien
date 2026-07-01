"use client";

import Image from "next/image";
import { useStore } from "@/lib/StoreContext";
import { useToast } from "@/lib/ToastContext";
import { useReveal } from "@/lib/useReveal";

export default function RecentlyViewed() {
  const { recentlyViewed, toggleFavorite, favorites, addToCart } = useStore();
  const { toast } = useToast();
  const { ref, revealed } = useReveal(0.1);

  return (
    <section className={`border-t border-border bg-background px-4 py-16 ${recentlyViewed.length === 0 ? "hidden" : ""}`} ref={ref}>
      <div className="mx-auto max-w-7xl">
        <h2 
          className={`text-2xl font-bold transition-all duration-700 ${
            revealed ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
        >
          Recently Viewed
        </h2>
        
        <div 
          className={`mt-8 flex gap-6 overflow-x-auto pb-4 custom-scrollbar transition-all duration-700 ${
            revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {recentlyViewed.map((product) => {
            const isFav = favorites.some((f) => f.id === product.id);
            return (
              <div key={product.id} className="min-w-[240px] max-w-[240px] flex-shrink-0 group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30">
                <div className="relative aspect-square overflow-hidden bg-image-bg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="240px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col p-4">
                  <h3 className="font-semibold text-sm line-clamp-1">{product.name}</h3>
                  <p className="mt-1 text-sm font-bold text-primary">${product.price}</p>
                  
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => { addToCart(product); toast(`${product.name} added to cart`); }}
                      className="flex-1 rounded-md bg-foreground py-1.5 text-xs font-semibold text-background transition-colors hover:bg-primary"
                    >
                      Add
                    </button>
                    <button 
                      onClick={() => { const removed = favorites.some(f => f.id === product.id); toggleFavorite(product); toast(removed ? "Removed from favorites" : "Added to favorites"); }}
                      className="flex items-center justify-center rounded-md border border-border px-3 transition-colors hover:bg-muted/10"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill={isFav ? "var(--color-primary)" : "none"} stroke={isFav ? "var(--color-primary)" : "currentColor"} strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
