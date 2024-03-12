import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart, addQun, minusQun } from "../store/slices/cart";
import emptyCart from "../images/GIF/emptyCart.gif";
import {subTotal} from '../assets/subtotal'

function Cart({ handleCartOpen }) {
  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");

    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []);

  const cartList = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const sub = subTotal(cartList)

  return (
    <>
      <div className="w-screen h-screen bg-[rgba(0,0,0,0.3)] flex justify-center items-center top-0 z-50 fixed overflow-hidden">
        <section className="bg-white text-lg  rounded-md px-4 max-w-[500px] mobile:w-[500px] h-screen mobile:h-auto">
          <div className="flex py-4 ">
            <p className="font-bold">Cart</p>
            <IoCloseSharp
              className="text-black text-3xl ml-auto"
              onClick={handleCartOpen}
            />
          </div>
          <hr />

          {cartList.length <= 0 ? (
            <div className="w-full my-12 mobile:my-6">
              <img src={emptyCart} alt="" className="mx-auto" />
              <p className="text-sm text-center">
                Looks like you haven’t added anything to your cart yet.
              </p>
            </div>
          ) : (
            <div className="py-4 overflow-y-auto max-h-[500px] mobile:max-h-[350px]">
              {cartList.map((val, ind) => (
                <section key={ind}>
                  <div className="flex gap-6 mt-3 ">
                    <div className="max-w-20 max-h-20 overflow-hidden aspect-square">
                      <img src={val.image} alt="img" className="w-full" />
                    </div>
                    <div className="w-full pr-3">
                      <div className="flex items-center justify-between">
                        <p className="font-medium	">{val.title} </p>
                        <div onClick={() => dispatch(deleteCart(val._id))}>
                          <IoCloseSharp className="text-black text-2xl ml-auto" />
                        </div>
                      </div>
                      <div className="flex mt-4 justify-between">
                        <div className="flex border border-grey-500 bg-gray-200 w-fit rounded mb-6">
                          <button
                            className="w-10 h-8 "
                            onClick={() => dispatch(minusQun(val._id))}
                          >
                            {" "}
                            -{" "}
                          </button>
                          <p className="w-10 h-8  flex bg-white justify-center items-center">
                            {val.pcs}
                          </p>
                          <button
                            onClick={() => dispatch(addQun(val._id))}
                            className="w-10 h-8 "
                          >
                            {" "}
                            +{" "}
                          </button>
                        </div>
                        <p>${val.price}</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                </section>
              ))}
            </div>
          )}

          {/* Sub Total */}
          <div className="flex justify-between px-3 mb-4">
            <span>Sub Total</span>
            <span>${sub}</span>
          </div>
          <hr />

          {cartList.length <= 0 ?  <p className="button text-white bg-gray-500 my-6 mx-auto w-fit" onClick={()=>alert("Your cart is empty. Please add products before checking out.")}>
            Purchase
          </p> :
           <p className="button text-white bg-red-500 my-6 mx-auto w-fit">
           Purchase
         </p>
          }
         
        </section>
      </div>
    </>
  );
}

export default Cart;
