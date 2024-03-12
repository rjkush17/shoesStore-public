import React, { useEffect, useState } from "react";
import Slider from "../Components/Sliders";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { Parallax } from "react-parallax";
import home_single from "../images/home/home_single.jpg";
import blogImage from "../images/home/blog.jpg";
import { useNavigate } from "react-router-dom";
import useHomeData from "../hook/useHomeData";
import ProductCard from "../Components/ProductCard";

function Home() {
  const navigate = useNavigate();
  const { homeList, errors, isLoading, fetchData } = useHomeData();
  const [currentProduct, setCurrentProduct] = useState("featured");
  const [fliteredData, setFliteredData] = useState([]);

  //function for render data no change
  useEffect(() => {
    fetchData();
  }, []);

  // Function to filter data based on homeList update
  useEffect(() => {
    if(homeList && homeList.length > 0) {
      handleCurrent(currentProduct);
    }
  }, [homeList, currentProduct]);

  const handleCurrent = (e) => {
    const data = homeList.filter((product) => product.label.includes(e));
    setCurrentProduct(e);
    setFliteredData(data);
  };

  const blog = [
    {
      blogName: "Running Shoes for men",
      date: "April 24 2023",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      img: blogImage,
    },
    {
      blogName: "Running Shoes for men",
      date: "April 24 2023",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      img: blogImage,
    },
    {
      blogName: "Running Shoes for men",
      date: "April 24 2023",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      img: blogImage,
    },
  ];

  return (
    <>
      {isLoading && <p>Fetching Data...</p>}

      {!isLoading && (
        <>
          {/* // SliderComponent */}
          <Slider />

          {/* //quality component */}
          <section className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 gap-10 tablet:gap-3 w-10/12 mx-auto py-7 mobile:py-20">
            <div className="inline-flex min-w-1/4  leading-7 tracking-wide">
              <div>
                <RiShoppingBagLine className="text-6xl mr-3 " />
              </div>
              <div className="">
                <h5>Fast & Free Shipping</h5>
                <p className="text-sm text-gray-500">
                  Consectetur adipi elit lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className="inline-flex min-w-1/4  leading-7 tracking-wide">
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
            <div className="inline-flex min-w-1/4  leading-7 tracking-wide">
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

            <div className="inline-flex min-w-1/4  leading-7 tracking-wide">
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
          <section className="text-center w-11/12 mt-6 mobile:mt-auto mx-auto">
            <p className="text-3xl mobile:text-5xl font-extrabold text-center">
              Trending Products
            </p>
            <p className="my-6 tracking-widest text-lg mobile:text-2xl font-light text-center mb-4">
              {" "}
              <button
                onClick={() => handleCurrent("featured")}
                className={`${currentProduct == "featured" ? "underline" : ""} mx-2`}
              >
                Featured
              </button>{" "}
              |
              <button onClick={() => handleCurrent("latest")} className={`${currentProduct == "latest" ? "underline" : ""} mx-2`}>
                Latest
              </button>{" "}
              |{" "}
              <button
                onClick={() => handleCurrent("best seller")}
                className={`${currentProduct == "best seller" ? "underline" : ""} mx-2`}
              >
                Best Seller
              </button>{" "}
              |{" "}
              <button onClick={() => handleCurrent("sales")} className={`${currentProduct == "sales" ? "underline" : ""} mx-2`}>
                Sale Products
              </button>
            </p>
            <div className="grid gap-8 grid-cols-1 mobile:grid-cols-2 grid:grid-cols-4 tablet:grid-cols-3">
              {errors && <p>{errors}</p>}
              {!errors &&
                currentProduct &&
                fliteredData.map((val, ind) => (
                 <ProductCard val={val}  key={ind} />
                ))}
            </div>
          </section>

          {/* sales section */}
          <section className=" mt-5 text-white text-center">
            <Parallax
              strength={600}
              bgImage={home_single}
              style={{ height: "auto", backgroundSize: "cover" }}
              bgStyle={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="py-16 mobile:py-32">
                <p>Grab these shoes on special prices</p>
                <p className="text-[48px] mobile:text-[68px] my-8">
                  Items on Sale
                </p>
                <button
                  onClick={() => navigate("/shop/sale")}
                  className="border botder-white text-lg mobile:text-xl py-2 mobile:py-4 px-5 mobile:px-10 hover:bg-white hover:text-black"
                >
                  BUY NOW
                </button>
              </div>
            </Parallax>
          </section>

          {/* Product react section */}
          <section className="text-center w-10/12 mt-6 mobile:mt-auto mx-auto">
            <p className="my-20 text-3xl mobile:text-5xl font-extrabold text-center">
              Latest Post
            </p>
            <div className="grid gap-8 grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3">
              {blog.map((val, ind) => (
                <div key={ind} className="mx-auto">
                  <div className="min-w-24 min-h-24 overflow-hidden">
                    <img
                      src={val.img}
                      className="w-full h-full object-cover hover:scale-150 transition duration-1000	 ease-in-out delay-150"
                      alt={val.title}
                    />
                  </div>
                  <div className="flex flex-col text-start justify-between my-4 text-lg leading-8 w-10/12">
                    <span className="text-gray-500 font-medium">
                      {val.date}
                    </span>
                    <h1 className="mt-4 leading-8 text-4xl">{val.blogName}</h1>{" "}
                    <br />
                    <p className="text-gray-500 text-xl">{val.description}</p>
                    <button className="py-2 mt-6 px-4 border border-black w-fit text-black hover:bg-black hover:text-white rounded-full">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default Home;
