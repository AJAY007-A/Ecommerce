import React, { useEffect, useState } from "react";

export default function SizeGuide() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(t);
  }, []);
  return (
    
    <main className="bg-white">
      <section className="py-8 md:py-10 text-center px-4">
        <h1 className="text-purple-900 text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">SIZE GUIDE</h1>
      </section>


      <section className="bg-gradient-to-br from-purple-50 to-pink-50 text-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-10">
          <div className={`md:col-span-1 text-center md:text-left transition-all duration-500 ease-out ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            <h2 className="text-xl font-semibold text-purple-900">How to Measure</h2>
          </div>
          <div className="md:col-span-1 flex items-center justify-center">
            <div className="relative w-40 h-56 sm:w-44 sm:h-64 md:w-56 md:h-80">
              <div className={`absolute inset-0 transition-all duration-500 ease-out ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
                <svg preserveAspectRatio="xMidYMid meet" viewBox="49.173 4.409 101.652 191.182" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Measurements illustration">
                  <g>
                    <path d="M149.289 136.983c-3.505-16.533-11.998-29.319-13.128-30.969 4.776-9.164 9.305-24.376 12.133-40.763 2.175-12.604 3.317-26.515.964-29.181-3.925-4.448-31.464-14.58-34.51-15.691V4.409h-.706v15.98c-14.682 6.033-26.717.792-28.349.017V4.409h-.706V20.38c-3.045 1.111-30.584 11.242-34.51 15.691-2.353 2.666-1.211 16.577.964 29.181 2.828 16.39 7.359 31.605 12.136 40.768-1.078 1.658-9.308 14.698-12.674 31.372-2.11 10.452-1.928 20.269.542 29.179 3.089 11.143 9.781 20.88 19.89 28.943l.096.077h56.872l.096-.077c10.386-8.308 17.251-18.199 20.403-29.397 2.523-8.957 2.687-18.759.487-29.134zm-.56-100.445c1.533 1.737 1.832 11.426-1.13 28.594-2.82 16.34-7.332 31.49-12.082 40.589-3.4.568-6.686 1.048-9.858 1.453-.985-9.234-1.96-15.871-2.214-17.557 8.676-.361 15.626-7.646 15.626-16.553 0-8.366-6.132-15.3-14.065-16.411l8.697-28.05c6.88 2.93 13.342 6.025 15.026 7.935zm-20.842 31.491c-.762-5.335-2.442-9.504-2.947-10.673 7.576 1.078 13.426 7.709 13.426 15.708 0 8.425-6.489 15.334-14.65 15.833 4.886-7.045 4.98-15.2 4.171-20.868zm-3.763-10.766l.03.064c.021.046 2.156 4.635 3.036 10.822.805 5.652.694 13.831-4.361 20.779l-.059.002c-8.599 0-15.595-7.117-15.595-15.865S114.172 57.2 122.771 57.2c.456 0 .907.024 1.353.063zm8.926-28.937l-8.757 28.243a16.31 16.31 0 00-1.522-.075c-8.988 0-16.3 7.434-16.3 16.571 0 9.124 7.292 16.549 16.263 16.57.23 1.518 1.222 8.225 2.226 17.63-9.126 1.14-17.27 1.647-24.309 1.78V23.96c4.001-.108 8.712-.87 13.752-2.955 1.162.425 10.118 3.714 18.647 7.321zm-32.4 81.425c7.061-.133 15.233-.644 24.383-1.786.755 7.178 1.507 15.847 1.933 24.943.997 21.252.38 49.236-8.221 61.86l.17.116H100.65v-85.133zm-.705 85.134H81.408l.17-.116c-8.601-12.624-9.218-40.608-8.221-61.86.416-8.876 1.142-17.345 1.879-24.42 2.198.286 4.697.556 7.491.775 3.857.302 8.557.524 14.03.524 1.035 0 2.098-.008 3.187-.025v85.122zM85.319 21.011c.68.335 3.734 1.742 8.428 2.499 1.665.268 3.65.466 5.883.466l.314-.003v85.085c-6.817.106-12.57-.138-17.133-.494a145.609 145.609 0 01-7.502-.776c1.024-9.695 2.05-16.632 2.282-18.162 8.822-.196 15.941-7.547 15.941-16.561 0-9.137-7.312-16.571-16.3-16.571-.407 0-.809.02-1.208.05l-8.817-28.437c8.335-3.505 16.916-6.659 18.112-7.096zM77.232 57.2c8.599 0 15.595 7.117 15.595 15.865 0 8.66-6.856 15.717-15.336 15.858-5.051-6.947-5.161-15.123-4.357-20.774.881-6.187 3.015-10.776 3.036-10.822l.042-.09a15.67 15.67 0 011.02-.037zm-4.794 10.829c-1.439 10.073 1.381 16.848 4.179 20.884-8.314-.33-14.979-7.311-14.979-15.849 0-8.118 6.026-14.828 13.767-15.752-.48 1.103-2.194 5.311-2.967 10.717zm-20.299-2.897c-2.963-17.169-2.663-26.857-1.131-28.594 1.727-1.957 8.474-5.16 15.545-8.155l8.753 28.231c-8.083.972-14.375 7.977-14.375 16.451 0 9.016 7.122 16.369 15.946 16.561-.261 1.73-1.266 8.579-2.268 18.069-6.09-.827-9.65-1.753-10.379-1.952-4.753-9.097-9.269-24.259-12.091-40.611zm-.009 101.262c-2.441-8.799-2.622-18.502-.538-28.841 3.315-16.443 11.397-29.325 12.55-31.104.936.252 4.493 1.147 10.394 1.948-.739 7.089-1.466 15.577-1.883 24.473-.637 13.577-.439 25.434.589 35.24 1.268 12.094 3.814 21.098 7.567 26.775H71.68c-9.933-7.95-16.51-17.535-19.55-28.491zm95.995-.469c-3.102 11.019-9.853 20.761-20.068 28.96h-8.541c3.753-5.677 6.299-14.681 7.567-26.775 1.028-9.806 1.226-21.663.589-35.24-.428-9.114-1.181-17.8-1.938-24.992 3.17-.405 6.456-.885 9.853-1.452 1.125 1.642 9.537 14.311 13.012 30.705 2.175 10.261 2.016 19.949-.474 28.794z" fill="#010A5E"></path>
                  </g>
                </svg>
              </div>

              <div className="hidden md:block absolute right-1 top-[34%] -translate-y-1/2">
                <span className={`block w-3 h-3 rounded-full bg-pink-500 ring-2 ring-purple-300 animate-pulse transition-opacity duration-700 ${isMounted ? "opacity-100" : "opacity-0"}`}></span>
                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 flex items-center">
                  <span className={`block h-[2px] bg-purple-300 origin-left transition-transform duration-700 ease-out ${isMounted ? "scale-x-100" : "scale-x-0"} w-10`}></span>
                  <span className={`ml-2 text-xs bg-purple-100 text-purple-900 px-2 py-1 rounded transition-all duration-700 ease-out ${isMounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`}>Bust</span>
                </div>
              </div>

              <div className="hidden md:block absolute right-1 top-[50%] -translate-y-1/2">
                <span className={`block w-3 h-3 rounded-full bg-pink-500 ring-2 ring-purple-300 animate-pulse transition-opacity duration-700 delay-150 ${isMounted ? "opacity-100" : "opacity-0"}`}></span>
                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 flex items-center">
                  <span className={`block h-[2px] bg-purple-300 origin-left transition-transform duration-700 ease-out delay-150 ${isMounted ? "scale-x-100" : "scale-x-0"} w-10`}></span>
                  <span className={`ml-2 text-xs bg-purple-100 text-purple-900 px-2 py-1 rounded transition-all duration-700 ease-out delay-150 ${isMounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`}>Waist</span>
                </div>
              </div>

              <div className="hidden md:block absolute right-1 top-[68%] -translate-y-1/2">
                <span className={`block w-3 h-3 rounded-full bg-pink-500 ring-2 ring-purple-300 animate-pulse transition-opacity duration-700 delay-300 ${isMounted ? "opacity-100" : "opacity-0"}`}></span>
                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 flex items-center">
                  <span className={`block h-[2px] bg-purple-300 origin-left transition-transform duration-700 ease-out delay-300 ${isMounted ? "scale-x-100" : "scale-x-0"} w-10`}></span>
                  <span className={`ml-2 text-xs bg-purple-100 text-purple-900 px-2 py-1 rounded transition-all duration-700 ease-out delay-300 ${isMounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`}>Hip</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 space-y-4 md:space-y-5 text-sm leading-6 px-1">
            <div className={`transition-all duration-500 ease-out ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
              <h3 className="font-semibold">Bust</h3>
              <p>Measure around the fullest part of your bust while wearing a bra that fits well.</p>
            </div>
            <div className={`transition-all duration-500 ease-out delay-150 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
              <h3 className="font-semibold">Waist</h3>
              <p>Measure the narrowest part of your waistline.</p>
            </div>
            <div className={`transition-all duration-500 ease-out delay-300 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
              <h3 className="font-semibold">Hips</h3>
              <p>Measure the fullest part of your hips.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 text-center">
          <h2 className="text-purple-900 text-xl sm:text-2xl font-semibold mb-6 sm:mb-10">Size Table Women</h2>
          <div className="overflow-x-auto -mx-2 sm:mx-0 px-2 sm:px-0">
            <table className="min-w-[600px] sm:min-w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-white/60">
                  <th className="px-3 sm:px-4 py-2 sm:py-3 whitespace-nowrap">Size</th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 whitespace-nowrap">USA</th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 whitespace-nowrap">Bust (cm)</th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 whitespace-nowrap">Waist (cm)</th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 whitespace-nowrap">Hip (cm)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["M", "10-12", "97-102", "82-87", "102-107"],
                  ["L", "12-14", "102-107", "87-92", "107-112"],
                  ["XL", "14-16", "107-112", "92-97", "112-117"],
                  ["2XL", "16-18", "112-117", "97-102", "117-122"],
                  ["3XL", "18-20", "117-122", "102-107", "122-127"],
                  ["4XL", "20-22", "122-127", "107-112", "127-132"],
                ].map((row, idx) => (
                  <tr key={idx} className="odd:bg-white even:bg-white/50">
                    {row.map((cell, i) => (
                      <td key={i} className="px-3 sm:px-4 py-2 sm:py-3 whitespace-nowrap">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}