import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Nav() {
  const { getCartCount } = useCart();
  const { getWishlistCount } = useWishlist();
  const cartCount = getCartCount();
  const wishlistCount = getWishlistCount();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="w-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-center text-sm md:text-base py-2 px-4 font-medium">
        15% off site-wide! use promo code LOVE15
      </div>
      <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-white">
        <Link to="/" className="text-purple-900 text-xl md:text-2xl tracking-wide font-logo font-bold no-underline hover:text-pink-600 transition-colors">
         LuxeLoom
        </Link>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          <Link to="/products" className="text-base xl:text-lg text-purple-700 no-underline hover:text-pink-600 transition-colors font-medium">All Products</Link>
          <Link to="/size-guide" className="text-base xl:text-lg text-purple-700 no-underline hover:text-pink-600 transition-colors font-medium">Size Guide</Link>
          <Link to="/brand" className="text-base xl:text-lg text-purple-700 no-underline hover:text-pink-600 transition-colors font-medium">Our Brand</Link>
          <Link to="/contact" className="text-base xl:text-lg text-purple-700 no-underline hover:text-pink-600 transition-colors font-medium">Contact</Link>
        </nav>


        <div className="flex items-center gap-3 md:gap-5">
          <Link to="/login" className="hidden sm:block text-sm md:text-lg text-purple-700 no-underline hover:text-pink-600 transition-colors font-medium">Log In</Link>


          <Link to="/wishlist" aria-label="Wishlist" className="relative p-1.5 hover:scale-110 transition-transform">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="md:w-[22px] md:h-[22px]"><path fill="#EC4899" className="hover:fill-purple-600 transition-colors" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/></svg>
           {wishlistCount > 0 && (
             <span className="absolute -right-1 md:-right-2 -top-1 text-xs text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full w-4 h-4 md:w-5 md:h-5 inline-flex items-center justify-center font-semibold text-[10px] md:text-xs">
               {wishlistCount}
             </span>
           )}
          </Link>


          <Link to="/cart" aria-label="Cart" className="relative p-1.5 hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="md:w-[22px] md:h-[22px]"><path fill="#9333EA" className="hover:fill-pink-600 transition-colors" d="M12 13a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2a5 5 0 0 1-5 5m0-10a3 3 0 0 1 3 3H9a3 3 0 0 1 3-3m7 3h-2a5 5 0 0 0-5-5a5 5 0 0 0-5 5H5c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z"/></svg>
            {cartCount > 0 && (
              <span className="absolute -right-1 md:-right-2 -top-1 text-xs text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-full w-4 h-4 md:w-5 md:h-5 inline-flex items-center justify-center font-semibold text-[10px] md:text-xs">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-purple-700 hover:text-pink-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-purple-200 bg-white animate-fade-in-up">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <Link
              to="/products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base text-purple-700 no-underline hover:text-pink-600 transition-colors font-medium py-2"
            >
              All Products
            </Link>
            <Link
              to="/size-guide"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base text-purple-700 no-underline hover:text-pink-600 transition-colors font-medium py-2"
            >
              Size Guide
            </Link>
            <Link
              to="/brand"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base text-purple-700 no-underline hover:text-pink-600 transition-colors font-medium py-2"
            >
              Our Brand
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base text-purple-700 no-underline hover:text-pink-600 transition-colors font-medium py-2"
            >
              Contact
            </Link>
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base text-purple-700 no-underline hover:text-pink-600 transition-colors font-medium py-2"
            >
              Log In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}