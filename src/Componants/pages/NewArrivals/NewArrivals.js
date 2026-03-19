import React, { useContext } from 'react'
import sho from '../../../Json/Sho.json';
import { GoDotFill } from "react-icons/go";
import { themContext } from '../../../App';
import NewArrivalsChild from './NewArrivalsChild';

function  NewArrivals() {
  const shos = sho.slice(4,8)
   const [them, setThem] = useContext(themContext)
  return (
   <div className={`flex sm:pt-20 px-2 w-full ${them? 'bg-white' : 'bg-black'} py-5 justify-center`}>
    <div className='lg:w-[70%] md:w-[95%]'>
      <div className={`${them ? 'text-gray-600' : 'text-gray-200'}`} >
        <p className='text-green-500 bg-green-100 flex justify-center items-center gap-3 font-bold rounded-full w-fit px-7 py-2'><GoDotFill />Just Dropped</p>
      <p className='sm:text-4xl text-2xl font-bold my-5'>New Arrivals</p>
      <p className='text-gray-400 text-[12px] sm:text-[15px]'>Fresh styles just landed — be the first to rock them</p>
    </div>
     <div className='grid px-4 mt-7 gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
     {
        shos.map(sh => <NewArrivalsChild key={sh.price} sho={sh} />)
     }
    </div>
    </div>
   </div>
  )
}

export default NewArrivals