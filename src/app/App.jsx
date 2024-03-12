"use client";
import './App.css'
import Nav from './components/Nav/Nav'
import Player from './components/Player/Player'
import { useRef,useState } from 'react'
import EventEmitter from "events";


function App() {
  const [ee] = useState(new EventEmitter());
  return (
    <>
      <div id="app">
        <Nav  ee = {ee}/>
        <Player  ee={ee} />
        {/* <TryMultitrack/> */}
      </div>
    </>
  )
}

export default App
