import React from 'react'

function ShopByCategoryChild({sh}) {
   const {name, price, category, sizes, stock, image, description, rating} = sh;
  return (

  

    <div class="relative cursor-pointer group w-[100%]  h-[250px] rounded-2xl overflow-hidden">
  <img src={image} className="absolute group-hover:scale-110 transition-all duration-300 ease-in-out inset-0 w-[100%] h-full object-cover" alt="" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
  <div className="relative z-10 h-full flex ms-5 items-end text-white">
    
    <div>
        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
      {stock} products
    </span>

    <h2 className="text-2xl font-bold mt-3">
     {category}
    </h2>

    <p className="text-sm text-white/80">
      {description}
    </p>

    <button className="mt-4 font-semibold flex items-center gap-2">
      Shop Now →
    </button>
    </div>

  </div>

</div>
  )
}

export default ShopByCategoryChild