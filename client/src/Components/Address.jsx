import React, { useState } from 'react';

function Address({handleOrder, handleStage}){

  const [formData, setFormData] = useState({
    houseNo: '',
    addressLine1: '',
    city: '',
    pinCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOrder("address ",formData)
    handleStage(3)
  };

  return (
    <section className='w-10-12'> 
      <div className='bg-white py-6  text-center text-2xl font-medium '>Fill Delivery Address Details</div>
      <form className="px-8 mx-auto  bg-white" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input px-4 mb-6"
          name="houseNo"
          placeholder="Enter House No. *"
          value={formData.houseNo}
          onChange={handleChange}
          required
        />
        <input
          type="text" // Changed type to "text" for address line
          className="input px-4 mb-6"
          name="addressLine1"
          placeholder="Enter Your Address *"
          value={formData.addressLine1}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="input px-4 mb-6"
          name="city"
          placeholder="Enter Your City *"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          className="input px-4 mb-6"
          name="pinCode"
          placeholder="Pin Code *"
          value={formData.pinCode}
          onChange={handleChange}
          required
        />
        <button type="submit" className='button bg-red-400 text-white mb-6'>Add Address</button>
      </form>
    </section>
  );
}

export default Address;
