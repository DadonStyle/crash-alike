import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import S from './styled';
import userSVG from '../../../assets/user.svg';
import connectionSelector from '../../../redux/selectors/connectionSelector';
import PlayRoom from '../PlayRoom/PlayRoom';

const WaitingRoom = () => {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const socket = useSelector(connectionSelector.socket);

  // users
  const [joinedList, setJoinedList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [readyList, setReadyList] = useState([]);

  const MockUserCreator = (name) => {
    const newUser = { icon: userSVG, name, id: Math.random() };
    setJoinedList([...joinedList, newUser]);
    setReadyList([...joinedList, newUser]);
  };

  return (
    readyList?.length >= 5 ?
      <PlayRoom />
      :
      <S.Wrappper>
        <S.ListWrapper>
          <S.ListHeader>Joined:</S.ListHeader>
          {joinedList?.map((item) => (
            <S.UserWrapper key={item.id}>
              <img src={item.icon} alt="" />
              {item.name}
            </S.UserWrapper>
          ))}
        </S.ListWrapper>
        <S.BombWrapper>
          <S.MainHeader>Waiting room</S.MainHeader>
          <S.PlayersWrapper>
            <S.MiniHeader>Players ready: {joinedList.length}</S.MiniHeader>
            <S.MiniHeader style={{ marginTop: '-20px' }}>
              Minimum players to start: 5
              <button type="submit" onClick={() => MockUserCreator('Dan')}>
                Add User
              </button>
            </S.MiniHeader>
          </S.PlayersWrapper>
        </S.BombWrapper>
        <S.ButtnWrapper>Prize Pool + UI BTN</S.ButtnWrapper>
      </S.Wrappper>
  );
};

export default WaitingRoom;
