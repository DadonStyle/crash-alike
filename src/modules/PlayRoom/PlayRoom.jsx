import React, { useEffect } from 'react';
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

  useEffect(() => {
    if (isLogin || isRegister) {
      dispatch(setIsLogin(false));
      dispatch(setIsRegister(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const JoinedList = [
    { icon: userSVG, name: 'Moshe' },
    { icon: userSVG, name: 'Omer' },
    { icon: userSVG, name: 'Karin' },
  ];

  return (
    <S.Wrappper>
      <S.ListWrapper>
        <h1>Joined:</h1>
        {JoinedList.map((item) => (
          <div>
            <img src={item.icon} alt="" />
            {item.name}
          </div>
        ))}
      </S.ListWrapper>
      <S.BombWrapper>
        <S.MainHeader>Waiting room / start timer</S.MainHeader>
        <S.PlayersWrapper>
          <S.MiniHeader>Players ready: 5</S.MiniHeader>
          <S.MiniHeader style={{ marginTop: '-20px' }}>
            Minimum players to start: 10
          </S.MiniHeader>
        </S.PlayersWrapper>
        <Bomb />
      </S.BombWrapper>
      <S.ButtnWrapper>Prize Pool + UI BTN</S.ButtnWrapper>
    </S.Wrappper>
  );
};

export default PlayRoom;
