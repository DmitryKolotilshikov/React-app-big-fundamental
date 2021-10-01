import React from 'react';
import cls from './input.module.css';

export const Input = props => {
  return <input {...props} className={cls.input} />;
};
