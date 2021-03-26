/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes } from 'react';

import './styles.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  classname?: string;
}

const Input: React.FunctionComponent<InputProps> = ({
  label,
  name,
  classname = '',
  ...rest
}) => {
  return (
    <div id="input-block" className={classname}>
      {label && <label htmlFor={name}>{label}</label>}
      <input type="text" id={name} {...rest} />
    </div>
  );
};

export default Input;
