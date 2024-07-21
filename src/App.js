import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import About from "./Pages/About/about";
import Signup from "./Pages/Signup/signup";
import Contact from "./Pages/Contact/contact";
import Wishlist from "./Pages/Wishlist/wishlist";
import Checkout from "./Pages/Checkout/checkout";
import Compare from "./Pages/Compare/compare";
import Filter from "./Pages/Filter/filter";
import Forgotpassword from "./Pages/Forgotpassword/forgotpassword";
import Resetpassword from "./Pages/Resetpassword/resetpassword";
import Invoice from "./Pages/Invoice/invoice";
import Shop from "./Pages/Shop/shop";
import Cart from "./Pages/Cart/cart";
import Vendor from "./Vendor/vendor";
import VendorDetail from "./Vendor/vendorDetail";
import UserDashboard from "./UserDashboard/UserDashboard";
import ProductDetail from "./Pages/ProductDetail/productDetail";
import Footer from "././Components/Layout/Footer";
import Header from "././Components/Layout/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/vendordetail" element={<VendorDetail />} />

        {/* other routes */}
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
