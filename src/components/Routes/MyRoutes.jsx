import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../../App';
import Login from '../../modules/Login/Login';
import WebsocketConnection from '../../modules/websocketConnection/WebsocketConnection';
import Register from '../../modules/Register/Register';
import S from './styledRoute';

function MyRoutes() {
  return (
    <S.Wrapper>
      {/* <Header /> */}
      <S.Main>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/websocket" element={<WebsocketConnection />} />
          <Route exact path="/" element={<App />} />
          <Route path="*" element={<App />} />
        </Routes>
      </S.Main>
      {/* <Footer /> */}
    </S.Wrapper>
  );
}

export default MyRoutes;
