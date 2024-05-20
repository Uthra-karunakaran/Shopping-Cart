import { useEffect,useState } from "react";
import propstypes from "prop-types";
useFetchdata.propTypes = {
    url:propstypes.string
}
function useFetchdata(url){
    const [data,setData]=useState({});
    const [err,setErr]=useState(null);
    const [loading,setLoading]=useState(true);
    /*
     [
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing"
            ]
    */
   
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