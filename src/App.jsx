import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components/macro';
// import Footer from './modules/Footer/Footer';
import MyRoutes from './components/Routes/MyRoutes';

const App = () => {
  const isLogin = useSelector((state) => state.page.isLogin);
  const isRegister = useSelector((state) => state.page.isRegister);

  const theme = useMemo(
    () => ({
      isLogin,
      isRegister,
    }),
    [isLogin, isRegister]
  );

  return (
    <ThemeProvider theme={theme}>
      <MyRoutes />
    </ThemeProvider>
  );
};

export default App;
