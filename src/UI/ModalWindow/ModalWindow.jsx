import React from 'react';
import classes from './ModalWindow.module.css';

export const ModalWindow = ({ children, visible, setVisible }) => {
  const cls = [classes.modal];

  if (visible) cls.push(classes.active);

  return (
    <div className={cls.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.content} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
