import React from 'react';
import style from '../styles/index.module.css';
import { IPropsFloating } from '../interface/IPropsFloating';

export const FloatingSelect: React.FC<IPropsFloating> = () => {
  return (
    <div className={style.ih_input}>
      <select className={style.ih_form_control} required>
        <option>Male</option>
        <option>Male</option>
      </select>
      <span className={style.ih_input_label}>Gender</span>
    </div>
  );
};
