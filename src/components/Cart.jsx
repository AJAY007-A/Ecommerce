import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartCount } = useCart();
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
 
    const calculatedTotal = cart.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
    setTotal(calculatedTotal);
  }, [cart]);

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate('/payment');
    }
  };

  if (cart.length === 0) {
    return (
      <section className={`${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-500 ease-out bg-white min-h-screen py-12 md:py-20`}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-900 tracking-tight mb-8">Shopping Cart</h1>
          <div className="text-center py-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D0D0D0"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-6"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <path d="M3 6h18"></path>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <p className="text-xl text-purple-600 mb-4">Your cart is empty</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Continue Shopping
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
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-500 ease-out bg-white min-h-screen py-12 md:py-20`}>
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 tracking-tight mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">

          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            {cart.map((item) => {
              const itemTotal = item.price * item.quantity;

              return (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-4 md:gap-6 p-4 md:p-6 border-2 border-purple-200 rounded-lg hover:shadow-lg hover:border-purple-300 transition-all duration-300 bg-gradient-to-r from-purple-50/50 to-pink-50/50"
                >

                  <Link
                    to={`/product/${item.id}`}
                    className="flex-shrink-0 w-full sm:w-32 md:w-40 h-40 sm:h-32 md:h-40 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg overflow-hidden"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link
                        to={`/product/${item.id}`}
                        className="text-lg md:text-xl font-semibold text-purple-800 hover:text-purple-900 transition-colors mb-2"
                      >
                        {item.title}
                      </Link>
                      <p className="text-base md:text-lg text-pink-600 font-semibold mb-3 md:mb-4">{formatPrice(item.price)}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
                      <div className="flex items-center gap-3">
                        <label className="text-purple-800 font-medium text-sm">Quantity:</label>
                        <div className="flex items-center border-2 border-purple-300 rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 md:px-4 py-1.5 md:py-2 text-purple-700 hover:bg-purple-100 active:bg-purple-200 transition-colors touch-manipulation"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="px-4 md:px-6 py-1.5 md:py-2 text-purple-900 font-medium min-w-[3rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 md:px-4 py-1.5 md:py-2 text-purple-700 hover:bg-purple-100 active:bg-purple-200 transition-colors touch-manipulation"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="text-left sm:text-right w-full sm:w-auto">
                        <p className="text-base md:text-lg font-semibold text-pink-600">
                          {formatPrice(itemTotal)}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm text-purple-600 hover:text-red-600 active:text-red-700 transition-colors mt-1 font-medium touch-manipulation"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-4 lg:top-6 bg-gradient-to-br from-purple-50 to-pink-50 p-4 md:p-6 rounded-lg border-2 border-purple-200">
              <h2 className="text-2xl font-bold text-purple-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-purple-700">
                  <span>Subtotal ({getCartCount()} items)</span>
                  <span className="font-semibold">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-purple-700">
                  <span>Shipping</span>
                  <span className="font-semibold text-pink-600">Free</span>
                </div>
                <div className="border-t-2 border-purple-300 pt-4 flex justify-between text-xl font-bold text-purple-900">
                  <span>Total</span>
                  <span className="text-pink-600">{formatPrice(total)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:scale-105 transition-all duration-300 mb-4"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="block w-full text-center px-6 py-3 text-purple-700 font-medium rounded-md hover:bg-purple-200 hover:text-purple-900 transition-all duration-300"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}