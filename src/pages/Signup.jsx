import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [isMounted, setIsMounted] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "", agree: false });
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
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.password || form.password.length < 8) newErrors.password = 'Min 8 characters';
    if (form.password !== form.confirm) newErrors.confirm = 'Passwords do not match';
    if (!form.agree) newErrors.agree = 'Please accept the Terms';
    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;
    alert('Signed up (demo).');
  };

  const strength = (() => {
    const p = form.password;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s; // 0..4
  })();

  return (
    <main className={`min-h-[calc(100vh-64px)] bg-gradient-to-br from-purple-50 to-pink-50 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-500 ease-out`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Left: Visual/Copy */}
        <section className="order-2 lg:order-1 hidden md:block">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 p-[2px] shadow-xl">
            <div className="rounded-2xl bg-white/85 backdrop-blur p-8 h-full">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                Create your LuxeLoom account
              </h2>
              <p className="mt-4 text-purple-800/90 leading-relaxed">
                Save favorites, track orders, and unlock member-only perks.
              </p>
              <ul className="mt-6 space-y-3 text-purple-800 text-sm">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-pink-500"></span> Fast checkout</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-pink-500"></span> Wishlist sync across devices</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-pink-500"></span> Early access to drops</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Right: Signup Card */}
        <section className="order-1 lg:order-2">
          <div className="mx-auto w-full max-w-md relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-300/60 via-pink-300/60 to-purple-300/60 blur-2xl rounded-3xl"></div>
            <div className={`relative rounded-3xl bg-white/90 backdrop-blur p-6 md:p-8 ring-1 ring-purple-100 shadow-xl transition-all duration-500 ${cardIn ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-[2px]'}`}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <h1 className="mt-3 text-2xl md:text-3xl font-bold text-purple-900">Create account</h1>
                <p className="text-purple-700 text-sm mt-1">Join the community</p>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-purple-900 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-purple-900 placeholder-purple-400 transition-all"
                    placeholder="Name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

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
                      type={showPwd ? 'text' : 'password'}
                      name="password"
                      value={form.password}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-3 pr-11 rounded-lg border-2 border-purple-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-purple-900 placeholder-purple-400 transition-all"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      aria-label={showPwd ? 'Hide password' : 'Show password'}
                      onMouseEnter={() => setShowPwd(true)}
                      onMouseLeave={() => setShowPwd(false)}
                      onFocus={() => setShowPwd(true)}
                      onBlur={() => setShowPwd(false)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500 hover:text-purple-700 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                    </button>
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                  </div>
                  {/* strength */}
                  <div className="mt-2 h-2 w-full bg-purple-100 rounded-full overflow-hidden">
                    <div className={`h-full transition-all duration-300 ${strength >= 1 ? 'w-1/4 bg-red-400' : 'w-0'} ${strength >= 2 ? 'w-1/2 bg-orange-400' : ''} ${strength >= 3 ? 'w-3/4 bg-yellow-400' : ''} ${strength >= 4 ? 'w-full bg-green-500' : ''}`}></div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-900 mb-1">Confirm password</label>
                  <div className="relative">
                    <input
                      type={showPwd2 ? 'text' : 'password'}
                      name="confirm"
                      value={form.confirm}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-3 pr-11 rounded-lg border-2 border-purple-200 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-purple-900 placeholder-purple-400 transition-all"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      aria-label={showPwd2 ? 'Hide password' : 'Show password'}
                      onMouseEnter={() => setShowPwd2(true)}
                      onMouseLeave={() => setShowPwd2(false)}
                      onFocus={() => setShowPwd2(true)}
                      onBlur={() => setShowPwd2(false)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500 hover:text-purple-700 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                    </button>
                    {errors.confirm && <p className="text-red-500 text-xs mt-1">{errors.confirm}</p>}
                  </div>
                </div>

                <label className="flex items-start gap-2 text-sm text-purple-800">
                  <input type="checkbox" name="agree" checked={form.agree} onChange={onChange} className="mt-0.5 w-4 h-4 rounded border-purple-300 text-purple-600 focus:ring-purple-500" />
                  I agree to the <Link to="#" className="text-purple-900 font-semibold hover:underline">Terms & Privacy</Link>
                </label>
                {errors.agree && <p className="text-red-500 text-xs">{errors.agree}</p>}

                <button type="submit" className="w-full mt-1 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 hover:shadow-lg active:scale-95 transition-all duration-300">
                  Create account
                </button>

                <p className="text-center text-sm text-purple-700 mt-4">
                  Already have an account? <Link to="/login" className="text-purple-900 font-semibold hover:underline">Sign in</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


