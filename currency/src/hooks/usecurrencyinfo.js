import React from "react";
import {useState,useEffect} from React

function usecurrencyinfo(currency) {
    const [data,setdata] = useState({})//just for the sake of condition when there is no data 
    useEffect(()=>{
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res)=>res.json()) // the response would be in strings so we convert it into json by json method or json.parse method//
      .then((res)=>setdata(res[currency]))
      console.log(data);
    },[currency])
    console.log(data);
    return data;
}

export default usecurrencyinfo;