import { useState } from 'react'
import { Link } from 'react-router-dom';
import useFetchdata from '../../fetchhook/useFetchdata';
import { useParams } from "react-router-dom";
import ProductDispComp from './ProductDispComp';
export  function ProductPage(){
    const { id } = useParams();
    const [url,setUrl]=useState(`https://fakestoreapi.com/products/${id}`)
    const {data,err,loading}=useFetchdata(url);
    if (loading) return <p>Loading...</p>
    if (err) return <p>an error has occured</p>
  

    
    const productInfo = {
                image:data["image"],
                title: data["title"],
                description: data["description"],
                formattedPrice: `${data["price"]}`,
                id:data["id"]
              };
    return(
            <ProductDispComp {...productInfo} />
        )
        
   
}