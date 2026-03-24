import React, { useContext, useState } from 'react'
import sho from '../../../Json/Sho.json';
import { GoDotFill } from "react-icons/go";
import { themContext } from '../../../App';
import NewArrivalsChild from './NewArrivalsChild';
import { Link } from 'react-router-dom';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import mark from '../../../image/mark.png'
function  NewArrivals() {
  const shos = sho.slice(4,8)
   const [them, setThem] = useContext(themContext);
    let [isOpen, setIsOpen] = useState(false);
    const [cardCondi, setCartCondi] = useState("");

  async function handleDeactivate() {
    await fetch('/deactivate-account', { method: 'POST' })
    setIsOpen(false)
  }

  return (
   <div className={`flex sm:pt-20 px-2 w-full ${them? 'bg-white' : 'bg-black'} py-5 justify-center`}>
    <div className='lg:w-[70%] md:w-[95%]'>
      <div className={`${them ? 'text-gray-600' : 'text-gray-200'}`} >
        <div className='flex my-5 gap-2'>
          <Link className='hover:text-orange-500 font-semibold' to='/'>Home</Link>
          <p>/</p>
          <p className='font-bold text-orange-500 cursor-pointer'>New Arrivals</p>
        </div>
        <p className='text-green-500 bg-green-100 flex justify-center items-center gap-3 font-bold rounded-full w-fit px-7 py-2'><GoDotFill />Just Dropped</p>
      <p className='sm:text-4xl text-2xl font-bold my-5'>New Arrivals</p>
      <p className='text-gray-400 text-[12px] sm:text-[15px]'>Fresh styles just landed — be the first to rock them</p>
    </div>
     <div className='grid px-4 mt-7 gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
     {
        shos.map(sh => <NewArrivalsChild key={sh.price} setIsOpen={setIsOpen} cardCondi={cardCondi} setCartCondi={setCartCondi} sho={sh} />)
     }
    </div>
     <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
  
  {/* Overlay */}
  <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

  {/* Modal center */}
  <div className="fixed inset-0 flex items-center justify-center">
    <DialogPanel className="bg-white p-6 rounded-xl w-96">

      <div className='flex justify-center items-center gap-2'>
        <img className='w-10 aspect-square' src={mark} alt="" />
        <p className='font-bold font-poppins'>{cardCondi}</p>
      </div>
    </DialogPanel>
  </div>
</Dialog>
    </div>
   </div>
  )
}

export default NewArrivals