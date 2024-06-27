import React from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import { useEffect, useState } from 'react'
import { useContext } from 'react'

const ProductDispComp = (props) => {
  const {id, image, description, title, formattedPrice } = props;
  const {cart,setCart}=useContext(CartContext);
  const [counter, setCounter] = useState(1);
  const handleClick=(e)=>{
    let temp={...cart}
    let key=e.target.id;
    if (key in temp){
      temp[key][0]+=counter;
    }
    else{
      temp[key]=[counter,{id:id,image:image,title:title,formattedPrice:formattedPrice}]
    }
 
    setCart((items)=>temp);
    setCounter(1);
  }
  const handleIncrement = () => {
    setCounter(prevCounter => prevCounter + 1);
  };


  const handleDecrement = () => {
    setCounter(prevCounter => (prevCounter > 1 ? prevCounter - 1 : 1));
  };
  
  return (
    <div className="productDispComp2 ">
        <img className="productDispComp_img max-w-40  md:max-w-80 lg:max-w-sm boxShadow" src={image} alt={title}/>
        <div className="productDispComp_div flex flex-col gap-8">
            <h1 className="productDispComp_title text-lg md:text-2xl font-bold dark:text-white text-balance">{title}</h1>
            <p className="text-balance">{description}</p>
            <h2 className="text-lg md:text-2xl font-bold dark:text-white">${formattedPrice}</h2>
            <div className="flex flex-wrap items-center gap-12">

            <form id="inputForm" className="max-w-xs ">
                <div className="relative flex items-center">
                   <button type="button" id="decrement-button" onClick={handleDecrement} data-input-counter-decrement="counter-input" className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                     <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                      </svg>
                    </button>
                    <input type="text" id="counter-input"  value={counter} data-input-counter className="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" />
                    <button type="button" id="increment-button" onClick={handleIncrement} data-input-counter-increment="counter-input" className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                       <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                       </svg>
                    </button>
                </div>
             </form>

            <button className="btnStyle btnColor" id={id} onClick={(e)=>{handleClick(e) }}>Add to cart</button>
            </div>
        </div>
    </div>
  );
};

export default ProductDispComp;