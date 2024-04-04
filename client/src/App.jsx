// importing react libraries
import React, { useState, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
//importing component
import Footer from "./Components/Footer";
import Header from "./Components/Header";
//importing models
const Login = React.lazy(() => import("./models/Login"));
const Cart = React.lazy(() => import("./models/Cart"));
const Search = React.lazy(() => import("./models/Search"));
const Profile = React.lazy(() => import("./models/Profile"));
import Model_Loader from "./Components/Model_Loader"
//importing pages
import Preloader from "./Components/Preloader";
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
      <main data-scroll-container>
        {isLoginOpen && (
          <Suspense fallback={<Model_Loader/>}>
            <Login handleLoginopen={handleLoginopen} />
          </Suspense>
        )}

        {/* Similar Suspense wrapping for Cart, Search, and Profile modals */}
        {isCartOpen && (
          <Suspense fallback={<Model_Loader/>}>
            <Cart handleCartOpen={handleCartOpen} />
          </Suspense>
        )}

        {isProfileOpen && (
          <Suspense fallback={<Model_Loader/>}>
            <Profile handleProfileOpen={handleProfileOpen} />
          </Suspense>
        )}

        {SearchOpen && (
          <Suspense fallback={<Model_Loader/>}>
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

          
         <Suspense
          fallback={
            <Preloader/>
          }
        >
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
      </main>
  );
}

export default App;
