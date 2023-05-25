import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Join.css";

let user;

const sendUser=()=>{
    user=document.getElementById('joinInput').value;
    document.getElementById('joinInput').value='';
}


const Join = () => {

    const [name,setName]=useState("");
  return (
    <div className='Joinpage'>
      <div className='JoinContainer'>
        
            <img src="https://thumbs.dreamstime.com/b/print-177782579.jpg" alt='logo'/>
            <h1>C CHAT</h1>
            <hr></hr>
            

            <input
            onChange={(e)=>setName(e.target.value)}
            placeholder='Enter Your Name'
            type='text'
            id='joinInput'  
          
            />
            <Link
            onClick={(e)=>!name?e.preventDefault():null}
            to='/chat'>

            <button
            onClick={sendUser}
            className='Joinbtn'>Join Now</button>    
            </Link>
            </div>
        </div>
      
   
  )
}

export default Join
export {user}
