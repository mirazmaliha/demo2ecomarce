import React from 'react'
import herosho from '../../../../src/image/herosho.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='grid font-poppins px-4 text-center md:text-start h-fit py-20 text-gray-300 font-bold  grid-cols-1 bg-black gap-5 md:grid-cols-2'>
       <div className='flex justify-center '>
        <div>
         <div className='flex justify-center md:justify-start'>
           <p className='bg-orange-500/20   my-4 w-fit px-8 py-1 rounded-full font-bold text-orange-400 '>New collection 2026</p>
         </div>
         <p className='md:text-6xl text-2xl text-white font-extrabold '>Universal <br /><span className='text-orange-400'> Shopping Hub</span></p>
         <p className='my-10 font-poppins text-[12px] sm:text-[15px]'>Lorem ipsum dolor  sit amet consectetur, adipisicing  elit. Tempora corporis <br /> laboriosam ea magniexpedita iusto aut  cumque ut. Sed, sequi.</p>
         <div className='md:flex gap-5'>
          <div>
            <Link to='/shop' className='px-11 font-poppins w-full md:w-fit hover:bg-orange-400 transition-all duration-200 text-white hover:shadow-2xl py-4 rounded-full bg-orange-500'>Shop Now </Link>
          </div>
          <div>
            <Link to='/categories' className='px-11 w-full mt-4 md:mt-0 md:w-fit transition-all duration-200 text-white py-4 rounded-full bg-white/5 border-2 hover:bg-white/20 font-poppins border-slate-500'>Browse Categories</Link>
          </div>
         </div>
         <div className='border-t-2 border-slate-500 mt-10 pt-8'>
          <div className='flex text-2xl md:text-3xl gap-4'>
          <div className='border-e-2 px-2 md:px-8 border-slate-600'>
            <p>50k+</p>
            <p className='text-[10px]'>Happy Customers</p>
            </div> <div className='border-e-2 md:px-8 px-2 border-slate-600'>
            <p>4.9 <span className='text-orange-400'>★</span></p>
            <p className='text-[10px]'>Average Rating</p>
            </div>
             <div className='border-e-2 md:px-8 px-2 border-slate-600'>
            <p>300+</p>
            <p className='text-[10px]'>Styles Available</p>
            </div>
         </div>
         </div>
        </div>
       </div>
       <div className='flex justify-center'>
        <div className=' flex justify-center w-full sm::w-[70%] float-img'>
          <img className='w-[90%] clip-left-curve' src={herosho} alt="" />
        </div>
       </div>
    </div>
  )
}

export default Hero