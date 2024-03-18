import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addCart, clearCart, deleteCart, addQun, minusQun }  from "../store/slices/cart";
import { useNavigate } from "react-router-dom";


function CheckoutCart() {

    const cartList = useSelector((state) => state.cart);
    const dispatch = useDispatch()

  return (
    <section className="w-9/12 flex flex-col gap-2" >
    {/* <h2>Checkout Products</h2> */}

    {cartList.map((val, ind) => (
      <div key={ind} className="flex bg-white ">
        <div className="w-40 p-4 aspect-square">
          <img src={val.image} alt="" />
        </div>
        <div className='py-3'>
          <h2 className='text-2xl font-semibold hover:underline mb-3'onClick={() => window.open(`/productpage/${val._id}`, '_blank')}>{val.title}</h2>
         

          <div className='flex gap-4 items-center'>
            <div className="flex border border-grey-500 bg-gray-200 w-fit rounded h-fit">
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
            <button onClick={() => dispatch(deleteCart(val._id))} className='button bg-gray-200 text-black hover:bg-red-400 hover:text-white'>Remove</button>
          </div>
          <p>Price of Single - ${val.price}</p>
          <p>Your total Quantity Price - ${val.price * val.pcs}</p>
        </div>
      </div>
      
    ))}
  </section>
  )
}

export default CheckoutCart