import React , { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Payment() {
 let [isclicked,setisclicked]=useState(false);
 let userid=useSelector(state=>state.userid);
 let dispatch=useDispatch();
      
function clicked(){
  setisclicked(true)
  dispatch(updatewallet(5000));
}
      if(isclicked){
        return (
            <div>S
              <h1>the payement page</h1>
              <h1>{userid}</h1>
              <h1>{}</h1>
                   <button onClick={clicked}>to pay</button>
                   <h1>balance  {}</h1>
            </div>
          )
      }
     
    return (
      <div>S
        <h1>the payement page</h1>
        <h1>{userid}</h1>
        <h1>{wallet}</h1>
             <button onClick={clicked}>to pay</button>
      </div>
    )
  }