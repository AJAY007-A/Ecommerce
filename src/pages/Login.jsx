import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [isMounted, setIsMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [errors, setErrors] = useState({});
  const [cardIn, setCardIn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setCardIn(true), 20);
    return () => clearTimeout(t);
  }, []);

  const onChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.password || form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;
    alert("Logged in (demo). You can wire real auth later.");
  };

  return (
    <main className={`min-h-[calc(100vh-64px)] bg-gradient-to-br from-purple-50 to-pink-50 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-500 ease-out`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Left: Brand teaser */}
        <section className="order-2 lg:order-1 hidden md:block">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 p-[2px] shadow-xl">
            <div className="rounded-2xl bg-white/80 backdrop-blur p-8 h-full">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                Welcome Back to LuxeLoom
              </h2>
              <p className="mt-4 text-purple-800/90 leading-relaxed">
                Access your wishlist, track orders, and enjoy a faster checkout experience.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {["New Arrivals","Member Perks","Early Access"].map((t, i) => (
                  <div key={i} className="rounded-xl border border-purple-200/70 bg-white p-4 text-center">
                    <div className="text-sm font-semibold text-purple-900">{t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Right: Login card */}
        <section className="order-1 lg:order-2">
          <div className="mx-auto w-full max-w-md relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-300/60 via-pink-300/60 to-purple-300/60 blur-2xl rounded-3xl"></div>
            <div className={`relative rounded-3xl bg-white/90 backdrop-blur p-6 md:p-8 ring-1 ring-purple-100 shadow-xl transition-all duration-500 ${cardIn ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-[2px]'}`}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                </div>
                <h1 className="mt-3 text-2xl md:text-3xl font-bold text-purple-900">Sign in to your account</h1>
                <p className="text-purple-700 text-sm mt-1">Continue to your personalized experience</p>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-purple-900 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-purple-900 placeholder-purple-400 transition-all"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-900 mb-1">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={form.password}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-3 pr-11 rounded-lg border-2 border-purple-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-purple-900 placeholder-purple-400 transition-all"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onMouseEnter={() => setShowPassword(true)}
                      onMouseLeave={() => setShowPassword(false)}
                      onFocus={() => setShowPassword(true)}
                      onBlur={() => setShowPassword(false)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500 hover:text-purple-700 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                    </button>
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="inline-flex items-center gap-2 text-sm text-purple-800">
                    <input type="checkbox" name="remember" checked={form.remember} onChange={onChange} className="w-4 h-4 rounded border-purple-300 text-purple-600 focus:ring-purple-500" />
                    Remember me
                  </label>
                  <Link to="#" className="text-sm text-purple-600 hover:text-purple-800">Forgot password?</Link>
                </div>

                <button type="submit" className="w-full mt-2 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 hover:shadow-lg active:scale-95 transition-all duration-300">
                  Sign In
                </button>

                <div className="relative py-2 text-center">
                  <span className="text-xs text-purple-500 bg-white/90 relative z-10 px-3">or continue with</span>
                  <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-purple-200" />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {["G","F","X"].map((k) => (
                    <button key={k} type="button" className="px-3 py-2.5 rounded-md border-2 border-purple-200 bg-white text-purple-800 hover:bg-purple-50 active:scale-95 transition-all text-sm">
                      {k}
                    </button>
                  ))}
                </div>

                <p className="text-center text-sm text-purple-700 mt-4">
                  Don’t have an account? <Link to="/signup" className="text-purple-900 font-semibold hover:underline">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


