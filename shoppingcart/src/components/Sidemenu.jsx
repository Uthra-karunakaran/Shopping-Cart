import { useState } from 'react'
import { Link } from 'react-router-dom';
import useFetchdata from '../fetchhook/useFetchdata';

function Sidemenu(){
    const [url,setUrl]=useState('https://fakestoreapi.com/products/categories');
    const {data,err,loading}= useFetchdata(url);
    if (loading) return <p>Loading...</p>
    if (err) return <p>an error has occured</p>
 
    let menu=[
        <Link to="all" className='linkStyle'>all</Link>,
    ]
    data.map((category)=>{
                
                    
        if (category=="men's clothing"){
            menu.push(<Link to="mens-clothing" className='linkStyle'>{category}</Link>)
        }
        else if(category=="women's clothing"){
            menu.push(<Link to="womens-clothing" className='linkStyle'>{category}</Link>)
        }
        else{
            menu.push(<Link to={category} className='linkStyle'>{category}</Link>)
        }
    
    })
    return(
        <>
        <p>Menu</p>
        {menu}
        </>
    )
}
export default Sidemenu;