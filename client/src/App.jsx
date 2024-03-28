import React, { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProductPage from "./Page/ProductPage";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./models/Login";
import Cart from "./models/Cart";
import Shop from "./Page/Shop";
import NotFoundPage from "./Page/NotFoundPage";
import Profile from "./models/Profile";
import About from "./Page/About";
import Purchase from "./Page/Purchase";

function App() {
  const [showNav, setShowNav] = useState(true);

  const [isLoginOpen, SetIsLoginOpen] = useState(false);
  const handleLoginopen = () => {
    SetIsLoginOpen(!isLoginOpen);
  };

  const [isCartOpen, SetIsCartOpen] = useState(false);
  const handleCartOpen = () => {
    SetIsCartOpen(!isCartOpen);
  };
  const [isProfileOpen, SetIsProfileOpen] = useState(false);
  const handleProfileOpen = () => {
    SetIsProfileOpen(!isProfileOpen);
  };

  return (
    <>
      {isLoginOpen && <Login handleLoginopen={handleLoginopen} />}
      {isCartOpen && <Cart handleCartOpen={handleCartOpen} />}
      {isProfileOpen && <Profile handleProfileOpen={handleProfileOpen} />}

      {showNav && (
        <Header
          handleLoginopen={handleLoginopen}
          handleCartOpen={handleCartOpen}
          handleProfileOpen={handleProfileOpen}
        />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productpage/:productID" element={<ProductPage />} />
        <Route path="/shop/:type" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFoundPage funcNav={setShowNav} />} />
        <Route
          path="/viewCart"
          element={<Purchase handleLoginopen={handleLoginopen} />}
        />
      </Routes>

      {showNav && <Footer />}
    </>
  );
}

export default App;
