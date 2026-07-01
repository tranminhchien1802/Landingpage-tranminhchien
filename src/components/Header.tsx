"use client";

import Image from "next/image";
import { useState } from "react";
import { useStore } from "@/lib/StoreContext";
import { useToast } from "@/lib/ToastContext";
import { useTheme } from "@/lib/ThemeContext";
import CheckoutModal from "./CheckoutModal";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Specs", href: "#specs" },
  { label: "Shop", href: "#shop" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [favOpen, setFavOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  
  const { cart, removeFromCart, favorites, toggleFavorite } = useStore();
  const { toast } = useToast();
  const { theme, toggleTheme } = useTheme();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const favCount = favorites.length;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="text-xl font-bold tracking-tight text-foreground">
            AeroSpike<span className="text-primary"> Pro</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Favorites Icon */}
            <button 
              onClick={() => setFavOpen(true)}
              className="relative p-2 text-muted hover:text-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {favCount > 0 && (
                <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                  {favCount}
                </span>
              )}
            </button>

            {/* Cart Icon */}
            <button 
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-muted hover:text-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-muted hover:text-primary transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <button
              className="md:hidden ml-2 text-foreground"
              onClick={() => setOpen(!open)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="border-t border-border bg-background px-4 pb-6 pt-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Cart Slide-out */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-background p-6 shadow-2xl h-full flex flex-col animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button onClick={() => setCartOpen(false)} className="p-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-muted">Your cart is empty.</p>
              ) : (
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li key={item.id} className="flex gap-4 border-b border-border pb-4">
                      <Image src={item.image} alt={item.name} width={64} height={64} className="object-cover rounded-md" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{item.name}</h4>
                        <p className="text-muted text-sm">${item.price} x {item.quantity}</p>
                      </div>
                      <button onClick={() => { removeFromCart(item.id); toast(`${item.name} removed from cart`, "error"); }} className="text-red-500 text-sm h-fit">Remove</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {cart.length > 0 && (
              <div className="pt-6 border-t border-border mt-auto">
                <div className="flex justify-between font-bold text-lg mb-4">
                  <span>Total</span>
                  <span>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
                </div>
                <button onClick={() => { setCartOpen(false); setCheckoutOpen(true); }} className="w-full bg-primary text-white py-3 rounded-full font-bold hover:bg-primary-dark transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Favorites Slide-out */}
      {favOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-background p-6 shadow-2xl h-full flex flex-col animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Favorites</h2>
              <button onClick={() => setFavOpen(false)} className="p-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {favorites.length === 0 ? (
                <p className="text-muted">No favorites yet.</p>
              ) : (
                <ul className="space-y-4">
                  {favorites.map((item) => (
                    <li key={item.id} className="flex gap-4 border-b border-border pb-4">
                      <Image src={item.image} alt={item.name} width={64} height={64} className="object-cover rounded-md" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{item.name}</h4>
                        <p className="text-muted text-sm">${item.price}</p>
                      </div>
                      <button onClick={() => { toggleFavorite(item); toast(`${item.name} removed from favorites`, "error"); }} className="text-red-500 text-sm h-fit">Remove</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      {checkoutOpen && <CheckoutModal onClose={() => setCheckoutOpen(false)} />}
    </>
  );
}
