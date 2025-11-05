import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products, formatPrice } from "../data/products";
import { useWishlist } from "../context/WishlistContext";

export default function ProductsGrid() {
  const [isMounted, setIsMounted] = useState(false);
  const { toggleWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="products" className="bg-white">
      <div
        className={`${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} max-w-7xl mx-auto px-6 py-16 transition-all duration-500 ease-out`}
      >
        <h3 className="text-purple-900 text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide mb-6 md:mb-8">All Products</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {products.map((p) => (
            <div key={p.id} className="group relative">
              <div className="relative w-full aspect-[3/4] md:aspect-[320/610] bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden rounded-lg">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ease-in-out p-1 sm:p-2 group-hover:opacity-0" 
                />
                <img 
                  src={p.hoverImg} 
                  alt={p.title} 
                  className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 p-1 sm:p-2" 
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-purple-500/30 to-pink-500/30 z-10">
                  <Link
                    to={`/product/${p.id}`}
                    className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-base bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md hover:from-purple-700 hover:to-pink-700 hover:shadow-lg active:scale-95 transition-all duration-300 touch-manipulation"
                  >
                    Buy Now
                  </Link>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleWishlist(p);
                  }}
                  className="absolute top-2 right-2 md:top-3 md:right-3 z-20 p-1.5 md:p-2 bg-white/90 rounded-full hover:bg-white active:scale-95 transition-all duration-300 shadow-md touch-manipulation"
                  aria-label={isInWishlist(p.id) ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="md:w-[22px] md:h-[22px]"
                    fill={isInWishlist(p.id) ? "#EC4899" : "none"}
                    stroke={isInWishlist(p.id) ? "#EC4899" : "#9333EA"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/>
                  </svg>
                </button>
              </div>
              <div className="mt-2 md:mt-3 text-sm md:text-base text-purple-700 hover:text-purple-900 transition-colors font-medium line-clamp-2">{p.title}</div>
              <div className="text-sm md:text-base text-pink-600 font-semibold">{formatPrice(p.price)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}