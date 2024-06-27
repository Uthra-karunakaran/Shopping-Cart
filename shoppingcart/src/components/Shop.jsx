import { useState ,useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Sidemenu from './Sidemenu';
import "../styles/shop.css";
import { Outlet } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import FakeStore_transparent from "../assets/FakeStore_transparent.png";

function Shop() {
  const {counter,setCounter}=useContext(CartContext);
  const SidemenuStyles= {
    position: 'sticky',
  top: '1rem',
  alignSelf: 'self-start'
  }

  useEffect(() => {
    const handleBurgerClick = () => {
        document.querySelectorAll('.navbar-menu').forEach(menu => {
            menu.classList.toggle('hidden');
        });
    };

    const handleCloseClick = () => {
        document.querySelectorAll('.navbar-menu').forEach(menu => {
            menu.classList.toggle('hidden');
        });
    };

    const burgerElements = document.querySelectorAll('.navbar-burger');
    const closeElements = document.querySelectorAll('.navbar-close');
    const backdropElements = document.querySelectorAll('.navbar-backdrop');

    burgerElements.forEach(burger => {
        burger.addEventListener('click', handleBurgerClick);
    });

    closeElements.forEach(close => {
        close.addEventListener('click', handleCloseClick);
    });

    backdropElements.forEach(backdrop => {
        backdrop.addEventListener('click', handleCloseClick);
    });

    return () => {
        burgerElements.forEach(burger => {
            burger.removeEventListener('click', handleBurgerClick);
        });

        closeElements.forEach(close => {
            close.removeEventListener('click', handleCloseClick);
        });

        backdropElements.forEach(backdrop => {
            backdrop.removeEventListener('click', handleCloseClick);
        });
    };
    }, []);

  return (
    
    <div className='shop_main flex gap-2.5'>
      <nav className='relative' style={SidemenuStyles}>

        <div class="lg:hidden">
			    <button class="navbar-burger flex items-center text-blue-600 p-3">
				    <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					    <title>Mobile menu</title>
					    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				    </svg>
			    </button>
		    </div>

        <Sidemenu/>
      </nav>
      <div class="navbar-menu relative z-50 hidden">
		    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		      <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			      <div class="flex items-center mb-8">
              <Link to="shop/all" className="ml-2 font-medium mr-auto text-3xl font-bold" >
                <img src={FakeStore_transparent} alt="logo img"  className="logo w-24" />
              </Link>
				      
				      <button class="navbar-close">
					      <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					      </svg>
				      </button>
			      </div>
			      <div>
				      <ul>
					      <li class="mb-1">
                  <Link to="all" className='block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded'>All</Link>
					      </li>
					      <li class="mb-1">
                  <Link to="mens-clothing" className='block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded'>men's clothing</Link>					      
                </li>
					      <li class="mb-1">
                  <Link to="womens-clothing" className='block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded'>women's clothing</Link>
					      </li>
					      <li class="mb-1">
                  <Link to='electronics' className='block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded'>Electronics</Link>
					      </li>
                <li class="mb-1">
                  <Link to="jewelery" className='block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded'>Jewelery</Link>
					      </li>
				     </ul>
			     </div>
			    </nav>
	    </div>
       
      <div className='dispItems grow'>    
        <Outlet/>
      </div>
    </div>
    
  )
}

export default Shop
