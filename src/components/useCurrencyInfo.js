import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState([]);

    const fetchData=async()=>{
        const res=await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        const  data2 = await res.json();
         setData(data2[currency]);
    
    }
    useEffect(() => {
      fetchData();
    },[currency])


    console.log(data);
    return data

}

export default useCurrencyInfo;