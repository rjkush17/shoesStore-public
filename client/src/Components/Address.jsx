import React from 'react'

function Address() {
  return (
    <section className='w-full'>
       <form className="px-8 w-10/12">
              <input
                type="text"
                className="input px-4 mb-6"
                name="House No."
        
                placeholder="Enter House No. *"
                required
              />
              <input
                type="line no.1 Address"
                className="input px-4 mb-6"
                name="line no.1 Address"
     
                placeholder="Enter Your address*"
                required
              />
              <input
                type="text"
                className="input px-4 mb-6"
                name="City"
      
                placeholder="Enter Your City *"
                required
              />
               <input
                type="text"
                className="input px-4 mb-6"
                name="pin"
      
                placeholder="Pin Code*"
                required
              />
              <button className='button bg-red-400 text-white'>Add Address</button>
            </form>
    </section>
  )
}

export default Address