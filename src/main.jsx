import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import ProductsGrid from "./components/ProductsGrid";
import SizeGuide from "./components/SizeGuide";
import Brand from "./pages/Brand";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import PaymentSuccess from "./components/PaymentSuccess";
import Contact from "./components/Contact";
import Wishlist from "./components/Wishlist";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

// Home page is provided by ./pages/Home

function ProductsPage() {
  return (
    <>
      <ProductsGrid />
    </>
  );
}

// Brand page is provided by ./pages/Brand

function ScrollToTop() {
  const location = useLocation();
  React.useEffect(() => {
    // Ensure scroll resets on route change across browsers/mobile
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // Fallbacks for browsers that ignore smooth behavior
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);
  return null;
}

const AppLayout = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment/success" element={<PaymentSuccess />} />
            <Route path="/size-guide" element={<SizeGuide />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);