import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function ProfileCard({val}) {
  return (
    <>
    <div className='max-w-3/12 overflow-hidden aspect-[2/2.5] relative group'>
        <img src={val.profileIMG} alt={`${val.name} prfile IMG`} className='w-full h-full object-cover'/>
        <div className='absolute w-full flex justify-center gap-3  top-full text-2xl  group-hover:top-3/4 transition-all duration-1000'>
          <div className='bg-white rounded-md p-3 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity delay-300 duration-1000'><FaLinkedinIn /></div>
          <div className='bg-white rounded-md p-3 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity delay-300 duration-1000'><FaTwitter /></div>
          <div className='bg-white rounded-md p-3 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity delay-300 duration-1000'><FaInstagram /></div>
        </div>
    </div>
    <h4 className='text-2xl mt-4 font-semibold'>{val.name}</h4>
    <p className='text-lg'>{val.post}</p>
    </>
  )
}

export default ProfileCard