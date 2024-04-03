// importing react libraries
import React, { useState, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
//importing componetns
import Footer from "./Components/Footer";
import Header from "./Components/Header";
//importing models
import Login from "./models/Login";
import Cart from "./models/Cart";
import Search from "./models/Search";
import Profile from "./models/Profile";
//importing pages
// import Home from "./Page/Home";
// import Shop from "./Page/Shop";
// import NotFoundPage from "./Page/NotFoundPage";
// import About from "./Page/About";
// import Purchase from "./Page/Purchase";
// import ProductPage from "./Page/ProductPage";
const Home = React.lazy(() => import("./Page/Home"));
const Shop = React.lazy(() => import("./Page/Shop"));
const NotFoundPage = React.lazy(() => import("./Page/NotFoundPage"));
const About = React.lazy(() => import("./Page/About"));
const Purchase = React.lazy(() => import("./Page/Purchase"));
const ProductPage = React.lazy(() => import("./Page/ProductPage"));

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
  const [SearchOpen, SetSearchOpen] = useState(false);
  const handleSearchOpen = () => {
    SetSearchOpen(!SearchOpen);
  };

  return (
    <>
      {isLoginOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <Login handleLoginopen={handleLoginopen} />
        </Suspense>
      )}

      {/* Similar Suspense wrapping for Cart, Search, and Profile modals */}
      {isCartOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <Cart handleCartOpen={handleCartOpen} />
        </Suspense>
      )}

      {isProfileOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <Profile handleProfileOpen={handleProfileOpen} />
        </Suspense>
      )}

      {SearchOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <Search handleSearchOpen={handleSearchOpen} />
        </Suspense>
      )}

      {showNav && (
        <Header
          handleLoginopen={handleLoginopen}
          handleCartOpen={handleCartOpen}
          handleProfileOpen={handleProfileOpen}
          handleSearchOpen={handleSearchOpen}
        />
      )}

      <Suspense fallback={<div>lazing loading working...</div>}>
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
      </Suspense>

      {showNav && <Footer />}
    </>
  );
}

export default App;
