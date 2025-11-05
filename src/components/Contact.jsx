import React, { useEffect, useState } from "react";

export default function Contact() {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  // No storage or network submission; form just validates and clears

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
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Thanks! Your message was submitted.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }
  };

  return (
    <main className={`bg-gradient-to-b from-white to-purple-50 min-h-screen py-12 md:py-20 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-500 ease-out`}>
      <section className="py-8 md:py-10 text-center">
        <h1 className="text-purple-900 text-3xl md:text-4xl font-extrabold tracking-tight">CONTACT US</h1>
        <p className="text-purple-700 mt-3 text-base md:text-lg">We'd love to hear from you</p>
      </section>

      <section className="text-purple-900">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-6 md:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">

            <div className={`space-y-4 md:space-y-6 transition-all duration-500 ease-out ${isMounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-20px]"}`}>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-purple-900 mb-3 md:mb-4">Get in Touch</h2>
                <p className="text-sm md:text-base text-purple-700 leading-relaxed mb-4 md:mb-6">
                  Have a question or feedback? We're here to help! Fill out the form or reach out to us directly.
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-purple-900 mb-1">Phone</h3>
                    <a href="tel:+919363942349" className="text-sm md:text-base text-purple-700 hover:text-pink-600 transition-colors">+91 9363942349</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-purple-900 mb-1">Email</h3>
                    <a href="mailto:ajaytvr928@gmail.com" className="text-sm md:text-base text-purple-700 hover:text-pink-600 transition-colors break-all">ajaytvr928@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-purple-900 mb-1">Address</h3>
                    <p className="text-sm md:text-base text-purple-700">San Francisco, CA 94158<br />500 Terry Francine Street</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-500 ease-out ${isMounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[20px]"}`}>
              <form onSubmit={handleSubmit} className="space-y-4 bg-white/80 backdrop-blur rounded-xl shadow-xl ring-1 ring-purple-100 p-5 md:p-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-purple-900 mb-2">
                      Name <span className="text-pink-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                        errors.name ? 'border-red-500' : 'border-purple-200 focus:border-purple-400'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-purple-900 mb-2">
                      Email <span className="text-pink-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                        errors.email ? 'border-red-500' : 'border-purple-200 focus:border-purple-400'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-purple-900 mb-2">
                      Phone <span className="text-pink-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                        errors.phone ? 'border-red-500' : 'border-purple-200 focus:border-purple-400'
                      }`}
                      placeholder="+91 1234567890"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-purple-900 mb-2">
                      Subject <span className="text-pink-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                        errors.subject ? 'border-red-500' : 'border-purple-200 focus:border-purple-400'
                      }`}
                      placeholder="Subject"
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-900 mb-2">
                    Message <span className="text-pink-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-y ${
                      errors.message ? 'border-red-500' : 'border-purple-200 focus:border-purple-400'
                    }`}
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div className="flex">
                  <button
                    type="submit"
                    className="w-full px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md hover:from-purple-700 hover:to-pink-700 hover:shadow-lg active:scale-95 transition-all duration-300 touch-manipulation"
                  >
                    Submit
                  </button>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}