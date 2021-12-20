import React from 'react';
import style from '../styles/index.module.css';

interface IProps {
  label: string;
  error?: boolean;
  color?: string;
}

export const FloatingInput: React.FC<IProps> = ({ error, label }) => {
  return (
    <div className={error ? style.inputError : style.input}>
      <input type="text" required />
      <label className={style.lbl}>
        <span className={style.text}>{label}</span>
      </label>
    </div>
  );
};
