import { CartContext } from "../context/CartContext";
import { useContext,useEffect,useState } from 'react'

export default function CheckoutForm(props) {
    const {total}=useContext(CartContext);
    useEffect(()=>{

    },[total]);
    const divheight = {
        maxHeight: '445px',
        position: 'sticky',
        alignSelf: 'start',
        top: '1rem',
      };
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior (page reload)
        // Handle the form data here, e.g., send it to an API
        
      };
  return (
    <div className="max-w-lg flex" style={divheight}>
      <div className="bg-white dark:bg-gray-900 cart_shadow  rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Checkout</h2>
        <form className="" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 dark:text-gray-400 font-medium mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200"
              id="username"
              placeholder="Enter your username"
              type="text"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-400 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200"
              id="email"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 mt-4">${total}</h2>
            </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Checkout
          </button>
        </form>
      </div>
    </div>
    
  )
}