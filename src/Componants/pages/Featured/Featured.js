import React, { useContext, useState } from 'react'
import sho from '../../../Json/Sho.json';
import Featuredchild from './Featuredchild';
import { FaShippingFast } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { MdBalance } from "react-icons/md";
import { IoCloudDoneSharp } from "react-icons/io5";
import { themContext } from '../../../App';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import mark from '../../../image/mark.png'

function Featured() {
   let [isOpen, setIsOpen] = useState(false);
      const [cardCondi, setCartCondi] = useState("");
  
    async function handleDeactivate() {
      await fetch('/deactivate-account', { method: 'POST' })
      setIsOpen(false)
    }

   const [them, setThem] = useContext(themContext)
  return (
   <div className={`flex px-2 w-full ${them? 'bg-gray-50' : 'bg-gray-900'} py-5 justify-center`}>
    <div className='lg:w-[70%] pt-10 md:w-[95%]'>
      <div className={`${them ? 'text-gray-600' : 'text-gray-200'}`}>
      <p className='sm:text-4xl text-2xl font-bold my-5'>Featured Collection</p>
      <p className='text-gray-400 text-[12px] sm:text-[15px]'>Our most popular styles handpicked for you</p>
    </div>
     <div className='grid px-4 mt-7 gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
     {
        sho.map(sh => <Featuredchild key={sh.price} setIsOpen={setIsOpen} cardCondi={cardCondi} setCartCondi={setCartCondi} sho={sh} />)
     }
    </div>
   <div>
     <div className='grid border-t-[1px] px-4 border-b-[1px] font-bold py-16 my-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      <div className='flex-1 flex gap-4'>
        <div>
          <p className='px-4 text-orange-500 py-4 rounded-lg w-fit bg-orange-100'><FaShippingFast /></p>
        </div>
        <div>
           <p className={`${them? 'text-gray-600' : 'text-gray-200'}`}>Free Shipping</p>
           <p className='font-thin text-gray-500'>Free standard shipping on all orders over $75. Express options available. </p>
        </div>
      </div>
      <div className='flex-1 flex gap-4'>
        <div>
          <p className='px-4 text-orange-500 py-4 rounded-lg w-fit bg-orange-100'><FaRetweet /></p>
        </div>
        <div>
           <p className={`${them? 'text-gray-600' : 'text-gray-200'}`}>60-Day Returns</p>
           <p className='font-thin text-gray-500'>Changed your mind? Return unworn items within 60 days, no questions asked.</p>
        </div>
      </div>
       <div className='flex-1 flex gap-4'>
        <div>
          <p className='px-4 text-orange-500 py-4 rounded-lg w-fit bg-orange-100'><MdBalance /></p>
        </div>
        <div>
           <p className={`${them? 'text-gray-600' : 'text-gray-200'}`}>Size Guarantee</p>
           <p className='font-thin text-gray-500'>Not the right fit? Exchange for a different size at no extra cost.</p>
        </div>
      </div>
      <div className='flex-1 flex gap-4'>
        <div>
          <p className='px-4 text-orange-500 py-4 rounded-lg w-fit bg-orange-100'><IoCloudDoneSharp /></p>
        </div>
        <div>
           <p className={`${them? 'text-gray-600' : 'text-gray-200'}`}>Secure Checkout</p>
           <p className='font-thin text-gray-500'>Your payment information is encrypted and secure. Shop with confidence.</p>
        </div>
      </div>
    </div>
   </div>
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
  )
}

export default Featured