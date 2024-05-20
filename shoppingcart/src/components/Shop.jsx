import { useState } from 'react'
import { Link } from 'react-router-dom';
import Sidemenu from './Sidemenu';
import "../styles/shop.css";
import { Outlet } from "react-router-dom";

function Shop() {
  
  return (
    
    <div className='shop_main flex gap-2.5'>
      <nav className='flex flex-col gap-2.5'>
        <Sidemenu/>
      </nav>
      <div className='dispItems grow'>
     
        <Outlet/>
      </div>
    </div>
    
  )
}

export default Shop
