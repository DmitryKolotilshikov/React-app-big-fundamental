import React from 'react';
import cls from './Input.module.css';

export const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <select className={cls.select} value={value} onChange={onChange}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map(opt => (
        <option value={opt.value} key={opt.value}>
          {opt.desc}
        </option>
      ))}
    </select>
  );
};
