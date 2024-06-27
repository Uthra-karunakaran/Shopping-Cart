import { useEffect, useState } from 'react'
import { CartContext } from "../context/CartContext";
import { useContext } from 'react'
export default function NumberInp(props){
  let {id,val,price}=props
    // Initialize the counter state
  const [localCounter, setLocalCounter] = useState(val);
  const {cart,setCart,total,setTotal,calculation}=useContext(CartContext);
  useEffect(()=>{
    setCart(handleClick())
    setTotal(calculation(cart))
    console.log("from numincart")
    console.log(cart);
  },[localCounter,total])
  const handleClick=()=>{
    let temp={...cart}
    let key=id
    if (key in temp){
      temp[key][0]=localCounter;
    }
    return temp;
  }
  
  // Function to handle increment
  const handleIncrement = () => {
    setLocalCounter(prevCounter => prevCounter + 1);
    
  };

  // Function to handle decrement
  const handleDecrement = () => {
    setLocalCounter(prevCounter => (prevCounter > 1 ? prevCounter - 1 : 1));
  };
    return(
        <form className="max-w-xs mx-auto">

        <div className="relative flex items-center">
          <button type="button" id="decrement-button" onClick={handleDecrement} data-input-counter-decrement="counter-input" className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
            </svg>
          </button>
          <input type="text" id="counter-input"  value={localCounter} data-input-counter className="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-lg font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" />
          <button type="button" id="increment-button" onClick={handleIncrement} data-input-counter-increment="counter-input" className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg className="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
            </svg>
          </button>
        </div>
      </form>
    )
}