import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "Shipping & Delivery",
    icon: "",
    items: [
      { q: "How long does shipping take?", a: "Standard shipping takes 5-7 business days. Express shipping (2-3 days) is available at checkout for an additional fee." },
      { q: "Do you ship internationally?", a: "Currently, we ship within India. International shipping options will be available soon. Sign up for our newsletter to be notified!" },
      { q: "What are the shipping costs?", a: "Free shipping on orders over ₹2,000. For orders below ₹2,000, standard shipping is ₹99. Express shipping is ₹199." },
      { q: "Can I track my order?", a: "Yes! Once your order ships, you'll receive a tracking number via email. You can track your package in real-time using the link provided." }
    ]
  },
  {
    category: "Returns & Exchanges",
    icon: "",
    items: [
      { q: "What is your return policy?", a: "We offer hassle-free returns within 30 days of delivery. Items must be unworn, unwashed, and in original condition with tags attached." },
      { q: "How do I initiate a return?", a: "Go to your order history, select the item you want to return, and click 'Start Return'. Follow the prompts to generate a return label." },
      { q: "Are returns free?", a: "Yes, returns are free for all orders. We provide a prepaid return label that you can print at home." },
      { q: "How long do refunds take?", a: "Once we receive your return, refunds are processed within 5-7 business days and will appear in your original payment method." }
    ]
  },
  {
    category: "Sizing & Fit",
    icon: "",
    items: [
      { q: "How do I find my size?", a: "Check our Size Guide page for detailed measurements. We recommend measuring yourself and comparing with our size chart for the best fit." },
      { q: "What if the size doesn't fit?", a: "No worries! Simply return the item within 30 days and exchange it for a different size. Exchanges are free and easy." },
      { q: "Do you offer size recommendations?", a: "Yes! Our customer service team can help you find the perfect size. Contact us with your measurements and we'll guide you." },
      { q: "Are sizes true to size?", a: "Our sizes generally run true to standard Indian sizing. Check individual product pages for specific fit notes (e.g., 'runs small' or 'oversized fit')." }
    ]
  },
  {
    category: "Orders & Payment",
    icon: "",
    items: [
      { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, UPI, net banking, and cash on delivery (COD) for orders above ₹500." },
      { q: "Is my payment information secure?", a: "Absolutely! We use industry-standard encryption and never store your full payment details. All transactions are processed securely." },
      { q: "Can I modify my order after placing it?", a: "Orders can be modified within 1 hour of placement. After that, please contact customer service and we'll try to accommodate your request." },
      { q: "Do you offer gift wrapping?", a: "Yes! Gift wrapping is available at checkout for ₹99. We'll wrap your order beautifully with a personalized message if requested." }
    ]
  },
  {
    category: "Product Care",
    icon: "",
    items: [
      { q: "How should I care for my clothing?", a: "Care instructions are listed on each product page. Most items are machine washable in cold water. Always check the care label before washing." },
      { q: "Can I dry clean these items?", a: "Most items can be dry cleaned. Check the care label for specific instructions. When in doubt, gentle hand washing is always safe." },
      { q: "Do you offer care products?", a: "We recommend using gentle, color-safe detergents and avoiding bleach. Store items properly to maintain their shape and quality." }
    ]
  },
  {
    category: "General",
    icon: "",
    items: [
      { q: "How can I contact customer service?", a: "Reach us via email at ajaytvr928@gmail.com, call us at +91 9363942349, or use our Contact page. We typically respond within 24 hours." },
      { q: "Do you have physical stores?", a: "Currently, we're online-only. We're working on opening physical stores in major cities soon. Stay tuned!" },
      { q: "How do I subscribe to your newsletter?", a: "Scroll to the bottom of any page and enter your email in the newsletter signup form. You'll get 10% off your first order!" },
      { q: "Do you offer student discounts?", a: "Yes! Students get 15% off with a valid student ID. Contact customer service to verify and get your discount code." }
    ]
  }
];

