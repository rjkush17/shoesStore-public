import React, { useState } from 'react';

function Payment({handleOrder, handleStage}){

  const [cardDetails, setCardDetails] = useState({
    nameOnCard: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleOrder("Payment",cardDetails)
    handleStage("done")
  };

  return (
    <section className='w-full bg-white pb-8 '>
        <p className='text-center text-2xl  font-semibold my-3'>Enter Card Details</p>
        <form className='w-8/12 mx-auto' onSubmit={handleSubmit}>
        <input 
          className='input mt-4 mb-6' 
          placeholder='Name on Card'
          name="nameOnCard"
          value={cardDetails.nameOnCard}
          onChange={handleChange}
          required
        />
        <input 
          type="number" 
          className='input mb-6' 
          placeholder='Card Number'
          name="cardNumber"
          value={cardDetails.cardNumber}
          onChange={handleChange}
          required
        />
        <div className='flex mobile:w-4/12 gap-10'>
            <input 
              type="number" 
              className="input mb-6 text-center" 
              placeholder='MM/YYYY' 
              name="expiryDate"
              value={cardDetails.expiryDate}
              onChange={handleChange}
              required
            />
            <input 
              type="number" 
              className="input text-center" 
              placeholder='CVV' 
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleChange}
              required
            />
        </div>
        <button type="submit" className='button bg-red-400 text-white hover:bg-gray-200 hover:text-black'>Pay</button>
        </form>
    </section>
  );
}

export default Payment;
