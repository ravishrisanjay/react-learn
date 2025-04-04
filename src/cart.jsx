import React , { useState } from 'react'
import Payment from './payment';

export default function Cart({object}) {
  let [isclicked,setisclicked]=useState(false);
     function clicked(){
         setisclicked(true)
     }
     if(isclicked){
         return(
             
             <Payment object={object}/>
             
         )
     }
   return (
     <div>S
            <button onClick={clicked}>to shopping</button>
     </div>
   )
 }