export default function FAQ() {
  const [isMounted, setIsMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  const filteredFAQs = faqs
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.q.toLowerCase().includes(search.toLowerCase()) ||
          item.a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  const toggleOpen = (catIndex, itemIndex) => {
    const key = `${catIndex}-${itemIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  const displayCategories =
    activeCategory === null
      ? filteredFAQs
      : filteredFAQs.filter((_, idx) => {
          const originalIdx = faqs.findIndex(
            (f) => f.category === filteredFAQs[idx]?.category
          );
          return originalIdx === activeCategory;
        });

  return (
    <main
      className={`min-h-screen bg-gradient-to-b from-white to-purple-50 ${
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } transition-all duration-500 ease-out`}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* Header */}
        <section className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg mb-4">
            <span className="text-3xl md:text-4xl">❓</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-900 mb-3 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-purple-700 text-base md:text-lg max-w-2xl mx-auto">
            Find answers to common questions about shopping, shipping, returns, and more
          </p>
        </section>

        {/* Search Bar */}
        <section className="mb-8 md:mb-12">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for questions..."
              className="w-full px-6 py-4 pl-14 pr-14 rounded-2xl border-2 border-purple-200 bg-white/90 backdrop-blur focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-500/20 text-purple-900 placeholder-purple-400 transition-all shadow-lg"
            />
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-purple-500">
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
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </span>
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-600 transition-colors"
                aria-label="Clear search"
              >
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
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        </section>

        {/* Category Pills */}
        <section className="mb-8 md:mb-12">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === null
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                  : "bg-white text-purple-700 border-2 border-purple-200 hover:border-purple-300 hover:shadow-md"
              }`}
            >
              All Categories
            </button>
            {faqs.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeCategory === idx
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                    : "bg-white text-purple-700 border-2 border-purple-200 hover:border-purple-300 hover:shadow-md"
                }`}
              >
                {cat.icon} {cat.category}
              </button>
            ))}
          </div>
        </section>

        {/* FAQ Accordions */}
        <section className="space-y-4 md:space-y-6">
          {displayCategories.map((category, catIdx) => {
            const actualCatIndex = faqs.findIndex(
              (c) => c.category === category.category
            );
            return (
              <div
                key={actualCatIndex}
                className="bg-white/80 backdrop-blur rounded-2xl shadow-lg border border-purple-100 overflow-hidden"
              >
                {/* Category Header */}
                <div className="px-6 md:px-8 py-4 md:py-5 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
                  <h2 className="text-lg md:text-xl font-bold text-purple-900 flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    {category.category}
                    <span className="ml-auto text-sm font-normal text-purple-600">
                      ({category.items.length})
                    </span>
                  </h2>
                </div>

                {/* Questions */}
                <div className="divide-y divide-purple-100">
                  {category.items.map((item, itemIndex) => {
                    const key = `${actualCatIndex}-${itemIndex}`;
                    const isOpen = openIndex === key;
                    return (
                      <div key={itemIndex} className="transition-all duration-300">
                        <button
                          onClick={() => toggleOpen(actualCatIndex, itemIndex)}
                          className="w-full px-6 md:px-8 py-4 md:py-5 text-left flex items-center justify-between gap-4 hover:bg-purple-50/50 transition-colors group"
                        >
                          <span
                            className={`flex-1 font-semibold text-purple-900 text-sm md:text-base pr-4 ${
                              isOpen ? "text-purple-700" : ""
                            }`}
                          >
                            {item.q}
                          </span>
                          <span
                            className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-purple-600"
                            >
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </span>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 md:px-8 pb-4 md:pb-5 pt-0">
                            <p className="text-purple-700 text-sm md:text-base leading-relaxed">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>

        {/* Still Have Questions CTA */}
        <section className="mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Still have questions?
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">
              Our customer service team is here to help! Reach out anytime and we'll get back to you within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 bg-white text-purple-700 font-semibold rounded-lg hover:bg-purple-50 hover:shadow-lg active:scale-95 transition-all duration-300"
            >
              Contact Us
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
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

