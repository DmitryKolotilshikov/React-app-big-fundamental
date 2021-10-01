/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { AppRoute } from './Routes/AppRoute';
import { LoginContext } from './Context/LoginContext';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) setIsAuth(true);
    setIsLoading(false);
  }, []);

  return (
    <>
      <LoginContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
        <BrowserRouter>
          <Navbar />
          <AppRoute />
        </BrowserRouter>
      </LoginContext.Provider>
    </>
  );
}

export default App;
