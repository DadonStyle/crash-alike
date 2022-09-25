import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bomb from '../../components/Bomb/Bomb';
import { setIsLogin, setIsRegister } from '../../redux/actions/pageAction';
import { setIsRoundOver } from '../../redux/actions/roomAction';
import pageSelector from '../../redux/selectors/pageSelector';
import S from './styledPlayRoom';
import userSVG from '../../assets/user.svg';
import useTimer from '../../hooks/useTimer';
import roomSelector from '../../redux/selectors/roomSelector';
import connectionSelector from '../../redux/selectors/connectionSelector';

const PlayRoom = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(pageSelector.isLogin);
  const isRegister = useSelector(pageSelector.isRegister);
  const isRoundOver = useSelector(roomSelector.isRoundOver);

  const startTime = 1000; // 10 sec

  const [
    timer,
    handleStart,
    handleStop,
    // eslint-disable-next-line no-unused-vars
    handleReset,
    status,
    seconds,
    miliSeconds,
  ] = useTimer(startTime, 10, true);

  // users
  const [JoinedList, setJoinedList] = useState([]);
  const [ReadyList, setReadyList] = useState([]);
  const [isHit, setIsHit] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [hitTime, setHitTime] = useState(0);
  // bomb timer
  const [isTicking, setIsTicking] = useState(false);
  // round

  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);
  const clientObj = useSelector(connectionSelector.clientObj);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const socket = new WebSocket(
      `ws://157.245.139.199:8080/bomb?token=${clientObj.ClientToken}`
    );
    // console.log('trying');
    socket.onopen = () => {
      // console.log('onopen', msg);
      setIsOpen(true);
    };
    socket.onerror = (error) => {
      console.log('onerror', error);
      setIsOpen(false);
    };

    socket.onmessage = (msg) => {
      console.log('onmessage', msg);
      const data = JSON.parse(msg.data);
      try {
        console.log(data);
      } catch (err) {
        // whatever you wish to do with the err
        console.log(err);
      }
      return () => socket.close();
    };
  }, [clientObj]);

  useEffect(() => {
    if (isLogin || isRegister) {
      dispatch(setIsLogin(false));
      dispatch(setIsRegister(false));
      // not sure if this gets here (need server to check)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (ReadyList.length >= 5 && status === 'not started') {
      dispatch(setIsRoundOver(false));
      handleStart();
    }

    if (parseFloat(miliSeconds, 10) === 0 && parseFloat(seconds, 10) === 0 && status === 'started') {
      handleStop();
      setIsTicking(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ReadyList.length, isTicking, miliSeconds, seconds]);

  const MockUserCreator = (name) => {
    const newUser = { icon: userSVG, name, id: Math.random() };
    setJoinedList([...JoinedList, newUser]);
    setReadyList([...JoinedList, newUser]);
  };

  const handleBet = useCallback(() => console.log('bet'), []);
  const handleHit = useCallback(() => {
    setIsHit(true);
    console.log('hit');
  }, []);

  return (
    <S.Wrappper>
      <S.ListWrapper>
        <S.ListHeader>Joined:</S.ListHeader>
        {JoinedList &&
          JoinedList.map((item) => (
            <S.UserWrapper key={item.id}>
              <img src={item.icon} alt="" />
              {item.name}
            </S.UserWrapper>
          ))}
      </S.ListWrapper>
      <S.BombWrapper>
        {ReadyList.length >= 5 ? (
          <S.MainHeader>Start in {timer}</S.MainHeader>
        ) : (
          <S.MainHeader>Waiting room</S.MainHeader>
        )}
        <S.PlayersWrapper>
          <S.MiniHeader>Players ready: {JoinedList.length}</S.MiniHeader>
          <S.MiniHeader style={{ marginTop: '-20px' }}>
            Minimum players to start: 5
            <button type="submit" onClick={() => MockUserCreator('Dan')}>
              Add User
            </button>
          </S.MiniHeader>
        </S.PlayersWrapper>
        <Bomb
          startTime={2000}
          isBombTick={isTicking}
          setHitTime={setHitTime}
          isHit={isHit}
        />
        {isTicking ? (
          <button type="submit" onClick={handleHit} disabled={isHit || isRoundOver}>
            Hit
          </button>
        ) : (
          <button type="submit" onClick={handleBet}>
            Bet
          </button>
        )}
      </S.BombWrapper>
      <S.ButtnWrapper>Prize Pool + UI BTN</S.ButtnWrapper>
    </S.Wrappper>
  );
};

export default PlayRoom;
