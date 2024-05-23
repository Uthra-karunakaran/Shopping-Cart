import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom";
import "../styles/layout.css";
import { useEffect, useState } from 'react'
import { CartContext } from "./context/CartContext";
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
    
    return (
      <>
      <header >
        
        <div className="head_cls sticky top-0 flex items-center justify-between px-4 py-3 md:px-6 md:py-4">

        <span className="ml-2 font-medium">FakeStore</span>
        
        <nav className="space-x-4 md:flex">
        <Link to="shop/all" className='linkStyle' >
            Shop
          </Link>
          <Link to="cart" className='linkStyle'>
            Cart
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