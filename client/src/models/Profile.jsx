import React, { useEffect } from "react";
import prolfileIMG from "../images/img/userProfile.png";
import { useAuth } from "../Context/authContext";
import { IoCloseSharp } from "react-icons/io5";
//animation librarly
import AOS from "aos";
import "aos/dist/aos.css";

function Profile({ handleProfileOpen }) {
  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");
    AOS.init({ offset: 200, duration: 600 });

    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []);

  const { userDetails, dispatch } = useAuth();
  const createdProfile = userDetails.createdAt.slice(0, 10);

  const handleLogout = ()=>{
    localStorage.removeItem("userDetails")
    dispatch({type:'LOGOUT'});
    handleProfileOpen()
  }

  return (
    <>
      <div className="w-screen text-center h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center top-0 z-50 fixed overflow-hidden">
    
         <section className="bg-white text-gray-400 h-screen text-lg mobile:h-auto p-4 max-w-full tablet:min-w-56 rounded-md" data-aos="fade-up">
         <p className="text-white w-fit mt-16 mobile:mt-auto ml-auto" onClick={handleProfileOpen}>
            <IoCloseSharp className="text-black text-3xl" />
          </p>
          <p className="text-3xl pb-6 text-center text-black">My Profile</p>
          <div className="w-4/12 mb-6 mx-auto">
            <img src={prolfileIMG} alt="" className="object-cover w-full"/>
          </div>
          <p  className="mt-2">
            <span className="text-black font-semibold">Username : </span> {userDetails.username}
          </p>
          <p  className="mt-2">
            <span className="text-black font-semibold">email ID: </span> {userDetails.email}
          </p>
          <p  className="mt-2">
            <span className="text-black font-semibold">User ID : </span> {userDetails._id}
          </p>
          <p className="mt-2">
            <span className="text-black font-semibold ">Proflie Create at :</span> {createdProfile}
          </p>
          <button onClick={handleLogout} className=" mt-8 button bg-red-500 text-white">LOGOUT</button>
         </section>
        </div>
    </>
  );
}

export default Profile;
