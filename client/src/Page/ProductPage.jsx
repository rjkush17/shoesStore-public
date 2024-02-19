import React, { useState } from "react";
import product1 from "../assets/product1/product-large-1.jpg";
import product2 from "../assets/product1/product-large-2.jpg";
import product3 from "../assets/product1/product-large-3.jpg";
import product4 from "../assets/product1/product-large-4.jpg";
import product5 from "../assets/product1/product-large-5.jpg";
import reviews1 from "../assets/reviews/review-item1.jpg";
import reviews2 from "../assets/reviews/review-item2.jpg";
import reviews3 from "../assets/reviews/review-item3.jpg";
import { FaStar } from "react-icons/fa";

function ProductPage() {
  // function for increase and decreace purchase quantity
  const [quantity, SetQuantity] = useState(1);
  const handleQuantity = (op) => {
    if (quantity <= 1 && op === "minus") {
      SetQuantity(1);
    } else if (op === "plus") {
      SetQuantity(quantity + 1);
    } else if (op === "minus") {
      SetQuantity(quantity - 1);
    }
  };

  // function for main image change when click others img
  const [currentImage, setCurrentImage] = useState(product1);
  const handleImage = (img) => {
    setCurrentImage(img);
  };

  //function for change switch screen between additional info, description and reviews
  const [currentScreen, setCurrentScreen] = useState("Reviews");
  const handleScreen = (screen) => {
    setCurrentScreen(screen);
  };

  //function for sunmitting review
const handlesubmit = (e) =>{
e.preventDefault()
alert("Review Submiited for checking % it will show after QC progess")
}

  //fake review data
  const reviewData = [
    {
      name: "Rohit Shamra",
      stars: 4.5,
      img: reviews1,
      review:
        "lorem didjf osswaq sql feow iewp  eowopw op wwir  jwwp  jerrtoe wpww  orogovvssv ryjuookj yysvbgtjui rrtfdd",
    },
    {
      name: "Rishabh kushwah",
      stars: 4.5,
      img: reviews2,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    },
    {
      name: "unknow users",
      stars: 4.5,
      img: reviews3,
      review:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.",
    },
  ];

  return (
    <>
      <section className="w-screen justify-center items-center tablet:items-start flex gap-4 mobile:gap-8 mt-4 mobile:mt-12 tablet:mt-24 flex-col tablet:flex-row">
      <div className=" flex h-fit flex-col-reverse tablet:flex-row w-10/12 tablet:w-7/12 gap-2 mobile:gap-6">
        <div className="tablet:w-2/12 flex flex-row  gap-2 tablet:gap-0 tablet:flex-col w-full  justify-between">
          <div className="h-10/12">
            <img
              src={product1}
              onClick={() => handleImage(product1)}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="h-10/12">
            <img
              src={product2}
              onClick={() => handleImage(product2)}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="h-10/12">
            <img
              src={product3}
              onClick={() => handleImage(product3)}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="h-10/12">
            <img
              src={product4}
              onClick={() => handleImage(product4)}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="h-10/12">
            <img
              src={product5}
              onClick={() => handleImage(product5)}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="w-full ">
          <img
            src={currentImage}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
      </div>

      <div className="w-10/12 tablet:w-3/12">
        <h1 className="heading1 mt-4 mb-6">Nike Shoes</h1>
        <h5>
          <span className="font-bold  text-2xl">$99</span>{" "}
          <span className="text-gray-500 font-semibold line-through">$299</span>
        </h5>
        <p className="text-gray-500 my-6">
          This Shoes is comfortable for wearing for men. imperdiet nulla
          molestie ac vulputate scelerisque amet. Bibendum adipiscing platea
          blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat
          eu tortor orci.
        </p>
        <h5 className="underline">Color:</h5>
        <p className="flex gap-4 mb-6">
          <span>Green</span> <span>orange</span> <span>Red</span>{" "}
          <span>Black</span>
        </p>
        <h5 className="underline">Size:</h5>
        <p className="flex gap-4 mb-6">
          <span>XL</span> <span>L</span> <span>M</span> <span>S</span>
        </p>
        <p className="mb-6">12 in stock</p>
        <div className="flex  border border-grey-500 bg-gray-200 w-fit rounded mb-6">
          <button
            className="w-10 h-10 "
            onClick={() => handleQuantity("minus")}
          >
            {" "}
            -{" "}
          </button>
          <p className="w-10 h-10  flex bg-white justify-center items-center">
            {quantity}
          </p>
          <button className="w-10 h-10 " onClick={() => handleQuantity("plus")}>
            {" "}
            +{" "}
          </button>
        </div>
        <div className="">
          <button className="button bg-black text-white mr-4">BUY NOW</button>
          <button className="button   border border-grey-500 mb-6">
            ADD TO CART
          </button>
          <div className="flex items-center gap-5 mb-4">
            <h5 className="underline">PRODUCT ID :</h5> <p>1223</p>
          </div>
          <div className="flex items-center gap-5 mb-4">
            <h5 className="underline">Category :</h5> <p>Men, Casual,</p>
          </div>
          <div className="flex items-center gap-5 mb-4">
            <h5 className="underline">Tags :</h5> <p>Classic, Modern</p>
          </div>
        </div>
      </div>
    </section>
      <section className="w-full mobile:w-10/12 mt-8 mx-auto">
        <div className="flex gap-1 mobile:gap-5 items-center justify-center">
          <p
            className={`py-2 px-2 mobile:px-4 text-sm mobile:text-xl ${currentScreen === "Reviews" ? "text-white bg-black" : ""}`}
            onClick={() => handleScreen("Reviews")}
          >
            Reviews
          </p>
          <p
            className={`py-2 px-2 mobile:px-4 text-sm mobile:text-xl ${currentScreen === "Description" ? "text-white bg-black" : ""}`}
            onClick={() => handleScreen("Description")}
          >
            Description
          </p>
          <p
           className={`py-2 px-2 mobile:px-4 text-sm mobile:text-xl ${currentScreen === "additional" ? "text-white bg-black" : ""}`}
            onClick={() => handleScreen("additional")}
          >
            Additional Info
          </p>
        </div>
        <hr className="border border-black" />
        <div className="py-2 mobile:py-6 leading-5 mobile:leading-8 px-4 text-gray-500">
          {currentScreen === "Description" && (
            <div>
              <p className="mb-2">Product Description</p>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna viverra non, semper suscipit, posuere
                a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci. Aenean dignissim pellentesque
                felis. Phasellus ultrices nulla quis nibh. Quisque a lectus.
                Donec consectetuer ligula vulputate sem tristique cursus.
              </p>
              <ul className="mb-2 list-disc w-11/12 mx-auto">
                <li className="mr-6">
                  Donec nec justo eget felis facilisis fermentum.
                </li>
                <li>Suspendisse urna viverra non, semper suscipit pede.</li>
                <li>Aliquam porttitor mauris sit amet orci.</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna viverra non, semper suscipit, posuere
                a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci. Aenean dignissim pellentesque
                felis. Phasellus ultrices nulla quis nibh. Quisque a lectus.
                Donec consectetuer ligula vulputate sem tristique cursus.
              </p>
            </div>
          )}
          {currentScreen === "additional" && (
            <div>
              <p className="mb-2"> It is Comfortable and Best</p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          )}
          {currentScreen === "Reviews" && (
            <div className="w-full flex justify-between flex-wrap">
              {reviewData.map((review, index) => (
                <div key={index} className="w-full tablet:w-6/12 flex gap-3 leading-5 mb-8">
                  <div className="w-16 h-16 mobile:w-24 mobile:h-24 rounded-full overflow-hidden">
                    <img
                      className="w-full object-cover"
                      src={review.img}
                      alt=""
                    />
                  </div>
                  <div className="w-9/12 h-auto text-pretty text-black uppercase text-xl">
                    <h4>{review.name}</h4>
                    <p className="text-yellow-500 text-sm font-boldFont flex items-center gap-2 mb-3">
                      {review.stars}/5 <FaStar className="text-lg" />
                    </p>
                    <p className="text-sm">{review.review}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* {currentScreen === "Reviews" && (
            <div className="w-7/12 mx-auto ">
              <h5 className="text-black text-center text-3xl">Add a review</h5>
              <p className="text-center">
                Your email address will not be published. Required fields are
                marked{" "}
              </p>
              <form onSubmit={handlesubmit}>
               <div className="w-full">
               <label className="text-black" htmlFor="stars">Your rating</label>
                <select className="w-8 h-8 mr-4 ml-8 border border-black" id="stars">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <br />
                <input className="my-5" type="file" accept="image/jpeg, image/png"/>
               </div>
                <label htmlFor="title" className="text-black">Enter title</label>
                <input className="input mb-3" type="text" id="title" required />
                <label htmlFor="review" className="text-black">Enter Review</label>
                <input className=" h-24 w-full border-2 border-gray-500 mb-3" type="textarea" id="review" required/>

                <button type="submit" className="button bg-black text-white">Submit Review</button>

              </form>
            </div>
          )} */}
        </div>
      </section>
    </>
  );
}

export default ProductPage;
