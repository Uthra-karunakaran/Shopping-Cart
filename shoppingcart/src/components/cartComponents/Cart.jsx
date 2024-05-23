
import { CartContext } from "../context/CartContext";
import { useContext,useEffect,useState } from 'react'
import CheckoutForm from "./CheckoutForm";
import NumberInpCart from "./NumberInpCart";

function Cart() {
  const {cart,counter,setCart,total,setTotal,calculation}=useContext(CartContext);
 const [renderArr, setRenderArr] = useState([]);

  useEffect(()=>{
   setRenderArr((item)=>renderCart(cart));
    setTotal(calculation(cart))
    
  },[cart,counter,total])
  
  
  function renderCart(cartItems){
   
    const arr = [];
    
    for (const [key, value] of Object.entries(cartItems)) {
      arr.push(
      <div className="item flex p-4 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
            <img className="prd_img w-40 h-40" src={cartItems[key][1]["image"]} />
            <div className="itemDetail flex">
            <p className="prd_title max-w-44 p-1.5 pl-2.5">{cartItems[key][1]["title"]}</p>
            <div className=''>

            <NumberInpCart {...{id:cartItems[key][1]["id"],val:cartItems[key][0],price:cartItems[key][1]["formattedPrice"]}}/>
            <button className="remove" id={cartItems[key][1]["id"]} onClick={(e) => {
            setCart((prev) => {
              const next = Object.assign({}, prev);
              delete next[cartItems[key][1]["id"]];
              return next;
            });
          }}>Remove</button>
            <p>${cartItems[key][1]["formattedPrice"]}</p>
            </div>
            </div>
        </div>
        )
      
     
    }

    return arr;
  }

  
    
    return (
    
      <div className="flex cart justify-between">
        <div className="cart_items flex flex-col">
        {renderArr}
        </div>
        <CheckoutForm />
      </div>
       
    )
  }
  
  export default Cart