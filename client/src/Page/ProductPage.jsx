import React, { useEffect, useState } from "react";
import reviews1 from "../assets/reviews/review-item1.jpg";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useListingData } from "../hook/useListingData";

function ProductPage() {
  const { productID } = useParams();
  const { isLoading, errors, listingData, fetchData } = useListingData();

  useEffect(() => {
    fetchData(productID);
      //scroll to top when open page
  window.scrollTo(0, 0)
  }, []);

  console.log(listingData);

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
 
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {

    if (Array.isArray(listingData.images) && listingData.images.length > 0) {
      setCurrentImage(Object.values(listingData.images[0]).find(url => typeof url === "string" && url.startsWith("http")));
    }
  }, [listingData.images]);

  // Function to update the main image
  const handleImage = (imgUrl) => {
    setCurrentImage(imgUrl);
  };

  //function for change switch screen between additional info, description and reviews
  const [currentScreen, setCurrentScreen] = useState("Reviews");
  const handleScreen = (screen) => {
    setCurrentScreen(screen);
  };

  //function for submitting review
  const handlesubmit = (e) => {
    e.preventDefault();
    alert("Review Submiited for checking % it will show after QC progess");
  };


  return (
    <>
      {isLoading && <p>fetching lsiting Data ....</p>}
      {errors && <p>{errors.error}</p>}
      {!errors && listingData && (
        <div>
          <section className="w-full justify-center items-center tablet:items-start flex gap-4 mobile:gap-8 mt-4 mobile:mt-12 tablet:mt-24 flex-col tablet:flex-row">
            {/* //image render code */}
            <div className="flex h-fit flex-col-reverse tablet:flex-row w-10/12 tablet:w-7/12 gap-2 mobile:gap-6">
      {/* Thumbnails */}
      <div className="tablet:w-2/12 flex flex-row gap-2 tablet:gap-0 tablet:flex-col w-full justify-between">
        {Array.isArray(listingData.images) &&
          listingData.images.length > 0 &&
          Object.values(listingData.images[0])
            .filter(
              (imageUrl) =>
                typeof imageUrl === "string" &&
                imageUrl.startsWith("http")
            )
            .map((imageUrl, index) => (
              <div key={index} className="h-10/12 cursor-pointer">
                <img 
                  src={imageUrl}
                  onClick={() => handleImage(imageUrl)}
                  className="h-full w-full object-cover aspect-square	"
                  alt=""
                />
              </div>
            ))}
      </div>
      {/* Main Image */}
      <div className="w-full">
        <img
          src={currentImage}
          className="h-full w-full object-cover aspect-square	"
          alt="Selected Product"
        />
      </div>
    </div>

            {/* //product details code */}
            <div className="w-10/12 tablet:w-3/12">
              <h1 className="heading1 leading-9 mt-4 mb-6">{listingData.title}</h1>
              <h5>
                <span className="font-bold  text-2xl">
                  ${listingData.selling_price}
                </span>{" "}
                <span className="text-gray-500 font-semibold line-through">
                  ${listingData.mrp}
                </span>
              </h5>
              <p className="text-gray-500 my-6">{listingData.description}</p>
              <h5 className="underline">Color:</h5>
              <p className="flex gap-4 mb-6">
                <span>Green</span> <span>orange</span> <span>Red</span>{" "}
                <span>Black</span>
              </p>
              <h5 className="underline">Size:</h5>
              <p className="flex gap-4 mb-6">
                <span>XL</span> <span>L</span> <span>M</span> <span>S</span>
              </p>
              <p className="mb-6">{listingData.stocks} in stock</p>
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
                <button
                  className="w-10 h-10 "
                  onClick={() => handleQuantity("plus")}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
              <div className="">
                <button className="button bg-black text-white mr-4">
                  BUY NOW
                </button>
                <button className="button   border border-grey-500 mb-6">
                  ADD TO CART
                </button>
                <div className="flex items-start  gap-5 mb-4">
                  <h5 className="underline">PRODUCT ID :</h5>{" "}
                  <p className="">{listingData.productID}</p>
                </div>
                <div className="flex items-star gap-5 mb-4">
                  <h5 className="underline">Category :</h5>{" "}
                  <div>
                    {!errors &&
                      Array.isArray(listingData.categories) &&
                      listingData.categories.map((category, index) => (
                        <p key={index} className="mb-2">
                          {category}
                        </p>
                      ))}
                  </div>
                </div>
                <div className="flex items-start gap-5 mb-4">
                  <h5 className="underline">Tags :</h5>{" "}
                  <div>
                    {" "}
                    {!errors &&
                      Array.isArray(listingData.label) &&
                      listingData.label.map((label, index) => (
                        <p className="mb-2" key={index}>
                          {label}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full mobile:w-10/12 mt-8 mx-auto">
            <div className="flex gap-1 mobile:gap-5 items-center justify-center">
              <p
                className={`py-2 px-2 mobile:px-4 text-sm mobile:text-xl ${
                  currentScreen === "Reviews" ? "text-white bg-black" : ""
                }`}
                onClick={() => handleScreen("Reviews")}
              >
                Reviews
              </p>
              <p
                className={`py-2 px-2 mobile:px-4 text-sm mobile:text-xl ${
                  currentScreen === "Description" ? "text-white bg-black" : ""
                }`}
                onClick={() => handleScreen("Description")}
              >
                Description
              </p>
              <p
                className={`py-2 px-2 mobile:px-4 text-sm mobile:text-xl ${
                  currentScreen === "additional" ? "text-white bg-black" : ""
                }`}
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
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis
                    facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                    Aenean dignissim pellentesque felis. Phasellus ultrices
                    nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
                    vulputate sem tristique cursus.
                  </p>
                  <ul className="mb-2 list-disc w-11/12 mx-auto">
                    <li className="mr-6">
                      Donec nec justo eget felis facilisis fermentum.
                    </li>
                    <li>Suspendisse urna viverra non, semper suscipit pede.</li>
                    <li>Aliquam porttitor mauris sit amet orci.</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis
                    facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                    Aenean dignissim pellentesque felis. Phasellus ultrices
                    nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
                    vulputate sem tristique cursus.
                  </p>
                </div>
              )}
              {currentScreen === "additional" && (
                <div>
                  <p className="mb-2"> It is Comfortable and Best</p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                </div>
              )}
              {currentScreen === "Reviews" && (
                <div className="w-full flex justify-between flex-wrap ">
                  {!errors &&
                    Array.isArray(listingData.reviews) &&
                    listingData.reviews.map((val, index) => (
                      <div
                        key={index}
                        className="w-full tablet:w-6/12 flex gap-3 leading-5 mb-8"
                      >
                        <div className="w-16 h-16 mobile:w-24 mobile:h-24 rounded-full overflow-hidden">
                          <img
                            className="w-full object-cover"
                            src={reviews1}
                            alt=""
                          />
                        </div>
                        <div className="w-9/12 h-auto text-pretty text-black uppercase text-xl">
                          <h4>{val.profile}</h4>
                          <p className="text-yellow-500 text-sm font-boldFont flex items-center gap-2 mb-3">
                            {val.star}/5 <FaStar className="text-lg" />
                          </p>
                          <p className="text-sm">{val.review}</p>
                        </div>
                      </div>
                    ))}
                </div>
              )}
              {currentScreen === "Reviews" && (
                <div className="w-full mobile:w-7/12 mx-auto  text-sm mobile:text-normal">
                  <h5 className="text-black text-center text-xl mobile:text-3xl">
                    Add a review
                  </h5>
                  <p className="text-center ">
                    Your email address will not be published. Required fields
                    are marked{" "}
                  </p>
                  <form onSubmit={handlesubmit}>
                    <div className="w-full">
                      <label className="text-black" htmlFor="stars">
                        Your rating
                      </label>
                      <select
                        className=" mobile:w-8 h-8 mr-4 ml-8 border border-black"
                        id="stars"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <br />
                      <input
                        className="my-5 w-full"
                        type="file"
                        accept="image/jpeg, image/png"
                      />
                    </div>
                    <label htmlFor="title" className="text-black">
                      Enter title
                    </label>
                    <input
                      className="input mb-3"
                      type="text"
                      id="title"
                      required
                    />
                    <label htmlFor="review" className="text-black">
                      Enter Review
                    </label>
                    <input
                      className=" h-24 w-full border-2 border-gray-500 mb-3"
                      type="textarea"
                      id="review"
                      required
                    />

                    <button
                      type="submit"
                      className="button bg-black text-white"
                    >
                      Submit Review
                    </button>
                  </form>
                </div>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default ProductPage;
