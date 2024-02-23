import React from "react";
import Slider from "../Components/Sliders";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { Parallax } from "react-parallax";
import home_single from "../assets/home/home_single.jpg";
import product from "../assets/home/product.jpg"

function Home() {


  const listingData = [
    {
      productname : "Running shoes for men",
      cost : 99,
      img : product
    },
    {
      productname : "Running shoes for men",
      cost : 99,
      img : product
    },
    {
      productname : "Running shoes for men",
      cost : 99,
      img : product
    },
    {
      productname : "Running shoes for men",
      cost : 99,
      img : product
    },
    {
      productname : "Running shoes for men",
      cost : 99,
      img : product
    },
    {
      productname : "Running shoes for men",
      cost : 99,
      img : product
    },
    {
      productname : "Running shoes for men",
      cost : 99,
      img : product
    },
    {
      productname : "Running shoes for men",
      cost : 99,
      img : product
    }
  ]

  return (
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
        <p className="text-3xl mobile:text-5xl font-extrabold text-center">Trending Products</p>
        <p className="mt-6 tracking-widest text-lg mobil:text-2xl font-light text-center mb-4"> <button className="mx-2">Featured</button> |<button className="mx-2">Latest</button> | <button className="mx-2">Best Seller</button> | <button className="mx-2">Sale Products</button></p>
        <div className="grid gap-8 grid-cols-1 mobile:grid-cols-2 grid:grid-cols-4 tablet:grid-cols-3">
          {listingData.map((val, ind)=>(
            <div key={ind} className="mx-auto">
              <div className="min-w-24 min-h-24">
                <img src={val.img} className="w-full h-full object-cover" alt={val.productname} />
              </div>
              <div className="w-full flex justify-between my-4 text-lg"><p>{val.productname}</p> <span className="font-bold">${val.cost}</span></div>
            </div>
          ))}
        </div>
      </section>

           {/* sales section */}
      <section className="text-white text-center">
        <Parallax
          strength={600}
          bgImage={home_single}
          style={{ height: "auto", backgroundSize: "cover" }}
          bgStyle={{ backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="py-16 mobile:py-32">
            <p>Grab these shoes on special prices</p>
            <p className="text-[48px] mobile:text-[68px] my-8">Items on Sale</p>
            <button className="border botder-white text-lg mobile:text-xl py-2 mobile:py-4 px-5 mobile:px-10 hover:bg-white hover:text-black">
              BUY NOW
            </button>
          </div>
        </Parallax>
      </section>

    </>
  );
}

export default Home;
