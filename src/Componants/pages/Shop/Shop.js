import React, { useContext, useEffect, useState } from 'react'
import sho from '../../../Json/Sho.json';
import { GoDotFill } from "react-icons/go";
import { themContext } from '../../../App';
import ShopChild from './ShopChild'
import { Link } from 'react-router-dom';
import { Description, Field, Label, Select } from '@headlessui/react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import mark from '../../../image/mark.png'

function  Shop() {
  const shos = sho;
   const [them, setThem] = useContext(themContext)
   const [filterCat, setFilterCat] = useState("");
   const [filterProduct, setFilterProduct] = useState(shos);
   useEffect(()=> {
    if(filterCat === ""){
      setFilterProduct(shos)
    }else{
        const filter = shos.filter(pd => pd.category.toString() === filterCat.toString());
      setFilterProduct(filter)
    }
   }, [filterCat])
   let [isOpen, setIsOpen] = useState(false);
       const [cardCondi, setCartCondi] = useState("");
   
     async function handleDeactivate() {
       await fetch('/deactivate-account', { method: 'POST' })
       setIsOpen(false)
     }
  return (
   <div className={`flex font-poppins sm:pt-20 px-4 w-full ${them? 'bg-white' : 'bg-black'} py-5 justify-center`}>
    <div className='lg:w-[70%] md:w-[95%]'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className={`${them ? 'text-gray-600' : 'text-gray-200'}`} >
        <div className='flex gap-2'>
          <Link className='hover:text-orange-500 font-semibold' to='/'>Home</Link>
          <p>/</p>
          <p className='font-bold text-orange-500 cursor-pointer'>Shop All</p>
        </div>
      <p className='sm:text-4xl text-2xl font-bold my-5'>Shop All</p>
      <p className='text-gray-400 text-[12px] sm:text-[15px]'>Browse our complete collection of premium footwear</p>
    </div>
    <div className={` ${!them ? 'bg-slate-900' : 'bg-white text-gray-700'} rounded-lg px-4 py-4 text-gray-300`}>
       <Field>
      <Label className='text-2xl sm:text-3xl'>Categories</Label>
      <Description>Filter By Categories</Description>
      <Select onChange={(e) => setFilterCat(e.target.value)} className={`w-full my-5 cursor-pointer py-2 ${them ?'bg-slate-50 ' : 'bg-slate-800 text-white'} outline-none px-4 rounded-md`} name="status">
        <option value="">All</option>
        {
    [...new Set(sho.map(p => p.category))].map((cat, index) => (
      <option  value={cat} key={index}>{cat}</option>
    ))
  }
      </Select>
    </Field>
    </div>
      </div>
     <div className='grid px-4 mt-7 gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
     {
        filterProduct.map(sh => <ShopChild setIsOpen={setIsOpen} cardCondi={cardCondi} setCartCondi={setCartCondi} key={sh.price} sho={sh} />)
     }
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

export default Shop