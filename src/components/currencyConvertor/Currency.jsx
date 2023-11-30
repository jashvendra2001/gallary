import React from 'react'
import useCurrencyInfo from '../useCurrencyInfo';
import { useState } from 'react'

const Currency = () => {

    const[currency,setCurrency]=useState("acs");
    const data=useCurrencyInfo(currency);
  return (
    <div>
       rupees:{Math.floor(data.aoa)};


       
    </div>
  )
}

export default Currency
