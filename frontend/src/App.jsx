import AboutPage from "./assets/landing_page/about/AboutPage";
import Footer from "./assets/landing_page/Footer";
import HomePage from "./assets/landing_page/home/HomePage";
import Navigationbar from "./assets/landing_page/Navigationbar";
import PageNotFound from "./assets/landing_page/PageNotFound";
import PricingPage from "./assets/landing_page/pricing/PricingPage";
import ProductsPage from "./assets/landing_page/products/ProductsPage";
import SignUpPage from "./assets/landing_page/signup/SignUpPage";
import SupportPage from "./assets/landing_page/support/SupportPage";

import "./index.css";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
