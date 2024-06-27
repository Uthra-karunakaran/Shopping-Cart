import { useState } from 'react'
import { Link } from 'react-router-dom';
import useFetchdata from '../../fetchhook/useFetchdata';
import Render from '../Render';
import LoadingComponent from '../Loadingcomp/LoadingComponent'
function Jewellery(){
    const [url,setUrl]=useState('https://fakestoreapi.com/products/category/jewelery')
    const {data,err,loading}=useFetchdata(url);
    if (loading) return <LoadingComponent/>
    if (err) return <p>an error has occured</p>
 
    return(
        <Render items={data}/>
    )
}
export default Jewellery;