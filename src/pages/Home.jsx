import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import left from "../components/asset/image10.avif";
import center from "../components/asset/image11.avif";
import right from "../components/asset/image9.avif";
import heroImg from "../components/asset/image13.avif";
import { products, formatPrice } from "../data/products";

function LoomHeroSection() {
  const [shown, setShown] = useState(false);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setShown(true), 60);
    return () => clearTimeout(t);
  }, []);
  // mobile auto-rotate between the three images
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % 3);
    }, 3000);
    return () => clearInterval(id);
  }, []);
  const anim = (delayClass) =>
    (shown ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm") +
    " transform-gpu transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] " +
    delayClass;
  return (
    <section className="bg-white">
      {/* Mobile carousel */}
      <div className="md:hidden relative overflow-hidden min-h-[420px] h-[70vh] max-h-[700px]">
        {/* images */}
        {[left, right, center].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={idx === 0 ? 'Left Denim' : idx === 1 ? 'Center Denim' : 'Right Denim'}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${current === idx ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        {/* overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-gradient-to-b from-purple-900/40 to-pink-900/40">
          <h1 className={anim("delay-[100ms]") + " text-3xl sm:text-4xl font-extrabold tracking-wide leading-tight drop-shadow-lg"}>
            THE GRACE
            <br />
            EDIT
          </h1>
          <p className={anim("delay-[280ms]") + " mt-2 text-base sm:text-lg drop-shadow-md"}>Now In Stores</p>
          <Link to="/products" className={anim("delay-[420ms]") + " mt-4 inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:scale-105 transition-all duration-300"}>
            Shop Collection
          </Link>
        </div>
        {/* dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {[0,1,2].map((i) => (
            <span key={i} className={`w-2 h-2 rounded-full ${current === i ? 'bg-white' : 'bg-white/60'}`}></span>
          ))}
        </div>
      </div>

      {/* Desktop triple images */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-0">
        {/* Hide left image on small screens for better mobile experience */}
        <div className="relative overflow-hidden md:h-[600px] lg:h-[700px] md:w-full md:max-w-[510px] md:mx-auto group animate-fade-in-left">
          <img src={left} alt="Left Denim" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        {/* Center image shown on all screens with comfortable mobile height */}
        <div className="relative overflow-hidden md:h-[600px] lg:h-[700px] md:w-full md:max-w-[510px] md:mx-auto">
          <img src={right} alt="Center Denim" className="h-full w-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 md:px-6 bg-gradient-to-b from-purple-900/40 to-pink-900/40">
            <h1 className={anim("delay-[100ms]") + " text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide leading-tight drop-shadow-lg"}>
              THE GRACE
              <br />
              EDIT
            </h1>
            <p className={anim("delay-[280ms]") + " mt-2 md:mt-4 text-base sm:text-lg md:text-xl drop-shadow-md"}>Now In Stores</p>
            <Link to="/products" className={anim("delay-[420ms]") + " mt-4 md:mt-8 inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:scale-105 transition-all duration-300"}>
              Shop Collection
            </Link>
          </div>
        </div>
        {/* Hide right image on small screens for better mobile experience */}
        <div className="relative overflow-hidden md:h-[600px] lg:h-[700px] md:w-full md:max-w-[510px] md:mx-auto group animate-fade-in-right">
          <img src={center} alt="Right Denim" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
      </div>
    </section>
  );
}

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

function BasicsTextSection() {
  return (
    <section className="bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-16 pb-6 md:pb-10 text-center">
        <InView fromClass="opacity-0 translate-y-4 scale-95 tracking-[0.08em]" toClass="opacity-100 translate-y-0 scale-100 tracking-normal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide animate-fade-in-up">
            <span className="bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">GET THE LOOM</span>
          </h2>
        </InView>
        <InView className="mt-3" delayMs={150} fromClass="opacity-0 scale-x-0" toClass="opacity-100 scale-x-100">
          <div className="mx-auto h-[3px] w-24 md:w-28 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform origin-center transition-all duration-700" />
        </InView>
        <InView className="mt-6" delayMs={250} fromClass="opacity-0 translate-y-2 blur-[2px]" toClass="opacity-100 translate-y-0 blur-0">
          <p className="text-purple-800 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto px-4">
            Clothing that celebrates every woman's grace, strength, and style — because fashion should empower, not define.
          </p>
        </InView>
      </div>
    </section>
  );
}

function FeaturedProductsSection() {
  const items = products.slice(0, 4);
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-12 md:pb-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((it, index) => (
            <div key={it.id} className="group relative overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <Link to={`/product/${it.id}`} className="block">
                <div className="relative w-full aspect-[320/610] bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                  <img src={it.img} alt={it.title} loading="lazy" className="absolute inset-0 block h-full w-full object-contain object-center transition-opacity duration-500 ease-in-out p-2 group-hover:opacity-0" />
                  <img src={it.hoverImg} alt={it.title} loading="lazy" className="absolute inset-0 block h-full w-full object-contain object-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 p-2" />
                </div>
              </Link>
              <Link to={`/product/${it.id}`} className="block mt-2 md:mt-3">
                <div className="text-sm md:text-base text-purple-800 font-medium transition-colors group-hover:text-purple-900 line-clamp-2">{it.title}</div>
                <div className="mt-1 text-base md:text-lg text-pink-600 font-semibold">{formatPrice(it.price)}</div>
                <div className="text-xs text-purple-600">MRP inclusive of all taxes</div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-10 text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <Link to="/products" className="inline-flex items-center justify-center w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold tracking-wide hover:from-purple-700 hover:to-pink-700 hover:shadow-lg active:scale-95 transition-all duration-300 rounded-md touch-manipulation">
            Shop All
          </Link>
        </div>
      </div>
    </section>
  );
}

function CollectionShowcaseSection() {
  const [shown, setShown] = useState(false);
  const textRef = useRef(null);
  useEffect(() => {
    const node = textRef.current;
    if (!node) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const anim = (delayClass) =>
    (shown ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm") +
    " transform-gpu transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] " +
    delayClass;
  return (
    <section className="bg-gradient-to-br from-purple-50 to-pink-50 mt-12 md:mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center px-4 sm:px-6 py-12 md:py-20">
        <div ref={textRef}>
          <h2 className={anim("delay-[100ms]") + " text-purple-900 text-4xl md:text-6xl font-extrabold tracking-wide leading-tight animate-fade-in-up"}>
            SIMPLICITY
            <br />
            IS THE ULTIMATE
            <br />
            SOPHISTICATION
          </h2>
          <p className={anim("delay-[280ms]") + " mt-6 text-purple-700 text-base md:text-lg leading-relaxed max-w-xl"}>
            Step into a world where fashion meets confidence. Our women's collection blends chic designs, premium fabrics, and bold expressions for every mood and moment. From casual classics to standout statements, we bring you styles that inspire self-expression, confidence, and comfort in every thread.
          </p>
          <Link to="/brand" className={anim("delay-[420ms]") + " inline-flex w-full sm:w-auto mt-8 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out group relative overflow-hidden"}>
            <span className="relative z-10">Discover Our Brand</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-800 to-pink-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </div>
        <div className="relative w-full h-[360px] sm:h-[420px] md:h-[500px] lg:h-[680px] overflow-hidden rounded-lg mt-8 lg:mt-0">
          <img src={heroImg} alt="Brand Visual" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-500 ease-out`}>
      <LoomHeroSection />
      <BasicsTextSection />
      <FeaturedProductsSection />
      <CollectionShowcaseSection />
    </div>
  );
}
