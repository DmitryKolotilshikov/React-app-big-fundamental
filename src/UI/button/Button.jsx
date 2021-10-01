import React from 'react';
import cls from './button.module.css';

export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={cls.btn}>
      {children}
    </button>
  );
};
