import React from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import { useContext } from 'react'
import NumberInp from "./NumberInp";
const ProductDispComp = (props) => {
  const {id, image, description, title, formattedPrice } = props;
  const {cart,counter,setCart,setCounter}=useContext(CartContext);
  
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
  
  return (
    <div className="flex">
        <img className="product-card__image" src={image} />
        <div className="grow">
            <p className="product-card__title">{title}</p>
            <p>{description}</p>
            <p>${formattedPrice}</p>
            <NumberInp />
            <button className="add" id={id} onClick={(e)=>{handleClick(e) }}>Add to cart</button>
        </div>
    </div>
  );
};

export default ProductDispComp;