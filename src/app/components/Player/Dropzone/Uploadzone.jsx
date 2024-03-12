import React from "react";
import { useDropzone } from "react-dropzone";
// import uploadImg from "../../../../../public/";

export default function Uploadzone({ onDrop }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 
      'audio/mpeg': ['.mp3'],
      'audio/ogg': ['.ogg'],
      'audio/wav': ['.wav'],
    },
    onDrop,
  });

  return (
    <div {...getRootProps({ className: "dropzone", id: "file-upload-container" })}>
      <input className="input-zone" {...getInputProps()} />
      <div className="text-center">
        <img width="40" height="40" src='upload.png' alt="upload--v1" style={{ padding: 10 }} />
        {isDragActive ? (
          <p className="dropzone-content">Release the jam!</p>
        ) : (
          <p className="dropzone-content">
            Drop the music to start jamming, or click to select
          </p>
        )}
      </div>
    </div>
  );
}
