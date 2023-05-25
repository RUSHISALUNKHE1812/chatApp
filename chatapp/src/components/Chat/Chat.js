import React from 'react'
import './Chat.css'

const Chat = () => {
  return (
    <div className='Parent'>
        <div className='Head'>
            <h1>CHAT</h1>
            <span>+</span>
        </div>
    <div className='empty'></div>

    
    <div className='Message'>
       <div className='SendMessage'>
         <input type='text'/>
          <button>Send</button>
        </div> 
        
        </div>    
      
    </div>
  )
}

export default Chat;
