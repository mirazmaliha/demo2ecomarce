import React from 'react'
import ts from '../../../Json/Testimonial.json';
import TestimonialChild from './TestimonialChild';

function Testimonial() {
    const testiminial  = ts.slice(1, 4);
  return (
    <div className='flex px-4 bg-black py-10 text-white justify-center'>
       <div>
        <div className='text-center font-bold flex justify-center'>
         <div>
           <div className='flex justify-center'>
            <p className='w-fit text-center bg-orange-400/40 text-orange-500 px-5 py-3 rounded-full'>Customer Love</p>
           </div>
          <p className='my-5 sm:text-5xl text-2xl'>What Our Customers Say</p>
          <p className='text-gray-400 text-[12px] sm:text-[15px]'>Join thousands of happy customers who have made Stride their go-to footwear brand</p>
         </div>
        </div >
         <div className='flex mt-8 justify-center w-full'>
          <div className='lg:w-[70%] mt-5 md:w-[95%]'>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
      {
        testiminial.map(ts => <TestimonialChild key={ts.id} ts={ts} />)
      }
    </div>
    <div className='border-t-[1px] flex justify-center border-slate-500 mt-10 pt-8'>
          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-2xl md:text-3xl gap-4'>
          <div className='border-e-[1px] px-2 md:px-8 border-slate-600'>
            <p>50k+</p>
            <p className='text-[10px]'>Happy Customers</p>
            </div> <div className='border-e-[1px] md:px-8 px-2 border-slate-600'>
            <p>4.9 <span className='text-orange-400'>★</span></p>
            <p className='text-[10px]'>Average Rating</p>
            </div>
             <div className=' md:px-8 px-2 border-slate-600'>
            <p>300+</p>
            <p className='text-[10px]'>Styles Available</p>
            </div>
         </div>
         </div>
    </div>
         </div>
       </div>
    </div>
  )
}

export default Testimonial