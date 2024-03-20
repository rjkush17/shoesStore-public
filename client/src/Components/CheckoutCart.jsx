import React from 'react'
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {  deleteCart, addQun, minusQun }  from "../store/slices/cart";



function CheckoutCart({handleOrder, handleStage}) {

    const cartList = useSelector((state) => state.cart);

    const dispatch = useDispatch()

    const handleCart = () =>{
      handleOrder("items", cartList)
      handleStage(2)
    }

  return (
    <section className="w-full mobile:w-9/12 flex flex-col  mobile:gap-2" >
    {/* <h2>Checkout Products</h2> */}

    <div className='bg-white py-3 text-center text-2xl font-medium '>Checkout Cart</div>

    {cartList.map((val, ind) => (
      <div key={ind} className="flex bg-white ">
        <div className="w-32 mobile:w-40 p-4 aspect-square">
          <img src={val.image} alt="" />
        </div>
        <div className='py-3'>
          <h2 className='text- mobile:text-2xl font-semibold hover:underline mb-1 mobile:mb-3'onClick={() => window.open(`/productpage/${val._id}`, '_blank')}>{val.title}</h2>
         

          <div className='flex gap-2 mobile:gap-4 items-center'>
            <div className="flex border border-grey-500 bg-gray-200 w-fit rounded h-fit">
              <button
                className="w-10 h-8 "
                onClick={() => dispatch(minusQun(val._id))}
              >
                {" "}
                -{" "}
              </button>
              <p className="w-10 h-8 flex bg-white justify-center items-center">
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
            <button onClick={() => dispatch(deleteCart(val._id))} className='button bg-gray-200 text-xl text-black hover:bg-red-400 hover:text-white'><MdDelete /></button>
          </div>
          <p className='text-sm mobile:text-normal'>Price of Single - ${val.price}</p>
          <p className='text-sm mobile:text-normal'>Your total Quantity Price - ${val.price * val.pcs}</p>
        </div>
      </div>
    ))}
    <button className='button bg-red-400 text-white w-fit mx-auto mt-4' onClick={handleCart}>Process For Payment</button>
  </section>
  )
}

export default CheckoutCart