/* eslint-disable react/jsx-props-no-spreading */
import React, { ButtonHTMLAttributes } from 'react';

import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  name: string;
  classname?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  name,
  classname = '',
  ...rest
}) => {
  return (
    <div id="buttonContainer" className={classname}>
      {label && <label htmlFor={name}>{label}</label>}
      <button id={name} {...rest} />
    </div>
  );
};

export default Button;
