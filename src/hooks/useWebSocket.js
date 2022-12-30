import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMsgArr, setSocket } from '../redux/actions/connectionAction';
import connectionSelector from '../redux/selectors/connectionSelector';

const useWebSocket = () => {
  const dispatch = useDispatch();
  const clientObj = useSelector(connectionSelector.clientObj);
  const msgArr = useSelector(connectionSelector.msgArr);
  const socket = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    socket.current = new WebSocket(
      `ws://157.245.139.199:8080/bomb?token=${clientObj.ClientToken}`
    );

    socket.current.onopen = () => {
      setSocket(socket);
    };
    socket.current.onerror = (error) => {
      console.log('onerror', error);
    };
    socket.current.onclose = (error) => {
      console.log('onclose', error);
    };
    socket.current.onmessage = (msg) => {
      // console.log('onmessage', msg);
      const data = JSON.parse(msg.data);
      try {
        dispatch(setMsgArr([...msgArr, data])); // not working need to add data with previous array data
        console.log(data);
      } catch (err) {
        // whatever you wish to do with the err
        console.log(err);
      }
    };

    return () => socket.current.close();
  }, [clientObj, dispatch, msgArr]);
};

export default useWebSocket;
