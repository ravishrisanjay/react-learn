import React,{useState} from 'react'
import {qarr} from '../../qdata'
import './styles.css'
export default function Ques() {
   let [index,setindex]=useState(0);
    let [current,setcurrent]=useState(qarr[index]); 
    let [finish,setfinish]=useState(false)
    let [score,setscore]=useState(0)
    let [lock,setlock]=useState(false)
    let [ele,setele]=useState(null);
    let [val,setval]=useState('incorrect');
    if(finish){
        return(
            <h1>the ques is finished ,score : {score}</h1>
        )
    }
    function checkans(e,ans){
        setele(e.target)
        e.className='ss';
        if(!lock){
        if(ans===current.ans){
            e.target.classList.add('correct')
            setval('correct')
            setscore(score+1);
            setlock(true)
        }
        else{
            setval('incorrect')
            e.target.classList.add('incorrect')
            setlock(true)
        }
    }
    }
  return (
    <div>
        <div className='ques'>
            <h1>Quiz</h1>
            <h3>{current.qestion}</h3>
            <ul className='question'>
                <li onClick={(e)=>{checkans(e,current.A)}}  >{current.A}</li>
                <li onClick={(e)=>{checkans(e,current.B)}}>{current.B}</li>
                <li onClick={(e)=>{checkans(e,current.C)}}>{current.C}</li>
                <li onClick={(e)=>{checkans(e,current.D)}}>{current.D}</li>
            </ul>
        <button onClick={()=>{      if(index<qarr.length-1){      setcurrent(qarr[index+1])

            setindex(index+1);
            setlock(false)
           
            ele.classList.remove(val)
        }
        else{
            setindex(0);

           setfinish(true)
        }}}>Next</button>
        <h1>Question {index +1}/{qarr.length}</h1>
        </div>

    </div>
  )
}
