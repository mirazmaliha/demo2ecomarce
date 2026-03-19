import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Sho from '../../../Json/Sho.json';
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FaShippingFast } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { CartContext, themContext } from '../../../App';
import ProductDetailsChild from './ProductDetailsChild';

function ProductDetails() {
  const [them, setThem] = useContext(themContext);
    const {id} = useParams();
    const sho  = Sho;
    const [product, setProduct] = useState({});
    const [cart, setCart] = useContext(CartContext);
    useEffect(()=> {
      const filter = sho.find(pd => pd.id.toString() === id.toString());
      setProduct(filter);
    }, [id])

    const {name, price, category, sizes, stock, reviews, image, description, rating} = product;

     const [like, setLike] = useState(false);
      const handleLike = () => {
        if(!like){
          setLike(true)
        }else{
          setLike(false)
        }
      }
      const handleCart = (pd) => {
       const filter = cart.find(fl => fl.id.toString() === pd.id.toString());
       if(!filter){
        setCart([...cart, pd])
       }else{
        return
       }
      }
      const [mayAlsoLike, setMay] = useState([]);
      useEffect(() => {
        const filters = sho.filter(pd => pd.category === product.category && pd.id.toString() !== product.id.toString())
        setMay(filters)
      }, [product])
  return (
   <div className={`flex font-bold ${them? 'bg-white' : 'bg-black text-white'} justify-center`}>
     <div className='lg:w-[70%] pt-10 md:w-[95%]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
             <div>
                <div className='w-full overflow-hidden aspect-[4/3] md:h-[500px]'>
                    <img className='w-full rounded-2xl shadow-md h-full' src={image} alt="" />
                </div>
             </div>
             <div>
                <p className='text-[14px] text-gray-500'>{category} <span className='text-orange-500 ms-4'>{'★'.repeat(rating)}</span> {rating} ({reviews})</p>
                <p className='text-3xl my-4 font-extrabold'>{name}</p>
                <p className='text-2xl'>${price}</p>
                <p className='text-gray-500'>{description}</p>
                <div className=' my-4'>
                    <label htmlFor="size">Size :</label>
                    <div>
                      <select className={`${them ? 'bg-orange-50' : 'bg-gray-800'} cursor-pointer py-3 rounded-lg outline-none w-full`}>
                      <option>6</option>
                      <option value="">6.5</option>
                      <option value="" selected>7</option>
                      <option value="">7.5</option>
                      <option value="">8</option>
                      <option value="">8.5</option>
                      <option value="">9</option>
                      <option value="">9.5</option>
                      <option value="">10</option>
                      <option value="">10.5</option>
                      <option value="">11</option>
                      <option value="">12</option>
                    </select>
                    </div>
                </div>
                <div className='flex gap-4'>
                   <button onClick={()=>handleCart(product)} className='w-full px-4 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-all active:mx-5 duration-100 shadow-md'>Add to Cart</button> 

                    <button onClick={handleLike} className={`py-4 px-4 mb-2 rounded-full border-[2px] ${like && 'border-orange-500'} border-gray-200  me-2 bg-white`}>
                            { !like ? <FcLikePlaceholder /> :
                             <FcLike />}
                           </button>
                </div>
                <div className='flex mt-8 justify-center items-center gap-4'>
                   <div className={`flex-1 py-3 ${them ? 'bg-gray-100' : 'bg-gray-800'} rounded-lg flex gap-4`}>
        <div>
          <p className='px-4 text-orange-500 py-4 rounded-lg w-fit '><FaShippingFast /></p>
        </div>
        <div>
           <p className={`${them ? 'text-gray-600' : 'text-gray-100'}`}>Free Shipping</p>
           <p className='font-thin text-gray-500'>On orders over $75 </p>
        </div>
      </div>
      <div className={`flex-1 py-3 ${them ? 'bg-gray-100' : 'bg-gray-800'} rounded-lg flex gap-4`}>
        <div>
          <p className='px-4 text-orange-500 py-4 rounded-lg w-fit '><FaRetweet /></p>
        </div>
        <div>
           <p className={`${them ? 'text-gray-600' : 'text-gray-100'}`}>60-Day Returns</p>
           <p className='font-thin text-gray-500'>Try it, love it </p>
        </div>
      </div>
                </div>
             </div>
        </div>
         <div className='mt-20'>
          <p className='md:text-3xl text-2xl'>You may also like</p>
          <div className='grid px-4 mt-7 gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
             {
                mayAlsoLike.map(sh => <ProductDetailsChild key={sh.price} sho={sh} />)
             }
            </div>
         </div>
    </div>
   </div>
  )
}

export default ProductDetails