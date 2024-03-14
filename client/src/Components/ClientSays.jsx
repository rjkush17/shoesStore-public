import React from 'react'

function ClientSays({val}) {
  return (
    <section className='flex flex-col gap-8 mobile:flex-row mt-10 items-center'>
        <div className='min-w-16 mobile:min-w-44 mobile:w-10/12 aspect-square'>
            <img className='w-full rounded-full overflow-hidden' src={val.profileIMG} alt="" />
        </div>
        <div className='ml-8'>
            <p className='text-xl font-thin text-gray-400'>{val.date}</p>
            <h5 className='text-3xl'>{val.name}</h5>
            <p className='text-gray-400 text-md leading-7 text-sm'>{val.say}</p>
        </div>
    </section>
  )
}

export default ClientSays