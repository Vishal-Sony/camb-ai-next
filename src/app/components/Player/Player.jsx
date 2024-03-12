import React ,{ useRef, useState, useMemo, useCallback } from 'react'
import Uploadzone from './Dropzone/Uploadzone'
import cuid  from 'cuid';
import MultiTrack2 from './MultiTrack/Multitrack2';



export default function Player({  multitrackRef,ee }) {
  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
        ee.emit("newtrack",e.target.result)
      };
      
      reader.readAsDataURL(file);
      return file;
    });
  }, []);
  
 
  return (
    <div id='player'>
      <Uploadzone onDrop={onDrop} />
      {/* <MultiTrack file={images} multitrackRef={multitrackRef}/> */}
      <MultiTrack2 file={images} ee={ee}/>
    </div>
  )
}
