import React, { useEffect, useState } from 'react';

export default function Footer() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 60);
    return () => clearTimeout(t);
  }, []);

  const anim = (delayClass) =>
    (shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4') +
    ' transition-all duration-700 ease-out ' +
    delayClass;

  const linkHover = 'hover:text-purple-900 hover:underline transition-all duration-200';

  return (
    <footer className="bg-gradient-to-br from-purple-50 to-pink-50 text-purple-900">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 py-10 md:py-16 lg:py-20">

        <section className={anim('delay-75') + " mb-16 pb-16 border-b-2 border-purple-200"}>
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3 md:mb-4">
              JOIN THE LIST AND GET
              <br />
              <span className="bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">10% OFF YOUR FIRST ORDER</span>
            </h2>
            <p className="text-purple-700 text-sm md:text-base lg:text-lg mb-6 md:mb-8">
              Be the first to know about new arrivals, special events, and exclusive offers.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-purple-800">
                    First Name <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white border-2 border-purple-200 rounded-md px-4 py-2.5 text-purple-900 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-purple-800">
                    Last Name <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white border-2 border-purple-200 rounded-md px-4 py-2.5 text-purple-900 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-purple-800">
                  Email <span className="text-pink-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-white border-2 border-purple-200 rounded-md px-4 py-2.5 text-purple-900 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <label className="flex items-start gap-3 text-sm cursor-pointer">
                <input 
                  type="checkbox" 
                  className="mt-0.5 w-4 h-4 rounded border-purple-300 bg-white text-purple-600 focus:ring-2 focus:ring-purple-500" 
                />
                <span className="text-purple-700">
                  Yes, subscribe me to your newsletter for updates and exclusive offers.
                </span>
              </label>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">

          <section className={anim('delay-150')}>
            <h3 className="text-lg font-semibold mb-4 text-purple-900">LuxeLoom</h3>
            <p className="text-purple-700 text-sm leading-relaxed mb-4">
              Clothing that celebrates every woman's grace, strength, and style — because fashion should empower, not define.
            </p>
            <div className="space-y-2 text-sm text-purple-600">
              <p>San Francisco, CA 94158</p>
              <p>500 Terry Francine Street</p>
              <p className="pt-2">
                <a href="tel:+919363942349" className={linkHover}>+91 9363942349</a>
              </p>
              <p>
                <a href="mailto:ajaytvr928@gmail.com" className={linkHover}>ajaytvr928@gmail.com</a>
              </p>
            </div>
          </section>

          <section className={anim('delay-300')}>
            <h3 className="text-lg font-semibold mb-4 text-purple-900">Quick Links</h3>
            <nav className="space-y-2.5">
              <a href="/products" className={`block text-sm text-purple-700 ${linkHover}`}>All Products</a>
              <a href="/size-guide" className={`block text-sm text-purple-700 ${linkHover}`}>Size Guide</a>
              <a href="#" className={`block text-sm text-purple-700 ${linkHover}`}>About Us</a>
              <a href="#" className={`block text-sm text-purple-700 ${linkHover}`}>Contact</a>
              <a href="#" className={`block text-sm text-purple-700 ${linkHover}`}>FAQ</a>
            </nav>
          </section>

          <section className={anim('delay-[450ms]')}>
            <h3 className="text-lg font-semibold mb-4 text-purple-900">Legal</h3>
            <nav className="space-y-2.5">
              <a href="#" className={`block text-sm text-purple-700 ${linkHover}`}>Terms and Conditions</a>
              <a href="#" className={`block text-sm text-purple-700 ${linkHover}`}>Privacy Policy</a>
              <a href="#" className={`block text-sm text-purple-700 ${linkHover}`}>Shipping Policy</a>
              <a href="#" className={`block text-sm text-purple-700 ${linkHover}`}>Refund Policy</a>
              <a href="#" className={`block text-sm text-purple-700 ${linkHover}`}>Accessibility Statement</a>
            </nav>
          </section>

          <section className={anim('delay-[600ms]')}>
            <h3 className="text-lg font-semibold mb-4 text-purple-900">Follow Us</h3>
            <nav className="space-y-2.5">
              <a href="#" className={`block text-sm text-purple-700 ${linkHover}`}>Instagram</a>
              <a href="#" className={`block text-sm text-purple-700 ${linkHover}`}>Facebook</a>
              <a href="#" className={`block text-sm text-purple-700 ${linkHover}`}>Pinterest</a>
              <a href="#" className={`block text-sm text-purple-700 ${linkHover}`}>YouTube</a>
              <a href="#" className={`block text-sm text-purple-700 ${linkHover}`}>TikTok</a>
            </nav>
          </section>
        </div>

        <div className={anim('delay-[750ms]') + " pt-8 border-t-2 border-purple-200 text-center"}>
          <p className="text-sm text-purple-600">
            © {new Date().getFullYear()} LuxeLoom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}