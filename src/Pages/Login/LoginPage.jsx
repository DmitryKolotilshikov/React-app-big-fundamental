import React, { useContext } from 'react';
import { LoginContext } from '../../Context/LoginContext';
import { Button } from '../../UI/button';
import { Input } from '../../UI/Input';
import cls from './LoginPage.module.css';

export const LoginPage = () => {
  const { setIsAuth } = useContext(LoginContext);
  const login = e => {
    e.preventDefault();
    localStorage.setItem('auth', 'true');
    setIsAuth(true);
  };

  return (
    <div className={cls.login}>
      <form onSubmit={login}>
        <Input placeholder="name" />
        <Input placeholder="password" />
        <Button>LOG IN</Button>
      </form>
    </div>
  );
};
