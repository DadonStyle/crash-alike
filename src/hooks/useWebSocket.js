import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import connectionSelector from '../redux/selectors/connectionSelector';

const useWebSocket = () => {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);
  const clientObj = useSelector(connectionSelector.clientObj);
  const socket = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    socket.current = new WebSocket(
      `ws://157.245.139.199:8080/bomb?token=${clientObj.ClientToken}`
    );
    socket.current.onopen = () => {
      setIsOpen(true);
    };
    socket.current.onerror = (error) => {
      console.log('onerror', error);
      setIsOpen(false);
    };

    return () => socket.current.close();
  }, [clientObj, setIsOpen]);

  useEffect(() => {
    socket.current.onmessage = (msg) => {
      // console.log('onmessage', msg);
      const data = JSON.parse(msg.data);
      try {
        console.log(data);
      } catch (err) {
        // whatever you wish to do with the err
        console.log(err);
      }
    };
  }, []);

  return [
    socket
  ];
};

export default useWebSocket;
