import React, { useState } from 'react'
import Login from './login';

export default function Index() {
    let [isclicked,setisclicked]=useState(false);
    let [object,setobject]=useState({'userid':'ssking','wallet':10000});
    function retrunlog(){
        setisclicked(true);
    }
    if(isclicked){
        return(<Login object={object}/>)
    }
  return (
    <div>
        <button onClick={retrunlog}>login</button>
    </div>
  )
}
