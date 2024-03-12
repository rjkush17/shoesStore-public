import React, { useState } from "react";
import { FaXTwitter, FaBarsStaggered } from "react-icons/fa6";
import { FaInstagram, FaPinterest, FaYoutube, FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../images/img/logo.png";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../Context/authContext"
import UserBox from "../assets/UserBox"


function Header({handleLoginopen, handleCartOpen, handleProfileOpen}) {
  
  const navigate = useNavigate();
  const {userDetails} = useAuth();

  //function for open/close nav panel
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className=" text-normal pt-3 overflow-hidden w-full bg-white z-40 fixed top-0">
        <section className="flex items-center	justify-between px-2 mobile:px-8">
          <div className="flex gap-3 text-2xl">
            <FaXTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaPinterest />
          </div>
          <p className="hidden tablet:block">
            <span className="font-[600]">Special Offer: </span>Free Shipping on
            all the orders above $250
          </p>
          <div className="flex items-center	justify-between gap-3 text-2xl">
           { !userDetails &&  <FaRegUser onClick={handleLoginopen} className=""/>}
           { userDetails && <UserBox user={userDetails.username} handleProfileOpen={handleProfileOpen}/>}
            <HiOutlineShoppingCart onClick={handleCartOpen} />
            <FiSearch />
          </div>
        </section>

        <hr className="mt-3" />

        <nav className="h-12 flex items-center cols justify-between flex-col tablet:flex-row overflow-hidden">
          <div className="flex items-center justify-between w-full  px-2 mobile:px-8">
            <img src={logo} className="h-12"  onClick={()=>navigate("/")}/>
            <div
              className="ml-auto flex items-center text-2xl tablet:hidden"
              onClick={handleNav}
            >
              <FaBarsStaggered />
            </div>
          </div>
          <ul className={`nav-side-panel  ${isOpen ? "open" : ""}`}>
  
           {isOpen ? (
              <li className="nav-li">
                <div className="flex items-center justify-between w-full  px-4">
                  <img src={logo} className="h-18" />
                  <div
                    className="ml-auto flex items-center text-2xl tablet:hidden"
                    onClick={handleNav}
                  >
                    <IoCloseSharp onClick={handleNav} className="text-4xl" />
                  </div>
                </div>
              </li>
            ) : (
              ""
            )}
            <li className="nav-li" onClick={()=>navigate("/")}>HOME</li>
            <li className="nav-li" onClick={()=>navigate("/shop/men")}>MEN</li>
            <li className="nav-li" onClick={()=>navigate("/shop/women")}>WOMEN</li>
            <li className="nav-li"  onClick={()=>navigate("/shop/all")}>SHOP</li>
            <li className="nav-li">ABOUT</li>
            <li className="nav-li">BLOG</li>
      
          </ul>
        </nav>
      </header>

      <p className="block text-xs mobile:text-normal my-2 tablet:hidden text-center">
        <span className="font-[600]">Special Offer: </span>Free Shipping on all
        the orders above $100
      </p>
    </>
  );
}

export default Header;
