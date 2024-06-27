import { useEffect,useState } from "react";
import axios from 'axios';
import propstypes from "prop-types";
//import { cache } from 'react';
import { useQuery } from "react-query";
useFetchdata.propTypes = {
    url:propstypes.string
}


function useFetchdata(url){
    const [data,setData]=useState({});
    const [err,setErr]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect( ()=>{
        async function fetchData(){
          
            await fetch(url, { mode: "cors" }) 
            .then((res)=>{
                if (!res.ok) {
                    throw new Error('Network error');
                  }
                  
                return res.json();
            })
            .then(res=>setData(res))
            .catch((err)=>setErr(err))
            .finally(()=>setLoading(false));
        }
        
        fetchData();
        
    },[]) 
    
    return {data,err,loading};
}

export default useFetchdata;
