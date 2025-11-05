import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { getProductById, formatPrice } from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const foundProduct = getProductById(id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.img);
      setIsMounted(true);
    } else {
      const timeout = setTimeout(() => {
        navigate('/products');
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [id, navigate]);

  const handleBuyNow = () => {
    if (product) {
      addToCart({ ...product, quantity });
      navigate('/payment');
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
    }
  };

  if (!product) {
    return null;
  }

  return (
    <section className={`${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-500 ease-out bg-white min-h-screen pb-24 sm:pb-10 pt-12 md:pt-20`}>
      <div className="max-w-7xl mx-auto px-6">

        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors mb-8 font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16">

          <div className="space-y-4">
            <div className="relative aspect-[4/5] bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden rounded-lg">
              <img
                src={selectedImage}
                alt={product.title}
                className="w-full h-full object-contain p-4"
              />

              <button
                onClick={() => toggleWishlist(product)}
                className="absolute top-4 right-4 p-3 bg-white/90 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg z-10"
                aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={isInWishlist(product.id) ? "#EC4899" : "none"}
                  stroke={isInWishlist(product.id) ? "#EC4899" : "#9333EA"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-300"
                >
                  <path d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/>
                </svg>
              </button>
             </div>
            <div className="flex gap-2 md:gap-3 overflow-x-auto no-scrollbar pb-1">
              <button
                onClick={() => setSelectedImage(product.img)}
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden border-2 transition-all bg-gradient-to-br from-purple-50 to-pink-50 active:scale-95 touch-manipulation ${
                  selectedImage === product.img
                    ? 'border-purple-600 shadow-md'
                    : 'border-transparent hover:border-purple-300'
                }`}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-contain p-1"
                />
              </button>
              {product.hoverImg && (
                <button
                  onClick={() => setSelectedImage(product.hoverImg)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden border-2 transition-all bg-gradient-to-br from-purple-50 to-pink-50 active:scale-95 touch-manipulation ${
                    selectedImage === product.hoverImg
                      ? 'border-purple-600 shadow-md'
                      : 'border-transparent hover:border-purple-300'
                  }`}
                >
                  <img
                    src={product.hoverImg}
                    alt={product.title}
                    className="w-full h-full object-contain p-1"
                  />
                </button>
              )}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 tracking-tight">
              {product.title}
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-pink-600 mt-2">
              {formatPrice(product.price)}
            </div>

            <p className="text-base md:text-lg text-purple-700 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3 md:gap-4">
              <label className="text-purple-800 font-medium text-sm md:text-base">Quantity:</label>
              <div className="flex items-center border-2 border-purple-300 rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 md:px-4 py-2 text-purple-700 hover:bg-purple-100 active:bg-purple-200 transition-colors touch-manipulation text-lg"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="px-4 md:px-6 py-2 text-purple-900 font-medium min-w-[2.5rem] md:min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 md:px-4 py-2 text-purple-700 hover:bg-purple-100 active:bg-purple-200 transition-colors touch-manipulation text-lg"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hidden sm:flex flex-col gap-3 sm:gap-4 pt-4">
              <button
                onClick={handleBuyNow}
                className="w-full px-6 md:px-8 py-3.5 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md hover:from-purple-700 hover:to-pink-700 hover:shadow-lg active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                Buy Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-5 md:h-5"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
              <button
                onClick={handleAddToCart}
                className="w-full px-6 md:px-8 py-3.5 md:py-4 bg-gradient-to-r from-pink-200 to-purple-200 text-purple-800 font-semibold rounded-md hover:from-pink-300 hover:to-purple-300 hover:shadow-md active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                Add to Cart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-5 md:h-5"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </button>
            </div>

            {/* Mobile sticky action bar */}
            <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-purple-200 px-4 py-3 flex gap-2">
              <button
                onClick={handleAddToCart}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-pink-200 to-purple-200 text-purple-800 font-semibold rounded-md hover:from-pink-300 hover:to-purple-300 active:scale-95 transition-all duration-300 text-sm"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md hover:from-purple-700 hover:to-pink-700 active:scale-95 transition-all duration-300 text-sm"
              >
                Buy Now
              </button>
            </div>

            {/* Additional Info */}
            <div className="pt-8 border-t-2 border-purple-200 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Shipping & Returns</h3>
                <p className="text-sm text-purple-600">
                  Free shipping on orders over Rs. 2,000. Easy returns within 30 days.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Care Instructions</h3>
                <p className="text-sm text-purple-600">
                  Machine wash cold. Do not bleach. Tumble dry low. Iron on low heat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

