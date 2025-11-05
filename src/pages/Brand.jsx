import React, { useEffect, useRef, useState } from "react";
import img1 from "../components/asset/image7.avif";
import img2 from "../components/asset/image2.avif";
import img3 from "../components/asset/image3.avif";

function InView({ children, className = "", delayMs = 0, fromClass, toClass }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      });
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const from = fromClass ?? "opacity-0 translate-y-6";
  const to = toClass ?? "opacity-100 translate-y-0";
  return (
    <div ref={ref} className={(shown ? to : from) + " transition-all duration-700 ease-out " + className} style={{ transitionDelay: `${delayMs}ms` }}>
      {children}
    </div>
  );
}

export default function Brand() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(t);
  }, []);
  return (
    <main className="bg-white">
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <InView>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-900 mb-4 md:mb-6 tracking-tight animate-fade-in-up">About Our Brand</h1>
              <p className="text-base sm:text-lg md:text-xl text-purple-800 leading-relaxed mb-4 md:mb-6">Clothing that celebrates every woman's grace, strength, and style — because fashion should empower, not define.</p>
              <p className="text-sm sm:text-base md:text-lg text-purple-700 leading-relaxed">This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
            </div>
          </InView>
          <InView delayMs={200} fromClass="opacity-0 scale-95" toClass="opacity-100 scale-100">
            <div className="max-w-4xl mx-auto mt-12">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg hover:shadow-xl transition-shadow duration-500">
                <img src={img1} alt="LuxeLoom Brand" className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </InView>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <InView delayMs={100} fromClass="opacity-0 translate-x-[-20px]" toClass="opacity-100 translate-x-0">
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500">
                <img src={img2} alt="LuxeLoom Product" className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500" />
              </div>
            </InView>
            <InView delayMs={250} fromClass="opacity-0 translate-x-[20px]" toClass="opacity-100 translate-x-0">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-900 tracking-tight animate-fade-in-up">The Mission</h2>
                <p className="text-base md:text-lg text-purple-800 leading-relaxed">Our mission is to empower women through fashion that reflects confidence, individuality, and elegance. We create high-quality, comfortable dresses that celebrate every woman’s unique style. By combining modern design with inclusivity and sustainability, we strive to make every woman feel beautiful, inspired, and confident in her own skin.</p>
                <p className="text-base md:text-lg text-purple-700 leading-relaxed">We focus on quality, comfort, and creativity to offer fashion that inspires self-expression. Through exceptional service and thoughtful design, we aim to bring joy and confidence to every customer’s wardrobe.</p>
                </div>
            </InView>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <InView delayMs={100} fromClass="opacity-0 translate-x-[-20px]" toClass="opacity-100 translate-x-0">
              <div className="space-y-6 order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-purple-900 tracking-tight animate-fade-in-up">Our Vision</h2>
                <p className="text-base md:text-lg text-purple-800 leading-relaxed">Our vision is to become a globally trusted women’s fashion brand recognized for creativity, inclusivity, and integrity. We aim to redefine fashion as a source of empowerment and self-expression, creating sustainable designs that celebrate diversity and inspire confidence, beauty, and strength in every woman, everywhere.</p>
                <p className="text-base md:text-lg text-purple-700 leading-relaxed">We aspire to become a leading dress brand that blends timeless style with modern values, empowering women everywhere to express their true selves through clothing that radiates beauty, strength, and sophistication.</p>
              </div>
            </InView>
            <InView delayMs={250} fromClass="opacity-0 translate-x-[20px]" toClass="opacity-100 translate-x-0">
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 order-1 lg:order-2">
                <img src={img3} alt="LuxeLoom Vision" className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500" />
              </div>
            </InView>
          </div>
        </div>
      </section>
    </main>
  );
}




