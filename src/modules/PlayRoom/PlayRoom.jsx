import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bomb from '../../components/Bomb/Bomb';
import { setIsLogin, setIsRegister } from '../../redux/actions/pageAction';
import pageSelector from '../../redux/selectors/pageSelector';
import S from './styledPlayRoom';

const PlayRoom = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(pageSelector.isLogin);
  const isRegister = useSelector(pageSelector.isRegister);

  useEffect(() => {
    if (isLogin || isRegister) {
      dispatch(setIsLogin(false));
      dispatch(setIsRegister(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Wrappper>
      <S.ListWrapper>Joined list</S.ListWrapper>
      <S.BombWrapper>
        <S.MainHeader>Waiting room / start timer</S.MainHeader>
        <S.PlayersWrapper>
          <S.MiniHeader>Players ready: 5</S.MiniHeader>
          <S.MiniHeader>Minimum players to start: 10</S.MiniHeader>
        </S.PlayersWrapper>
        <Bomb />
      </S.BombWrapper>
      <S.ButtnWrapper>Prize Pool + UI BTN</S.ButtnWrapper>
    </S.Wrappper>
  );
};

export default PlayRoom;
