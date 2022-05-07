import React from 'react';
import Header from './modules/Header/Header';
import Footer from './modules/Footer/Footer';
import S from './styledApp';

const App = () => (
  <S.AppContainer>
    <Header headerName="CryptoTower" />
    {/* ADD BODDY */}
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>FILL</div>
      <div>FILL</div>
      <div>FILL</div>
      <div>FILL</div>
      <div>FILL</div>
      <div>FILL</div>
      <div>FILL</div>
    </div>
    <Footer />
  </S.AppContainer>
);

export default App;
