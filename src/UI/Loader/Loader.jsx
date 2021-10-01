import React from 'react';
import cls from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={cls['lds-spinner']}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
