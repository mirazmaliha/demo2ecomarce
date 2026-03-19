import React, { useContext } from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { themContext } from '../../../App';

function Footer() {
    const [them] = useContext(themContext);
  return (
    <div className={`flex ${!them ? 'bg-gray-900' : 'bg-white'} py-12 justify-center`}>
        <div className='lg:w-[70%] px-4 pt-10 md:w-[95%]'>
        <div className='grid text-gray-500 font-bold grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          <div className='flex w-full md:justify-center'>
            <div>
                <p className={`text-[17px] ${them ? 'text-gray-700' : 'text-gray-200'}`}>Universal Shopping Hub</p>
            <p className='text-[13px] my-3'>Premium footwear for every step of your journey. From athletic performance to everyday comfort.</p>
            <ul className='flex text-2xl gap-3'>
                <li className='hover:text-orange-500 transition-all duration-200 cursor-pointer'><FaInstagram /></li>
                 <li className='hover:text-orange-500 transition-all duration-200 cursor-pointer'><FaFacebook /></li>
                 <li className='hover:text-orange-500 transition-all duration-200 cursor-pointer'><FaYoutube /></li>
                 <li className='hover:text-orange-500 transition-all duration-200 cursor-pointer'><AiFillTikTok /></li>
            </ul>
            </div>
          </div>
          <div className='flex sm:justify-center'>
           <div>
             <p className={`${them ? 'text-gray-700' : 'text-gray-200'} mb-5`}>Shop</p>
            <ul>
                <li className='hover:text-orange-500 cursor-pointer hover:underline transition-all duration-200'>Running</li>
                <li className='hover:text-orange-500 my-2 cursor-pointer hover:underline transition-all duration-200'>Sneakers</li>
                <li className='hover:text-orange-500 cursor-pointer hover:underline transition-all duration-200'>Basketball</li>
                <li className='hover:text-orange-500 my-2 cursor-pointer hover:underline transition-all duration-200'>Casual</li>
                <li className='hover:text-orange-500 cursor-pointer hover:underline transition-all duration-200'>Boots</li>
                <li className='hover:text-orange-500 my-2 cursor-pointer hover:underline transition-all duration-200'>Sandals</li>
            </ul>
           </div>
          </div>
          <div className='flex sm:justify-center'>
           <div>
             <p className={`${them ? 'text-gray-700' : 'text-gray-200'} mb-5`}>Help</p>
            <ul>
                <li className='hover:text-orange-500 cursor-pointer hover:underline transition-all duration-200'>FAQ</li>
                <li className='hover:text-orange-500 my-2 cursor-pointer hover:underline transition-all duration-200'>Shipping & Returns</li>
                <li className='hover:text-orange-500 cursor-pointer hover:underline transition-all duration-200'>Size Guide</li>
                <li className='hover:text-orange-500 my-2 cursor-pointer hover:underline transition-all duration-200'>Contact Us</li>
                <li className='hover:text-orange-500 cursor-pointer hover:underline transition-all duration-200'>Track Order</li>
            </ul>
           </div>
          </div>
          <div className='flex sm:justify-center'>
           <div>
             <p className={`${them ? 'text-gray-700' : 'text-gray-200'} mb-5`}>About</p>
            <ul>
                <li className='hover:text-orange-500 cursor-pointer hover:underline transition-all duration-200'>Our Story</li>
                <li className='hover:text-orange-500 my-2 cursor-pointer hover:underline transition-all duration-200'>Sustainability</li>
                <li className='hover:text-orange-500 cursor-pointer hover:underline transition-all duration-200'>Athletes</li>
                <li className='hover:text-orange-500 my-2 cursor-pointer hover:underline transition-all duration-200'>Careers</li>
                <li className='hover:text-orange-500 cursor-pointer hover:underline transition-all duration-200'>Store Locator</li>
            </ul>
           </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Footer