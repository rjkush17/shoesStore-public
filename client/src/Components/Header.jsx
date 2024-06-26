import React, { useEffect, useState } from "react";
import { FaXTwitter, FaBarsStaggered } from "react-icons/fa6";
import { FaInstagram, FaPinterest, FaYoutube, FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../images/img/logo.png";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../Context/authContext"
import UserBox from "../assets/UserBox"


function Header({handleLoginopen, handleCartOpen, handleProfileOpen, handleSearchOpen}) {
  
  const navigate = useNavigate();
  const {userDetails} = useAuth();

 //function for open/close nav panel
 const [isOpen, setIsOpen] = useState(false);
 const handleNav = () => {
   setIsOpen(!isOpen);
 };

  // useEffect(()=>{
  //   if(isOpen){
  //     document.body.classList.add("overflow-y-hidden");
  //     document.body.classList.add("mobile:overflow-y-auto");
  //   }else{
  //       document.body.classList.remove("overflow-y-hidden");
  //       document.body.classList.remove("mobile:overflow-y-auto");
  //   }
  // },[isOpen])

  const handleNavigation = (path) =>{
    setIsOpen(!isOpen)
    navigate(path)
  }

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
           { !userDetails &&  <FaRegUser onClick={handleLoginopen} className="cursor-pointer"/>}
           { userDetails && <UserBox user={userDetails.username} handleProfileOpen={handleProfileOpen} className="cursor-pointer	"/>}
            <HiOutlineShoppingCart onClick={handleCartOpen} className="cursor-pointer	" />
            <FiSearch onClick={handleSearchOpen} className="cursor-pointer	" />
          </div>
        </section>

        <hr className="mt-3" />

        <nav className="h-12 flex items-center mobile:my-4 cols justify-between flex-col tablet:flex-row overflow-hidden" >
          <div className="flex items-center justify-between w-full  px-2 mobile:px-8">
            <img src={logo} className="h-12 cursor-pointer"  onClick={()=>navigate("/")}/>
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
            <li className="nav-li" onClick={()=>handleNavigation("/")}>HOME</li>
            <li className="nav-li" onClick={()=>handleNavigation("/shop/men")}>MEN</li>
            <li className="nav-li" onClick={()=>handleNavigation("/shop/women")}>WOMEN</li>
            <li className="nav-li" onClick={()=>handleNavigation("/shop/all")}>SHOP</li>
            <li className="nav-li" onClick={()=>handleNavigation("/about")}>ABOUT</li>
            <li className="nav-li" onClick={()=>handleNavigation("/blog")}>BLOG</li>
          </ul>
        </nav>
      </header>

      <p className="block text-xs mobile:text-normal my-2 tablet:hidden text-center">
        <span className="font-[600]">Special Offer: </span>Free Shipping on all
        the orders above $250
      </p>
    </>
  );
}

export default Header;
