import React from 'react';
import {Link} from 'react-router-dom';
export default function Home(){
    return(
       <div>
           
        <Link to='/'><button >Home</button></Link>
        <Link to='/java'><button>Java</button></Link>
        <Link to='/sql'> <button>SQL</button></Link>
        <Link to='/react'> <button>React</button></Link>
       </div>
     
    )
}