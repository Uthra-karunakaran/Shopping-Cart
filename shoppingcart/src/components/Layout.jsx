import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom";
import "../styles/layout.css";
import { useEffect, useState } from 'react'
import { CartContext } from "./context/CartContext";
import FakeStore_transparent from "../assets/FakeStore_transparent.png";

function Layout() {
    const [cart,setCart]=useState({});
    const [counter, setCounter] = useState(1);
    const [total,setTotal]=useState(0);
    
    function calculation(cartItems){
      
      let res=0;
      for (const [key, value] of Object.entries(cartItems)) {
        let nos=value[0];
        let price=value[1]["formattedPrice"];
        res+=nos*price;
        
      }
      res=parseFloat(res)
      
      return res.toFixed(2);
    }
    
    const Logostyles={
      width: '140px'
    }
    return (
      <>
      
      <header >
        
        <div  className="head_cls top-0 flex items-center justify-between px-4 py-3 md:px-6 md:py-4 overflow-x-hidden">
        <Link to="shop/all" className="ml-2 font-medium" >
        <img src={FakeStore_transparent} alt="logo img"  className="logo max-w-20 md:max-w-mdLogow" />
          </Link>
        
        
        <nav className="space-x-4 flex flex-wrap">
        <Link to="shop/all" className='linkStyle md:text-lg' >
            Shop
          </Link>
          <Link to="cart" className='linkStyle md:text-lg'>
            Cart {Object.keys(cart).length}
          </Link>
        </nav>
        </div>
        
      </header>
      <main className="main">
        <CartContext.Provider value={{ cart,setCart,counter,setCounter ,total,setTotal,calculation}}>
        <Outlet/>
        </CartContext.Provider>
        
      </main>
      </>
    )
  }
  
  export default Layout