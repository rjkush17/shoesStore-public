import React from 'react'
import userProfile from '../images/img/userProfile.png'
import { useAuth } from '../Context/authContext'

function userBox({user}) {

  const {dispatch} = useAuth();

  const handleLogout = ()=>{
    localStorage.removeItem("userDetails")
    dispatch({type:'LOGOUT'})
  }

  return (
    <div onClick={handleLogout} className='text-sm border-black border-2 p-1 flex justify-center items-center gap-1 rounded-lg max-w-16 mobile:max-w-24'>
        <div className='h-4 aspect-square'>
            <img src={userProfile} alt="userProfile" className='h-full object-cover' />
        </div>
        <p className='truncate'>{user}</p>
    </div>
  )
}

export default userBox