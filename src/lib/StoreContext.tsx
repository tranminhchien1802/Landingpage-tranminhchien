"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "./products";

type CartItem = Product & { quantity: number };

interface StoreContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  recentlyViewed: Product[];
  addRecentlyViewed: (product: Product) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const STORE_VERSION = 2;

  // Load from local storage on mount
  useEffect(() => {
    try {
      const ver = localStorage.getItem("aero_store_version");
      if (ver !== String(STORE_VERSION)) {
        localStorage.removeItem("aero_cart");
        localStorage.removeItem("aero_favorites");
        localStorage.removeItem("aero_recently_viewed");
        localStorage.setItem("aero_store_version", String(STORE_VERSION));
      } else {
        const savedCart = localStorage.getItem("aero_cart");
        const savedFavs = localStorage.getItem("aero_favorites");
        const savedRecents = localStorage.getItem("aero_recently_viewed");

        if (savedCart) setCart(JSON.parse(savedCart));
        if (savedFavs) setFavorites(JSON.parse(savedFavs));
        if (savedRecents) setRecentlyViewed(JSON.parse(savedRecents));
      }
    } catch (e) {
      console.error("Failed to load store data", e);
    }
    setIsLoaded(true);
  }, []);

  // Save to local storage on change
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem("aero_cart", JSON.stringify(cart));
    localStorage.setItem("aero_favorites", JSON.stringify(favorites));
    localStorage.setItem("aero_recently_viewed", JSON.stringify(recentlyViewed));
  }, [cart, favorites, recentlyViewed, isLoaded]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => setCart([]);

  const toggleFavorite = (product: Product) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev.filter((item) => item.id !== product.id);
      return [...prev, product];
    });
  };

  const addRecentlyViewed = (product: Product) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((item) => item.id !== product.id);
      return [product, ...filtered].slice(0, 10); // Keep last 10
    });
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        favorites,
        toggleFavorite,
        recentlyViewed,
        addRecentlyViewed,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
