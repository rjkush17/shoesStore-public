import React,{useEffect} from 'react'

function Cart({handleCartOpen}) {
    
    useEffect(()=>{
        document.body.classList.add("overflow-y-hidden");

        return ()=>{
            document.body.classList.remove("overflow-y-hidden")
        };
    },[])

  return (
    <>
    <div className='w-screen h-screen bg-white opacity-35 flex justify-center items-center top-0 z-50 fixed overflow-hidden'>
        <p>Cart Model</p>
        <button className='bg-black text-white' onClick={handleCartOpen}>close</button>

        
    </div>
  
    </>
  )
}

export default Cart