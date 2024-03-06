import React, { useEffect, useState } from 'react'
import { uselogin } from '../hook/uselogin';
function Login({handleLoginopen}) {
    useEffect(()=>{
        document.body.classList.add("overflow-y-hidden");

        return () => {
          document.body.classList.remove("overflow-y-hidden");
        };
    },[])

    const { isLoading, errors, fetchData } = uselogin();

    const [loginData, setLoginData] = useState({
      email:"",
      password:""
    })

    const handleLoginForm = (e) => {
      const { name, value } = e.target; 
      setLoginData(prev => ({
        ...prev,
        [name]: value 
      }));
    };

    const handlelogin = (e) =>{
      e.preventDefault();
      fetchData(loginData)
    }

  return (
    <>
    <div className='w-screen h-screen bg-white-400 flex justify-center items-center  top-0 z-50 fixed overflow-hidden bg-[rgba(0,0,0,0.3)]'>
       <section className='bg-white'>
       <p>login Model</p>
        <button className='bg-black text-white' onClick={handleLoginopen}>close</button>
        <form onSubmit={handlelogin}>
          <label htmlFor="email"> Your name </label>
          <input type="text" id='email'className='input' name='email' value={loginData.email} onChange={(e)=>handleLoginForm(e)} required />
          <label htmlFor="password">password</label>
          <input type='text' id='password' className='input' name='password'  value={loginData.password} onChange={(e)=>handleLoginForm(e)} required/>

          { isLoading ? "fetching.." :  <button type='submit' className='button bg-black text-white'>Login</button>}

          {errors && <p>{errors}</p> }
         
        </form>
       </section>
    </div>
  
    </>
  )
}

export default Login