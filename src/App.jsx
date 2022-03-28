import React, { useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const clinet = new W3CWebSocket('ws://147.182.239.36:8080/bomb')

const App = () => {

  useEffect(() => {
    clinet.opopen = () =>{
      console.log('web connected');
    }
  })


  return (
    <>
      <div>hellp</div>
    </>
  )
}

export default App;
