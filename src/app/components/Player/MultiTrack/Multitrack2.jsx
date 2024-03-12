import React, { useCallback, useState, useRef } from "react";
import Script from "next/script";
import WaveformPlaylist from "waveform-playlist";
import { saveAs } from "file-saver";
import "waveform-playlist/styles/playlist.css";

export default function MultiTrack2({file,ee}) {
 
  const [toneCtx, setToneCtx] = useState(null);
  const setUpChain = useRef();

  const container = useCallback(
    (node) => {
      if (node !== null && toneCtx !== null) {
        const playlist = WaveformPlaylist(
            {
                ac: toneCtx.rawContext,
                samplesPerPixel: 100,
                mono: true,
                waveHeight: 100,
                container: node,
                state: "cursor",
                colors: {
                  waveOutlineColor: "#E0EFF1",
                  timeColor: "grey",
                  fadeColor: "black",
                },
                controls: {
                  show: false,
                  width: 150,
                },
                zoomLevels: [100, 300, 500],
              },
              ee
        );

        ee.on("audiorenderingstarting", function (offlineCtx, a) {
          // Set Tone offline to render effects properly.
          const offlineContext = new Tone.OfflineContext(offlineCtx);
          Tone.setContext(offlineContext);
          setUpChain.current = a;
        });

        ee.on("audiorenderingfinished", function (type, data) {
          //restore original ctx for further use.
          Tone.setContext(toneCtx);
          if (type === "wav") {
            saveAs(data, "test.wav");
          }
        });

        playlist.load(
               [ ]
        );

        //initialize the WAV exporter.
        playlist.initExporter();
      }
    },
    [ee, toneCtx]
  );

  function handleLoad() {
    setToneCtx(Tone.getContext());
  }

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.37/Tone.js"
        onLoad={handleLoad}
      />
      <main>
        <div ref={container}></div>
      </main>
    </>
  );
}
