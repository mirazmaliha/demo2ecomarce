import React, { useContext, useState } from 'react'
import { LuSun } from "react-icons/lu";
import { GoMoon } from "react-icons/go";
import { CartContext, themContext } from '../../../App';
import { GiSelfLove } from "react-icons/gi";
import { IoBag } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Navbar() {
    const [them, setThem] = useContext(themContext);
    const [bar, setbar] = useState(false)
    const [cart, setCart] = useContext(CartContext);
    const handleThem = () => {
        if(!them){
            setThem(true)
        }else{
            setThem(false)
        }
    }
    const handleBar = () => {
        if(!bar){
            setbar(true)
        }else{
            setbar(false)
        }
    }
  return (
    <div className='z-50 bg-white  w-full top-0 font-bold sticky py-7'>

       <div className='md:flex w-full hidden'>
         <div className='flex w-full'>
           <div className=' flex w-full justify-center'>
            <div>
                <p className='w-fit cursor-pointer'><Link to='/'>Universal Shopping Hub</Link></p>
            </div>
           </div>
        </div>
        <div className='w-full'>
          <ul className='flex gap-5'>
            <li className='hover:text-orange-600 transition-all duration-200 ease-in-out cursor-pointer'><Link to='/shop'>Shop</Link></li>
            <li className='hover:text-orange-600 transition-all duration-200 ease-in-out cursor-pointer'><Link to='/categories'>Categories</Link></li>
            <li className='hover:text-orange-600 transition-all duration-200 ease-in-out cursor-pointer'><Link to='/newarrivals'>New Arrivals</Link></li>
            <li className='hover:text-orange-600 transition-all duration-200 ease-in-out cursor-pointer'><Link to='/about'>About</Link></li>
          </ul>
        </div>
        <div className='w-full'>
          <ul className='gap-5 flex'>
            <li onClick={handleThem} className='hover:bg-slate-600/20 px-3 py-3 rounded-lg transition-all duration-200 cursor-pointer'>
            {!them ? <LuSun /> : <GoMoon />}
            </li>
             <li className='hover:bg-slate-600/20 px-3 py-3 rounded-lg transition-all duration-200 cursor-pointer'>
            <GiSelfLove />
            </li>
            <li className='hover:bg-slate-600/20 relative px-3 py-3 rounded-lg transition-all duration-200 cursor-pointer'>
            <div>
               <div>
                 <IoBag />
                  <div className='absolute top-[-17px] right-[-10px] flex justify-center items-center bg-orange-500 w-7 h-7 rounded-full font-bold text-white'>
                 <p>{cart.length}</p>
               </div>
               </div>
              
            </div>
            </li>
          </ul>
        </div>
       </div>
       <div className='md:hidden relative'>
          <div className='grid z-40 grid-cols-2 w-full  justify-between'>
            <div className='flex justify-between'>
              <p className='px-3 w-fit py-3 border-white border-2 rounded-lg  active:border-orange-500' onClick={handleBar}>{!bar ? <FaBars /> : <IoClose />}</p>
              <p className='  text-[12px]'> Shopping Hub</p>
            </div>
            <div className='flex w-full  justify-center'>
                <ul className=' flex'>
            <li onClick={handleThem} className='hover:bg-slate-600/20 px-3 py-3 rounded-lg transition-all duration-200 cursor-pointer'>
            {!them ? <LuSun /> : <GoMoon />}
            </li>
             <li className='hover:bg-slate-600/20 px-3 py-3 rounded-lg transition-all duration-200 cursor-pointer'>
            <GiSelfLove />
            </li>
            <li className='hover:bg-slate-600/20 relative px-2 py-2 rounded-lg transition-all duration-200 cursor-pointer'>
            <div>
               <div >
                 <IoBag />
                  <div className='absolute top-[-17px] right-[-10px] flex justify-center items-center bg-orange-500 w-5 h-5 rounded-full font-bold text-white'>
                 <p>{cart.length}</p>
               </div>
               </div>
              
            </div>
            </li>
          </ul>
            </div>
          </div>

         <div className={` w-full z-10 absolute right-0 h-fit top-full bg-white transition-all border-t-[1px] border-gray-200 duration-300 ease-in-out ${bar  ? "translate-y-0  opacity-100 pointer-events-auto"  : "-translate-y-full opacity-0  pointer-events-none"}`} >
          <ul className='mx-6 py-10'>
            <li onClick={()=> setbar(false)}><Link to='/shop'>Shop</Link></li>
            <li onClick={()=> setbar(false)} className='my-2'><Link to='/categories'>Categories</Link></li>
            <li onClick={()=> setbar(false)} className=''><Link to='/newarrivals'>New Arrivals</Link></li>
            <li onClick={()=> setbar(false)} className='my-2'><Link to='/about'>About</Link></li>
          </ul>
         </div>
       </div>
       
    </div>
  )
}

export default Navbar