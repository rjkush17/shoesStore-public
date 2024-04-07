import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/authContext";
import { useSelector, useDispatch } from "react-redux";
import CheckoutCart from "../Components/CheckoutCart";
import Address from "../Components/Address";
import Payment from "../Components/Payment";
import { subTotal } from "../assets/subtotal";
import orderIMG from "../images/purchase/order.jpg";
import emptyCart from "../images/GIF/emptyCart.gif";
import reqLogin from "../images/purchase/reqLogin.jpg";
import { useNavigate } from "react-router-dom";
//animation librarly
import AOS from "aos";
import "aos/dist/aos.css";


function Purchase({ handleLoginopen }) {
  const navigate = useNavigate();
  const { userDetails } = useAuth();
  const cartList = useSelector((state) => state.cart);
 
  useEffect(()=>{
    document.title = "Purchase Your Product"
    window.scrollTo(0, 0);
    AOS.init({ offset: 200, duration: 600 });
  },[])

  const isLoaded = () => {
    if (cartList && cartList.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  // function for component stage
  const [stage, setStage] = useState(1);
  const handleStage = (n) => {
    setStage(n);
  };

  // function for collect order details
  const [order, setOrder] = useState({
    items: "",
    address: "",
    Payment: "",
  });

  const handleOrder = (part, value) => {
    setOrder((prev) => ({
      ...prev,
      part: value,
    }));
  };

  //subtotal function
  const total = subTotal(cartList || 0);
  //delevey charge function
  const deliveryFee = (total) => {
    return total > 250 ? 0 : 25;
  };

  return (
    <section className="bg-gray-100 py-12 px-6 tablet:px-16 flex flex-col-reverse mobile:flex-row">
      {/* code of cart is filled */}

      {userDetails && isLoaded() === true  && stage === 1 && (
        <CheckoutCart handleOrder={handleOrder} handleStage={handleStage} />
      )}
      {userDetails && isLoaded() === true && stage === 2 && (
        <Address handleOrder={handleOrder} handleStage={handleStage} />
      )}
      {userDetails && isLoaded() === true && stage === 3 && (
        <Payment handleOrder={handleOrder} handleStage={handleStage} />
      )}

        {/* Screen if user login */}
      {!userDetails && (
        <section className="w-full text-center bg-white py-10">
          <p className="text-xl mobile:text-2xl tablet:text-4xl font-semibold">
            Login to Continues Shop
          </p>

          <div className="w-64 mobile:w-96 tablet:w-[450px] mx-auto">
            <img
              src={reqLogin}
              alt="Order Img"
              className="w-full object-cover"
            />
          </div>
          <p className="mobile:text-2xl mb-6 px-4">
            "Log in now to continue shopping!"
          </p>
          <div className="flex gap-4 justify-center">
            <button
              className="button bg-red-400 text-white"
              onClick={handleLoginopen}
            >
              Sing IN/UP
            </button>
          </div>
        </section>
      )}

      {/* Code in cart is empty */}
      {isLoaded() === false && userDetails && stage !== "done" && (
        <section className="w-full text-center bg-white py-10">
          <p className="text-xl mobile:text-2xl tablet:text-4xl font-semibold">
            Your Cart is empty
          </p>

          <div className="w-64 mobile:w-96 tablet:w-[450px] mx-auto">
            <img
              src={emptyCart}
              alt="Order Img"
              className="w-full object-cover"
            />
          </div>
          <p className="mobile:text-2xl mb-6 px-4">
            "Looks like you haven’t added anything to your cart yet."
          </p>
          <div className="flex gap-4 justify-center">
            <button
              className="button bg-red-400 text-white"
              onClick={() => navigate("/")}
            >
              Go Home
            </button>
            <button
              className="button bg-red-400 text-white"
              onClick={() => navigate("/shop/all")}
            >
              Shop More
            </button>
          </div>
        </section>
      )}

      {isLoaded() === false && userDetails && stage === "done" && (
        <section className="w-full text-center bg-white py-10">
          <p className="text-xl mobile:text-2xl tablet:text-4xl font-semibold">
            Thanks for Purchase💖{" "}
          </p>
          <div className="w-64 mobile:w-96 tablet:w-[450px] mx-auto">
            <img
              src={orderIMG}
              alt="Order Img"
              className="w-full object-cover"
            />
          </div>
          <p className="mobile:text-2xl mb-6">
            "Your order will be delivered in a week."
          </p>
          <div className="flex gap-4 justify-center">
            <button
              className="button bg-red-400 text-white"
              onClick={() => navigate("/")}
            >
              Go Home
            </button>
            <button
              className="button bg-red-400 text-white"
              onClick={() => navigate("/shop/all")}
            >
              Shop More
            </button>
          </div>
          
        </section>
      )}

      {isLoaded() === true && userDetails && stage !== "done" && (
        <div className="w-full  mobile:w-5/12 mb-6 mobile:mb-0 tablet:w-3/12 mobile:ml-6 bg-white text-lg h-fit">
          <p className="text-center my-2 text-xl">Price Details</p>
          <hr />
          <div className="grid grid-cols-2 px-4 justify-between leading-9 mt-4">
            <span>Total Items</span>
            <span className="text-end">{cartList.length}</span>
            <span>Total Price</span>
            <span className="text-end">{total}</span>

            <span>Delivery fee</span>
            <span className="text-end">${deliveryFee(total)}</span>
          </div>

          <p className="text-sm text-center mt-6">
            Have Promo Code ? apply here
          </p>
          <div className="flex w-11/12 mx-auto">
            <input type="text" className="input" />
            <button
              className="button bg-red-400 text-white"
              onClick={() => alert("Invalid Code")}
            >
              Apply
            </button>
          </div>
          <hr className="my-2" />
          <p className="grid grid-cols-2 px-4 justify-between leading-9 mt-4 mb-2">
            <span>Total Amount</span>
            <span className="text-end">{total + deliveryFee(total)}</span>
          </p>
        </div>
      )}
    </section>
  );
}

export default Purchase;
