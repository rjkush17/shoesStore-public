import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addCart } from "../store/slices/cart";

function ProductCard({ val }) {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const hanndleAddCart = () =>{
    const ProductData = {
        _id: val._id,
        title: val.title,
        image: val.images[0].front ,
        price: val.selling_price,
        pcs: 1,
    }
    dispatch(addCart(ProductData))
  }

  return (
    <div className=" group  mx-auto cursor-pointer">
    <div className="max-w-64 max-h-64 min-w-24 min-h-24 mx-auto overflow-hidden aspect-square relative">
      <img
        src={val.images[0].front}
        className="w-full h-full object-cover"
        alt={val.homeList}
        loading="lazy"
      />

      <div className=" absolute top-full w-full h-full  flex justify-center gap-4 pt-36 group-hover:top-0 transition-all duration-1000 ">

       <div className="bg-white w-14 h-14 rounded-full flex justify-center items-center shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity delay-500 duration-500 active:scale-95"> 
        <AiOutlineShopping className="text-3xl"  onClick={() => navigate(`/productpage/${val._id}`)} />
        </div>
        <div onClick={hanndleAddCart} className="bg-white w-14 h-14 rounded-full flex justify-center items-center shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity delay-500 duration-500 active:scale-95">
        <FaCartPlus  className="text-3xl"/>
        </div>
      </div>
    </div>
    <div className="w-full flex justify-between my-4 text-lg">
      <p className="truncate w-9/12">{val.title}</p>{" "}
      <span className="font-bold">${val.selling_price}</span>
    </div>
  </div>
  
  );
}

export default ProductCard;
