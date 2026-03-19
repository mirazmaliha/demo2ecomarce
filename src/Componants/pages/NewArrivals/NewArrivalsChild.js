import React, { useContext, useState } from 'react'
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { BsBag } from "react-icons/bs";
import { CartContext, themContext } from '../../../App';
import { Link } from 'react-router-dom';

function NewArrivalsChild({sho}) {
  const {name, price, category, sizes, stock, image, description, rating} = sho;

  const [like, setLike] = useState(false);
  const handleLike = () => {
    if(!like){
      setLike(true)
    }else{
      setLike(false)
    }
  }
   const [them, setThem] = useContext(themContext)
    const [id, setId] = useState("");
     const handleProduct = (ids) => {
        setId(ids)
     }
     const [cart, setCart] = useContext(CartContext);
     const handleCart = (pd) => {
       const filter = cart.find(fl => fl.id.toString() === pd.id.toString());
       if(!filter){
        setCart([...cart, pd])
       }else{
        return
       }
      }
  return (
    <div className='group'>
  <div className='w-[100%] relative rounded-2xl overflow-hidden'>
    
   <Link className='cursor-pointer' to={`/product/${sho.id}`}>
    <img onClick={()=> handleProduct(sho.id)}
      className='w-full z-30 transition-all duration-300 ease-in-out group-hover:scale-110 aspect-[4/3]'
      src={image}
      alt=""
    />
   </Link>

    <div className='absolute pointer-events-none flex justify-center items-end inset-0 z-50'>
      <div className='w-full flex opacity-0 translate-y-6 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0'>
        <button onClick={()=>handleCart(sho)} className='w-full mb-2 pointer-events-auto gap-2 mx-1 flex items-center justify-center py-2 bg-white text-black font-bold rounded-md'>
         <BsBag /> Add to cart
        </button>
        <button onClick={handleLike} className='py-2 px-2 pointer-events-auto mb-2 rounded-md me-2 bg-white'>
         { !like ? <FcLikePlaceholder /> :
          <FcLike />}
        </button>
      </div>
    </div>

  </div>
  <div className='font-thin my-2'>
    <div className='flex justify-between'>
      <p className='text-gray-400'>{category}</p>
      <p>{rating}<span className='text-orange-400'>★</span></p>
    </div>
    <p className={`font-bold my-2 ${them?'text-gray-500' : 'text-gray-300'}`}>{name}</p>
    <p className={`font-bold ${them? 'text-gray-600' : 'text-gray-200'}`}>${price}</p>
    <p className='text-gray-600'>{sizes.length} sizes available</p>
  </div>
</div>
  )
}

export default NewArrivalsChild