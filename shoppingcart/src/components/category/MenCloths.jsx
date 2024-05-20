import { useState } from 'react'
import { Link } from 'react-router-dom';
import useFetchdata from '../../fetchhook/useFetchdata';
import Render from '../Render';
function MenCloths(){
    const [url,setUrl]=useState("https://fakestoreapi.com/products/category/men's%20clothing")
    const {data,err,loading}=useFetchdata(url);
    if (loading) return <p>Loading...</p>
    if (err) return <p>an error has occured</p>
  
    return(
        <Render items={data}/>
    )
}
export default MenCloths;