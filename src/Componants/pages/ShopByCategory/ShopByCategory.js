import React, { useContext } from 'react'
import sho from '../../../Json/Sho.json';
import ShopByCategoryChild from './ShopByCategoryChild';
import { themContext } from '../../../App';
import { Link } from 'react-router-dom';

function ShopByCategory() {
    const [them, setThem] = useContext(themContext);
    const shos = sho.slice(2, 8)
  return (
    <div className={`flex w-full px-4 pb-20 ${them? 'bg-gray-50' : 'bg-black'} py-5 justify-center`}>
     <div className='lg:w-[70%] py-10 w-full  md:w-[95%]'>
       <div className={`${them ? 'text-gray-600' : 'text-gray-200'}`} >
        <div className='flex gap-2'>
          <Link className='hover:text-orange-500 font-semibold' to='/'>Home</Link>
          <p>/</p>
          <p className='font-bold text-orange-500 cursor-pointer'>Categories</p>
        </div>
      <p className='text-4xl  font-bold my-5'>Shop By Category</p>
      <p className='text-gray-400 text-[12px] sm:text-[15px]'>Find the perfect shoes for every occasion and activity</p>
    </div>
           <div className='grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
       {
        shos.map(sh => <ShopByCategoryChild key={sh.id} sh={sh} />)
       }
    </div>
     </div>
  </div>
    
  )
}

export default ShopByCategory