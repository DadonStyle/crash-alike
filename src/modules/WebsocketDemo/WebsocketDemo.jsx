import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

const WebSocketDemo = () => {
  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState('ws://147.182.239.36:8080/bomb');
  const [messageHistory, setMessageHistory] = useState([]);

  const {
    // sendMessage,
    // lastMessage,
    // readyState,
  } = useWebSocket(socketUrl);

  // useEffect(() => {
  //   if (lastMessage !== null) {
  //     setMessageHistory(prev => prev.concat(lastMessage));
  //   }
  // }, [lastMessage, setMessageHistory]);

  const handleClickChangeSocketUrl = useCallback(() => setSocketUrl('ws://147.182.239.36:8080/bomb'), []);

  // const handleClickSendMessage = useCallback(() =>
  //   sendMessage('Hello'), []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }; // use to be on dependency array on this obj [readyState]

  return (
    <div>
      <button
        onClick={handleClickChangeSocketUrl}
      >
        Click Me to set BOMB url
      </button>
      {/* <button
        onClick={handleClickSendMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Click Me to send 'Hello'
      </button> */}
      <span>The WebSocket is currently {connectionStatus}</span>
      {/* {lastMessage ? <span>Last message: {lastMessage.data}</span> : null} */}
      <ul>
        {messageHistory
          .map((message, idx) => <span key={idx}>{message ? message.data : null}</span>)}
      </ul>
    </div>
  );
};

export default WebSocketDemo;