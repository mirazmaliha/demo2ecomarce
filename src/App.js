import logo from './logo.svg';
import './App.css';
import Home from './Componants/Home/Home';
import { createContext, useEffect, useState } from 'react';
import Footer from './Componants/pages/Foooter/Footer';
import Navbar from './Componants/pages/Navbar/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ProductDetails from './Componants/pages/ProductDetails/ProductDetails';
import Shop from './Componants/pages/Shop/Shop';
import NewArrivals from './Componants/pages/NewArrivals/NewArrivals';
import ShopByCategory from './Componants/pages/ShopByCategory/ShopByCategory';
import About from './Componants/pages/About/About';
export const themContext = createContext();
export const CartContext = createContext();

function App() {
  useEffect(()=> {
   document.title = "Universal Shopping Hub";
  }, [])

  const [them, setThem] = useState(true);
  const [cart, setCart] = useState([]);
  return (
    <div >
      <BrowserRouter>
      <themContext.Provider value={[them, setThem]}>
         <CartContext.Provider value={[cart, setCart]}>
          <Navbar/>
       <div className={`min-h-screen ${them ? 'bg-white' : 'bg-black'}`}>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/newarrivals' element={<NewArrivals/>} />
        <Route path='/categories' element={<ShopByCategory/>} />
        <Route path='/about' element={<About/>} />
       </Routes>
       </div>
        <Footer/>
         </CartContext.Provider>
      </themContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
