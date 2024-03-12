import React, { useRef, useState } from 'react'


export default function Nav({ee}) {
    const [ppIcon, setPpIcon] = useState('https://img.icons8.com/ios/50/play--v1.png')
    const sliderRef = useRef(null)
    const [isPlaying,setIsPlaying] = useState(false)
    const handlePausePlay=()=>{
      ee.emit('statechange','cursor')
      isPlaying ? handlePause() : handlePlay()
    }
    const handlePause=()=>{
      ee.emit('pause')
      setIsPlaying(false)
      setPpIcon('https://img.icons8.com/ios/50/play--v1.png') 
    }

    const handlePlay=()=>{
      ee.emit('play')
      setIsPlaying(true)
      setPpIcon('https://img.icons8.com/ios/50/pause--v1.png')
    }
    const handleDownload=()=>{
      ee.emit("startaudiorendering", "wav");
    }
    const handleDrag = ()=>{
      ee.emit('statechange','shift')
      if(isPlaying){
        handlePause()
      }
    }

  return (
    <div id='nav'>
      <div id='nav-logo'><img src='logo.png' alt="logo" /></div>
      <div style={{display:'flex', position:'fixed',right:'20px',zIndex:"100"}}>
        <div id='download-button-container'  onClick={handlePausePlay}>
          <button id='download-button' ><img width="25" height="25" src={ppIcon} alt="pause-play"/></button>
        </div>
        <div id='download-button-container' onClick={handleDownload}>
          <button id='download-button' ><img width="25" height="25" src="https://img.icons8.com/ios/50/download--v1.png" alt="download"/></button>
        </div>
        <div id='download-button-container'onClick={handleDrag}>
          <button id='download-button' ><img width="25" height="25" src="https://img.icons8.com/ios/50/resize-four-directions--v1.png" alt="drag"/></button>
        </div>
      </div>
    </div>
  )
}
