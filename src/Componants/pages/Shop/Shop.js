import React, { useContext } from 'react'
import sho from '../../../Json/Sho.json';
import { GoDotFill } from "react-icons/go";
import { themContext } from '../../../App';
import ShopChild from './ShopChild'
import { Link } from 'react-router-dom';

function  Shop() {
  const shos = sho
   const [them, setThem] = useContext(themContext)
  return (
   <div className={`flex sm:pt-20 px-2 w-full ${them? 'bg-white' : 'bg-black'} py-5 justify-center`}>
    <div className='lg:w-[70%] md:w-[95%]'>
      <div className={`${them ? 'text-gray-600' : 'text-gray-200'}`} >
        <div className='flex gap-2'>
          <Link className='hover:text-orange-500 font-semibold' to='/'>Home</Link>
          <p>/</p>
          <p className='font-bold text-orange-500 cursor-pointer'>Shop All</p>
        </div>
      <p className='sm:text-4xl text-2xl font-bold my-5'>Shop All</p>
      <p className='text-gray-400 text-[12px] sm:text-[15px]'>Browse our complete collection of premium footwear</p>
    </div>
     <div className='grid px-4 mt-7 gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
     {
        shos.map(sh => <ShopChild key={sh.price} sho={sh} />)
     }
    </div>
    </div>
   </div>
  )
}

export default Shop