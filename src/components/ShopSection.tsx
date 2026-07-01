"use client";

import Image from "next/image";
import { useStore } from "@/lib/StoreContext";
import { useToast } from "@/lib/ToastContext";
import { products } from "@/lib/products";
import { useReveal } from "@/lib/useReveal";

export default function ShopSection() {
  const { addToCart, toggleFavorite, favorites, addRecentlyViewed } = useStore();
  const { toast } = useToast();
  const { ref, revealed } = useReveal(0.1);

  return (
    <section id="shop" className="bg-card px-4 py-16 sm:py-24 relative overflow-hidden" ref={ref}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-1/4 right-1/2 translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-t from-secondary/5 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

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
                className={`group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-background transition-all duration-700 hover:border-primary/50 will-change-transform ${
                  revealed
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ 
                  transitionDelay: `${i * 100}ms`,
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 30px 60px rgba(124, 58, 237, 0.2), 0 0 40px rgba(124, 58, 237, 0.1)";
                  e.currentTarget.style.transform = "translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div className="relative aspect-square overflow-hidden bg-image-bg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <button 
                    onClick={(e) => { e.stopPropagation(); toggleFavorite(product); toast(isFav ? "Removed from favorites" : "Added to favorites"); }}
                    className="absolute right-3 top-3 rounded-full bg-background/90 backdrop-blur-md p-2.5 transition-all hover:bg-background hover:shadow-lg hover:shadow-primary/30 transform scale-100 hover:scale-110 active:scale-95"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={isFav ? "var(--color-primary)" : "none"} stroke={isFav ? "var(--color-primary)" : "currentColor"} strokeWidth="2" className="transition-colors duration-300">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                  <span className="absolute left-3 top-3 rounded-full bg-background/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground shadow-sm">
                    {product.category}
                  </span>
                </div>
                
                <div className="flex flex-1 flex-col p-6 relative z-10">
                  <h3 className="font-semibold text-foreground line-clamp-1 transition-colors duration-300 group-hover:text-primary">{product.name}</h3>
                  <p className="mt-2 text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">${product.price}</p>
                  
                  <button
                    onClick={(e) => { e.stopPropagation(); addToCart(product); toast(`${product.name} added to cart`); }}
                    className="mt-4 w-full rounded-xl bg-gradient-to-r from-primary/80 to-secondary/80 py-3 text-sm font-bold text-white transition-all duration-300 hover:from-primary hover:to-secondary hover:shadow-lg hover:shadow-primary/30 active:scale-95 relative overflow-hidden group/btn"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
                    <span className="relative">Add to Cart</span>
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
