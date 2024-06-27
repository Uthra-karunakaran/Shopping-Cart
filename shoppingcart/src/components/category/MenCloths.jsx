import { useState } from 'react'
import { Link } from 'react-router-dom';
import useFetchdata from '../../fetchhook/useFetchdata';
import Render from '../Render';
import LoadingComponent from '../Loadingcomp/LoadingComponent'
function MenCloths(){
    const [url,setUrl]=useState("https://fakestoreapi.com/products/category/men's%20clothing")
    const {data,err,loading}=useFetchdata(url);
    if (loading) return <LoadingComponent/>
    if (err) return <p>an error has occured</p>
  
    return(
        <Render items={data}/>
    )
}
export default MenCloths;