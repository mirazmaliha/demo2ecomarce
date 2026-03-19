import React, { useContext } from 'react'
import sho from '../../../Json/Sho.json';
import ShopByCategoryChild from './ShopByCategoryChild';
import { themContext } from '../../../App';

function ShopByCategory() {
    const [them, setThem] = useContext(themContext);
    const shos = sho.slice(2, 8)
  return (
    <div className={`flex w-full px-4 pb-20 ${them? 'bg-gray-50' : 'bg-black'} py-5 justify-center`}>
     <div className='lg:w-[70%] w-full  md:w-[95%]'>
        <div className={`${them ? 'text-gray-600' : 'text-gray-200'}`}>
      <p className='sm:text-4xl text-2xl font-bold my-5'>Shop by Category</p>
      <p className='text-gray-400 text-[12px] sm:text-[15px]'>Find the perfect pair for every occasion</p>
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