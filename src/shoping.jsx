import React , { useState } from 'react'
import Cart from './cart'

export default function Shoping({object}) {
    let [isclicked,setisclicked]=useState(false);
    function clicked(){
        setisclicked(true)
    }
    if(isclicked){
        return(
            
            <Cart object={object}/>
            
        )
    }
  return (
    <div>S
           <button onClick={clicked}>to shopping</button>
    </div>
  )
}
