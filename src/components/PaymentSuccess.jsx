import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PaymentSuccess() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className={`${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-500 ease-out bg-white min-h-screen py-12 md:py-20`}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 tracking-tight mb-4">
            Payment Successful!
          </h1>
          <p className="text-lg text-purple-700 mb-8">
            Thank you for your purchase. Your order has been confirmed and you will receive an email confirmation shortly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Continue Shopping
          </Link>
          <Link
            to="/"
            className="px-8 py-3 bg-gradient-to-r from-pink-200 to-purple-200 text-purple-800 font-semibold rounded-md hover:from-pink-300 hover:to-purple-300 hover:shadow-md hover:scale-105 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}