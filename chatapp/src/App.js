import React from 'react'
import Join from './components/Join/Join.js'
import Chat from './components/Chat/Chat.js'
import {Route,Routes} from "react-router-dom"

const App = () => {
  return (
    <div>

     {/* <Chat/> */}
      <Routes>
        <Route exact path="/" element={<Join/>}/>
        <Route path="/chat" elemengt={<Chat/>}/>
      </Routes>
    </div>
  )
}

export default App
