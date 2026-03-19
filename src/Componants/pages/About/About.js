import React, { useContext, useEffect } from 'react'
import { themContext } from '../../../App'
import { IoMdCloudDone } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import aboutimg from '../../../image/about.jpg';
import { TfiStatsUp } from "react-icons/tfi";
import { GiSelfLove } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { GoArrowRight } from "react-icons/go";
import Testimonial from '../Testimonial/Testimonial';

function About() {
  const [them] = useContext(themContext)
  return (
    <div>
      <div className='w-full text-gray-500 flex justify-center bg-gray-800'>
         <div className='lg:w-[70%] pt-10 md:w-[95%]'>
          <div className='py-20 bg-gray-800 w-full md:w-1/2'>
            <p className='bg-orange-600/35 text-orange-500 inline px-3 py-2 rounded-full'>Our story</p>
            <p className='text-6xl font-extrabold text-white my-8'>We believe in the power of  the <span className='text-orange-600'>perfect step</span></p>
            <p>Founded in 2018, Stride was born from a simple idea: footwear should never make you choose between style and comfort. Every shoe we create is designed to move with you,  support you, and help you look great doing it.</p>
          </div>
         </div>
      </div>
    <div className={`flex font-bold border-b-[1px]  ${!them ? 'border-gray-700' : 'border-gray-300'}  text-gray-500  justify-center`}>
        <div className='lg:w-[70%] pt-10 md:w-[95%]'>
         
          <div className='grid gap-4  py-8 grid-cols-2 md:grid-cols-4'>
              <div className='font-bold'>
                <p className='text-5xl text-orange-600'>500K+</p>
                <p>Happy Customers</p>
              </div>
              <div className='font-bold'>
                <p className='text-5xl text-orange-600'>200K+</p>
                <p>Shoe Styles</p>
              </div>
              <div className='font-bold'>
                <p className='text-5xl text-orange-600'>15</p>
                <p>Countries Served</p>
              </div>
              <div className='font-bold'>
                <p className='text-5xl text-orange-600'>4.9</p>
                <p>Average Rating</p>
              </div>
          </div>
        </div>
    </div>
    <div className='flex text-gray-500 justify-center font-bold'>
      <div className='lg:w-[70%] pt-10 md:w-[95%]'>
       <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
          <div>
            <p className='text-orange-500'>Our Mission</p>
            <p className={`text-3xl ${!them ? 'text-white' : 'text-black'} my-3`}>Making every step count</p>
            <p className='my-3'>At Universal Shopping Hub, we are on a mission to revolutionize the footwear industry by creating shoes that don't just look good—they feel incredible and perform even better.</p>
            <p>We work with world-class designers and material scientists to develop innovative technologies that provide unmatched comfort, support, and durability. From marathon runners to everyday commuters, we have something for everyone.</p>
            <div className='grid py-20 grid-cols-1 sm:grid-cols-2 gap-4'>
               <div className='flex gap-2'>
                <div>
                  <p className='bg-orange-600/35 text-orange-600 px-6 py-4 rounded-lg w-fit'><IoMdCloudDone /></p>
                </div>
                <div>
                  <p className={` ${!them ? 'text-white' : 'text-black'}`}>Quality First</p>
                  <p className='text-[14px]'>Premium materials, rigorous testing</p>
                </div>
               </div>
               <div className='flex gap-2'>
                <div>
                  <p className='bg-orange-600/35 text-orange-600 px-6 py-4 rounded-lg w-fit'><BiWorld /></p>
                </div>
                <div>
                  <p className={` ${!them ? 'text-white' : 'text-black'}`}>Eco-Conscious</p>
                  <p className='text-[14px]'>Sustainable practices, recycled materials</p>
                </div>
               </div>
            </div>
          </div>
          <div>
            <div className='w-full rounded-3xl overflow-hidden aspect-[3/2]'>
              <img src={aboutimg} className='w-full h-full' alt="" />
            </div>
          </div>
       </div>
    </div>
    </div>
    <div className={`flex ${!them ? 'bg-gray-900' : 'bg-gray-50'} justify-center text-bold text-gray-500`}>
        <div className='lg:w-[70%] my-28 pt-10 md:w-[95%]'>
           <div>
            <div className='text-center my-5 w-full'>
              <p className='text-orange-500 font-bold'>Our Values</p>
              <p className={`${them? 'text-black' : 'text-white'} text-3xl my-4`}>What drives us forward</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               <div className={` shadow-sm ${ them? 'bg-white' :'bg-gray-800'}`}>
                  <div className='px-5 py-16'>
                    <p className='px-5 w-fit py-3 bg-orange-500/45 text-orange-500 rounded-xl'><TfiStatsUp /></p>
                    <p className={` text-2xl my-2 ${!them ? 'text-white' : 'text-black'}`}>Innovation</p>
                    <p>We constantly push boundaries with new materials, designs, and technologies to create the best footwear possible.</p>
                  </div>
               </div>
               <div className={` shadow-sm  ${ them? 'bg-white' :'bg-gray-800'}`}>
                  <div className='px-5 py-16'>
                    <p className='px-5 w-fit py-3 bg-orange-500/45 text-orange-500 rounded-xl'><GiSelfLove /></p>
                    <p className={` text-2xl my-2 ${!them ? 'text-white' : 'text-black'}`}>Customer Love</p>
                    <p>Our customers are at the heart of everything we do. Their feedback shapes our products and drives our improvements.</p>
                  </div>
               </div>
               <div className={` shadow-sm ${ them? 'bg-white' :'bg-gray-800'}`}>
                  <div className='px-5 py-16'>
                    <p className='px-5 w-fit py-3 bg-orange-500/45 text-orange-500 rounded-xl'><TbWorld /></p>
                    <p className={` text-2xl my-2 ${!them ? 'text-white' : 'text-black'}`}>Sustainability</p>
                    <p>We are committed to reducing our environmental footprint through sustainable materials and responsible manufacturing.</p>
                  </div>
               </div>
           </div>
           </div>
        </div>
    </div>
    <div className='flex justify-center'>
      <div className='lg:w-[70%] rounded-3xl py-28 my-10 flex justify-center text-center font-bold pt-10 bg-orange-600 md:w-[95%]'>
         <div>
          <p className='text-3xl text-white'>Ready to find your perfect pair?</p>
         <p className='text-orange-100 text-[18px] my-3'>Browse our collection and step into comfort and style. Free shipping on all orders over $75.</p>
         <div className='sm:flex mt-8 justify-center gap-4'>
            <button className='flex justify-center items-center text-orange-500 bg-white px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200'>Shop now <GoArrowRight /></button>
            <button className=' text-white px-8 py-4 rounded-full border-[2px] transition-all border-orange-300 hover:border-white duration-200'>Browse Categories</button>
         </div>
         </div>
      </div>
    </div>
    <Testimonial/>
    </div>
  )
}

export default About