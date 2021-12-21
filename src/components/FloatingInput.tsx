import React from 'react';
import style from '../styles/index.module.css';

interface IProps {
  label: string;
  error?: boolean;
  color?: string;
  type: string;
}

export const FloatingInput: React.FC<IProps> = ({ label, type }) => {
  return (
    <div className={style.ih_input}>
      <input type={type} className={style.ih_form_control} required />
      <span className={style.ih_input_label}>{label}</span>
    </div>
  );
};
