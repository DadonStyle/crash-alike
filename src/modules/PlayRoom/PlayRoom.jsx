import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bomb from '../../components/Bomb/Bomb';
import { setIsLogin, setIsRegister } from '../../redux/actions/pageAction';
import pageSelector from '../../redux/selectors/pageSelector';
import S from './styledPlayRoom';
import userSVG from '../../assets/user.svg';

const PlayRoom = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(pageSelector.isLogin);
  const isRegister = useSelector(pageSelector.isRegister);

  const [JoinedList, setJoinedList] = useState([]);

  useEffect(() => {
    if (isLogin || isRegister) {
      dispatch(setIsLogin(false));
      dispatch(setIsRegister(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const MockUserCreator = (name) => {
    setJoinedList([...JoinedList, { icon: userSVG, name }]);
  };

  return (
    <S.Wrappper>
      <S.ListWrapper>
        <S.ListHeader>Joined:</S.ListHeader>
        {JoinedList &&
          JoinedList.map((item) => (
            <S.UserWrapper>
              <img src={item.icon} alt="" />
              {item.name}
            </S.UserWrapper>
          ))}
      </S.ListWrapper>
      <S.BombWrapper>
        <S.MainHeader>Waiting room / start timer</S.MainHeader>
        <S.PlayersWrapper>
          <S.MiniHeader>Players ready: {JoinedList.length}</S.MiniHeader>
          <S.MiniHeader style={{ marginTop: '-20px' }}>
            Minimum players to start: 5
            <button type="submit" onClick={() => MockUserCreator('Dan')}>
              Add User
            </button>
          </S.MiniHeader>
        </S.PlayersWrapper>
        <Bomb />
      </S.BombWrapper>
      <S.ButtnWrapper>Prize Pool + UI BTN</S.ButtnWrapper>
    </S.Wrappper>
  );
};

export default PlayRoom;
