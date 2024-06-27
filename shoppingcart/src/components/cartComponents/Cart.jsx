
import { CartContext } from "../context/CartContext";
import { useContext,useEffect,useState } from 'react'
import CheckoutForm from "./CheckoutForm";
import NumberInpCart from "./NumberInpCart";


function Cart() {
  const {cart,counter,setCart,total,setTotal,calculation}=useContext(CartContext);
 const [renderArr, setRenderArr] = useState([]);
 const [isActive, setIsActive] = useState(false);

  useEffect(()=>{
   setRenderArr((item)=>renderCart(cart));
    setTotal(calculation(cart))
    console.log(cart)
    
  },[cart,counter,total])
  
  const Cartstyles = {
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1rem'
  }
  function renderCart(cartItems){
   
    const arr = [];
    if (Object.keys(cartItems).length<=0){
      arr.push(
        <div className="empty self-center">
          <h1 className="md:text-5xl text-2xl font-extrabold dark:text-white">Oops!<small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">The cart is empty</small></h1>
          <h2 className="md:text-4xl text-xl font-bold dark:text-white">Let's do some Shopping</h2>
       
        </div>
      )
      setIsActive(false)
    }
    
    else{
      setIsActive(true)
      for (const [key, value] of Object.entries(cartItems)) {
        arr.push(
        <div style={Itemwidth}  className='item justify-center flex flex-col items-center md:items-start md:flex-row p-3 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
              <img className="prd_img max-w-32 md:max-w-36" src={cartItems[key][1]["image"]} alt={cartItems[key][1]["title"]} />
              <div className="itemDetail flex gap-4">
              <p className="prd_title max-w-44 p-1.5 pl-2.5">{cartItems[key][1]["title"]}</p>
              <div className='prd_info flex flex-col items-center gap-4 text-balance'>
  
              <NumberInpCart {...{id:cartItems[key][1]["id"],val:cartItems[key][0],price:cartItems[key][1]["formattedPrice"]}}/>
              <button className="btnStyle btnColor max-w-20 py-1.5 px-2.5 md:py-2 md:px-4 md:max-w-28" id={cartItems[key][1]["id"]} onClick={(e) => {
              setCart((prev) => {
                const next = { ...prev };
                const itemIdToDelete = cartItems[key][1]["id"];
                delete next[itemIdToDelete];
                return next;
              });
            }}>Remove</button>
              <p className="text-lg font-semibold">${cartItems[key][1]["formattedPrice"]}</p>
              </div>
              </div>
          </div>
          )
        
       
      }
    }
   

    return arr;
  }

  
    const Itemwidth={
      maxWidth:'585px',
    }
   
    return (
    
      <div style={Cartstyles} className="flex cart_comp  cart items-center justify-center lg:items-start lg:justify-between flex-wrap gap-4">
        <div className={isActive?"cart_items gap-4 flex flex-col ":"cart_items gap-4 flex flex-col grow justify-center"}>
        {renderArr}
        </div>
        <CheckoutForm />
      </div>
       
    )
  }
  
  export default Cart
  