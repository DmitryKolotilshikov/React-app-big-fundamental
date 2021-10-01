import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../Context/LoginContext';
import { Button } from '../UI/button';
import cls from './Navbar.module.css';

export const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(LoginContext);
  const logout = () => {
    localStorage.removeItem('auth');
    setIsAuth(false);
  };
  return (
    <div className={cls.navbar}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          {isAuth && (
          <li>
            <Button type="warning" onClick={logout}>Logout</Button>
          </li>
          ) }
        </ul>
      </nav>
    </div>
  );
};
