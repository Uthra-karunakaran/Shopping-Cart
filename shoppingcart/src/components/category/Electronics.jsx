import { useState } from 'react'
import { Link } from 'react-router-dom';
import useFetchdata from '../../fetchhook/useFetchdata';
import Render from '../Render'
import LoadingComponent from '../Loadingcomp/LoadingComponent';
function Electronics(){
    const [url,setUrl]=useState('https://fakestoreapi.com/products/category/electronics')
    const {data,err,loading}=useFetchdata(url);
    if (loading) return <LoadingComponent/>
    if (err) return <p>an error has occured</p>
   
    return(
        <Render items={data}/>
    )
}
export default Electronics;