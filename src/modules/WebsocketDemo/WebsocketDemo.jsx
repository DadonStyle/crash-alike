import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useDispatch, useSelector } from 'react-redux'
import { setJwtToken } from '../../redux/actions/connectionAction'
import axios from 'axios';

const WebSocketDemo = () => {
  // const axios = Axios.create({ baseURL }); this is the option to get instance with already part url inside
  const dispatch = useDispatch()
  const jwtToken = useSelector(state => state.jwtToken)
  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState('ws://147.182.239.36:8080/bomb');

  const {
    // sendMessage,
    // lastMessage,
    readyState,
  } = useWebSocket(socketUrl);

  // useEffect(() => {
  //   if (lastMessage !== null) {
  //     setMessageHistory(prev => prev.concat(lastMessage));
  //   }
  // }, [lastMessage, setMessageHistory]);

  const handleClickChangeSocketUrl = useCallback(() => setSocketUrl('ws://147.182.239.36:8080/bomb'), []);

  const handleLogin = useCallback(async () => {
    const res = await axios.post('http://147.182.239.36:8081/login', {
      username: 'noamoni9@gmail.com',
      password: 'NoamDadon'
    })
    console.log(res)
    dispatch(setJwtToken(res))
    return res;
  })


  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState]; // use to be on dependency array on this obj [readyState]

  return (
    <div>
      <button
        onClick={handleClickChangeSocketUrl}
      >
        Click Me to set BOMB url
      </button>
      <button
        onClick={handleLogin}
        // disabled={readyState !== ReadyState.OPEN}
      >
        Click Me to login
      </button>
      <span>The WebSocket is currently {}</span>
      {/* {lastMessage ? <span>Last message: {lastMessage.data}</span> : null} */}
      {/* <ul>
        {messageHistory
          .map((message, idx) => <span key={idx}>{message ? message.data : null}</span>)}
      </ul> */}
      {jwtToken}
    </div>
  );
};

export default WebSocketDemo;