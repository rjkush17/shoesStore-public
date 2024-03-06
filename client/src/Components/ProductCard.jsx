import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

function ProductCard({ val }) {
  
  const navigate = useNavigate();

  return (
    <div className=" group  mx-auto cursor-pointer" onClick={() => navigate(`/productpage/${val._id}`)}>
    <div className="max-w-64 max-h-64 min-w-24 min-h-24 mx-auto overflow-hidden aspect-square relative">
      <img
        src={val.images[0].front}
        className="w-full h-full object-cover"
        alt={val.homeList}
      />

      <div className=" absolute top-full w-full h-full  flex justify-center gap-4 pt-36 group-hover:top-0 transition-all duration-1000">

       <div className="bg-white w-14 h-14 rounded-full flex justify-center items-center shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity delay-500 duration-500"> 
        <AiOutlineShopping className="text-3xl" />
        </div>
        <div className="bg-white w-14 h-14 rounded-full flex justify-center items-center shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity delay-500 duration-500">
        <FiSearch className="text-3xl"/>
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
