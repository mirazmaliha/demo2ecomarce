import React from 'react'

function TestimonialChild({ts}) {
    const {name, image, review} = ts;
  return (
    <div>
       <div className='px-8 rounded-2xl py-10 bg-gray-900'>
         <div>
            <p className='text-orange-400'>★ ★ ★ ★ ★</p>
            <p className='my-4'>{review}</p>
        </div>
        <div className='flex gap-2'>
            <img className='w-12 h-12 rounded-full' src={image} alt="" />
            <p>{name}</p>
        </div>
       </div>
    </div>
  )
}

export default TestimonialChild