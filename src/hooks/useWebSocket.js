import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMsgArr, setSocket } from '../redux/actions/connectionAction';
import connectionSelector from '../redux/selectors/connectionSelector';

const useWebSocket = () => {
  const dispatch = useDispatch();
  const clientObj = useSelector(connectionSelector.clientObj);
  const socket = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    socket.current = new WebSocket(
      `ws://157.245.139.199:8080/bomb?token=${clientObj?.ClientToken}`
    );

    socket.current.onopen = (onopen) => {
      console.log('onopen', onopen);
      dispatch(setSocket(socket));
    };
    socket.current.onerror = (error) => {
      console.log('onerror', error);
    };
    socket.current.onclose = () => {
      console.log('WS CLOSED');
      dispatch(setSocket(null));
    };
    socket.current.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      console.log(data);
      try {
        dispatch(addMsgArr([data]));
      } catch (err) {
        // whatever you wish to do with the err
        console.log('No dispatch socket.onmsg err', err);
      }
    };

    return () => socket.current.close();
  }, [clientObj, dispatch]);
};

export default useWebSocket;
