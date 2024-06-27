import { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetchdata from '../fetchhook/useFetchdata';
import LoadingComponent from './Loadingcomp/LoadingComponent';

function Sidemenu(){
    const [url,setUrl]=useState('https://fakestoreapi.com/products/categories');
    const {data,err,loading}= useFetchdata(url);
    if (loading) return <LoadingComponent/>
    if (err) return <p>an error has occured</p>
 
    let menu=[
        <Link to="all" className='linkStyle text-base flex flex-nowrap w-36'>All</Link>,
    ]
    
    data.map((category)=>{
                
                    
        if (category=="men's clothing"){
            menu.push(<Link to="mens-clothing" className='linkStyle text-base flex flex-nowrap w-36'>{category}</Link>)
        }
        else if(category=="women's clothing"){
            menu.push(<Link to="womens-clothing" className='linkStyle text-base flex flex-nowrap w-36'>{category}</Link>)
        }
        else{
            menu.push(<Link to={category} className='linkStyle text-base flex flex-nowrap w-36'>{category}</Link>)
        }
    
    })
    return(
        <>
        <div className='hidden lg:flex lg:flex-col lg:gap-2.5'>
          <p className='text-lg text-[#3131F1] font-semibold'>Menu</p>
          {menu}
        </div>
       
        </>
    )
}
export default Sidemenu;