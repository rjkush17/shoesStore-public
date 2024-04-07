import React, { useEffect, useState } from "react";
import Slider from "../Components/Sliders";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { Parallax } from "react-parallax";
import home_single from "../images/home/home_single.jpg";
import { useNavigate } from "react-router-dom";
import useHomeData from "../hook/useHomeData";
import ProductCard from "../Components/ProductCard";
import Blog from "../Components/Blog";
import preloader from "../images/loader.gif";
//animation librarly
import AOS from "aos";
import "aos/dist/aos.css";


function Home() {
  const navigate = useNavigate();
  const { homeList, errors, isLoading, fetchData } = useHomeData();
  const [currentProduct, setCurrentProduct] = useState("featured");
  const [fliteredData, setFliteredData] = useState([]);

  //function for render data no change
  useEffect(() => {
    fetchData();
    AOS.init({ offset: 200, duration: 600 });

  }, []);

  // Function to filter data based on homeList update
  useEffect(() => {
    if (homeList && homeList.length > 0) {
      handleCurrent(currentProduct);
    }
  }, [homeList, currentProduct]);

  const handleCurrent = (e) => {
    const data = homeList.filter((product) => product.label.includes(e));
    setCurrentProduct(e);
    setFliteredData(data);
  };

  return (
    <main className="w-screen overflow-x-hidden overflow-y-auto">
      {/* // SliderComponent */}
      <Slider />

      {/* //quality component */}
      <section 
        className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 gap-10 tablet:gap-3 w-10/12 mx-auto py-7 mobile:py-20"
  
      >
        <div className="inline-flex min-w-1/4  leading-7 tracking-wide"  data-aos="fade-up">
          <div>
            <RiShoppingBagLine className="text-6xl mr-3" />
          </div>
          <div className="" data-aos="fade-up">
            <h5>Fast & Free Shipping</h5>
            <p className="text-sm text-gray-500">
              Consectetur adipi elit lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="inline-flex min-w-1/4  leading-7 tracking-wide" data-aos="fade-down">
          <div>
            <FaInstagram className="text-6xl mr-3 " />
          </div>
          <div className="">
            <h5>Quality Guarantee</h5>
            <p className="text-sm text-gray-500">
              Consectetur adipi elit lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="inline-flex min-w-1/4  leading-7 tracking-wide" data-aos="fade-up">
          <div>
            <AiOutlineShoppingCart className="text-6xl mr-3 " />
          </div>
          <div>
            <h5>Online Help Support</h5>
            <p className="text-sm text-gray-500">
              Consectetur adipi elit lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        <div className="inline-flex min-w-1/4  leading-7 tracking-wide" data-aos="fade-down">
          <div>
            <FaPinterest className="text-6xl mr-3 " />
          </div>
          <div>
            <h5>100% Secure Payment</h5>
            <p className="text-sm text-gray-500">
              Consectetur adipi elit lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </section>

      {/* Product shoes section */}
      <section
        className="text-center w-11/12 mt-6 mobile:mt-auto mx-auto"
        data-scroll-section
      >
        <p className="text-3xl mobile:text-5xl font-extrabold text-center">
          Trending Products
        </p>
        <p className="my-6 tracking-widest text-lg mobile:text-2xl font-light text-center mb-4">
          {" "}
          <button
            onClick={() => handleCurrent("featured")}
            className={`${
              currentProduct == "featured" ? "underline" : ""
            } mx-2`}
          >
            Featured
          </button>{" "}
          |
          <button
            onClick={() => handleCurrent("latest")}
            className={`${currentProduct == "latest" ? "underline" : ""} mx-2`}
          >
            Latest
          </button>{" "}
          |{" "}
          <button
            onClick={() => handleCurrent("best seller")}
            className={`${
              currentProduct == "best seller" ? "underline" : ""
            } mx-2`}
          >
            Best Seller
          </button>{" "}
          |{" "}
          <button
            onClick={() => handleCurrent("sales")}
            className={`${currentProduct == "sales" ? "underline" : ""} mx-2`}
          >
            Sale Products
          </button>
        </p>
        {isLoading && (
          <div className="flex flex-col justify-center items-center">
            <img src={preloader} alt="Loading..." />
            <p className="text-center p-4">Feching Product Data ...</p>
            <p className="text-sm text-red-400 mb-6">
              Please wait while we fetch your data. Our server is warming up and
              it might take a little extra time. Thank you for your patience!
            </p>
          </div>
        )}
        {errors && <p className="error">{"failded to Fatch Products Data"}</p>}
        <div className="grid gap-8 grid-cols-1 mobile:grid-cols-2 grid:grid-cols-4 tablet:grid-cols-3">
          {!errors &&
            currentProduct &&
            fliteredData.map((val, ind) => <ProductCard val={val} key={ind} />)}
        </div>
      </section>

      {/* sales section */}
      <section className="mt-5 text-white text-center" data-scroll-section>
        <Parallax
          strength={300}
          bgImage={home_single}
          style={{ height: "auto", backgroundSize: "cover" }}
          bgStyle={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="py-16 mobile:py-32">
            <p>Grab these shoes on special prices</p>
            <p className="text-[48px] mobile:text-[68px] my-8">Items on Sale</p>
            <button
              onClick={() => navigate("/shop/sales")}
              className="border botder-white text-lg mobile:text-xl py-2 mobile:py-4 px-5 mobile:px-10 hover:bg-white hover:text-black"
            >
              BUY NOW
            </button>
          </div>
        </Parallax>
      </section>

      {/* Blog */}
      <Blog />
    </main>
  );
}

export default Home;
