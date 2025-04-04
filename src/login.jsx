import React, { useState } from 'react'
import Shoping from './shoping';

export default function Login({object}) {
    let [isclicked,setisclicked]=useState(false);
    if(isclicked){
        return(<Shoping  object={object} />)
    }
    function clicked(){
        setisclicked(true)
    }
  return (
    <>
    <label>enter user id  {object.userid}</label>
    
    <label>enter the walet balance     {object.wallet}</label>
    
    <button onClick={clicked}>to shopping</button>
    </>
)
}
