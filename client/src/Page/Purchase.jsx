import React from "react";
import { useAuth } from "../Context/authContext";
import { useSelector, useDispatch } from "react-redux";
import CheckoutCart from "../Components/CheckoutCart";
import Address from "../Components/Address";

function Purchase() {
  const cartList = useSelector((state) => state.cart);

  const isLoaded = () => {
    if (cartList && cartList.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <section className="bg-gray-100 py-12 px-16 flex">
      {/* Code in cart is empty */}
      {isLoaded() === false && "Cart is empty"}

      {/* code of cart is filled */}
      {isLoaded() === true && (
      //  <CheckoutCart/>
      <Address/>
      )}
      <div className="w-3/12">
        <p>Price Details</p>
        <p><span>Total Items</span><span>{cartList.length}</span></p>
        <p><span>Total Price</span><span>{cartList.length}</span></p>
      
        <p><span>Delivery Charges</span><span>{cartList.length}</span></p>
        <p>Have Promo Code apply here</p>
        <div><input type="text"/><button>Apply</button></div>
        <p><span>Total Amount</span><span>{cartList.length}</span></p>

      </div>
    </section>
  );
}

export default Purchase;
