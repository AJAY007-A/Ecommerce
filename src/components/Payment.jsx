import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';

export default function Payment() {
  const { cart, clearCart, getCartCount } = useCart();
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (cart.length === 0) {
      const timeout = setTimeout(() => {
        navigate('/products');
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsMounted(true);
    }
  }, [cart.length, navigate]);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required';
    if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
    if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required';
    if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required';
    if (!formData.nameOnCard.trim()) newErrors.nameOnCard = 'Name on card is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      clearCart();
      navigate('/payment/success');
    }
  };

  if (!isMounted || cart.length === 0) {
    return null;
  }

  const total = calculateTotal();

  return (
    <section className={`${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-500 ease-out bg-white min-h-screen py-12 md:py-20`}>
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to="/cart"
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
          Back to Cart
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 tracking-tight mb-6 md:mb-8">
              Payment Details
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 md:p-6 rounded-lg border-2 border-purple-200">
                <h2 className="text-lg md:text-xl font-semibold text-purple-900 mb-4 md:mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-purple-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                        errors.name ? 'border-red-500' : 'border-purple-300'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-purple-800 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C6C6C] transition-all ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-purple-800 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C6C6C] transition-all ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+91 1234567890"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-purple-800 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C6C6C] transition-all ${
                        errors.city ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Mumbai"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-purple-800 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C6C6C] transition-all ${
                        errors.address ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Street address, apartment, suite, etc."
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-purple-800 mb-2">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C6C6C] transition-all ${
                        errors.zipCode ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="400001"
                    />
                    {errors.zipCode && (
                      <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 md:p-6 rounded-lg border-2 border-purple-200">
                <h2 className="text-lg md:text-xl font-semibold text-purple-900 mb-4 md:mb-6">Payment Information</h2>
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-purple-800 mb-2">
                      Name on Card *
                    </label>
                    <input
                      type="text"
                      name="nameOnCard"
                      value={formData.nameOnCard}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C6C6C] transition-all ${
                        errors.nameOnCard ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="JOHN DOE"
                    />
                    {errors.nameOnCard && (
                      <p className="text-red-500 text-sm mt-1">{errors.nameOnCard}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-purple-800 mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      maxLength="19"
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C6C6C] transition-all ${
                        errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="1234 5678 9012 3456"
                    />
                    {errors.cardNumber && (
                      <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-purple-800 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        maxLength="5"
                        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C6C6C] transition-all ${
                          errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.expiryDate && (
                        <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-purple-800 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        maxLength="4"
                        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C6C6C] transition-all ${
                          errors.cvv ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="123"
                      />
                      {errors.cvv && (
                        <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md hover:from-purple-700 hover:to-pink-700 hover:shadow-lg active:scale-95 transition-all duration-300 touch-manipulation"
              >
                Complete Payment
              </button>
            </form>
          </div>

          <div className="lg:col-span-1 order-first lg:order-last">
            <div className="sticky top-4 lg:top-6 bg-gradient-to-br from-purple-50 to-pink-50 p-4 md:p-6 rounded-lg border-2 border-purple-200 mb-6 lg:mb-0">
              <h2 className="text-xl md:text-2xl font-bold text-purple-900 mb-4 md:mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {cart.map((item) => {
                  const itemTotal = item.price * item.quantity;
                  return (
                    <div key={item.id} className="flex gap-3 pb-4 border-b-2 border-purple-200">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-16 h-16 object-contain rounded-md bg-gradient-to-br from-purple-50 to-pink-50 p-1"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-purple-800">{item.title}</p>
                        <p className="text-xs text-purple-600">Qty: {item.quantity}</p>
                        <p className="text-sm font-semibold text-pink-600 mt-1">
                          {formatPrice(itemTotal)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-4 pt-4 border-t-2 border-purple-300">
                <div className="flex justify-between text-purple-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-purple-700">
                  <span>Shipping</span>
                  <span className="font-semibold text-pink-600">Free</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-purple-900 pt-2 border-t-2 border-purple-300">
                  <span>Total</span>
                  <span className="text-pink-600">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}