/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import errorIcon from '../../assets/images/icons/x.svg';
import successIcon from '../../assets/images/icons/check.svg';
import './styles.scss';

const FlashMessage: React.FunctionComponent<{
  text: string;
  type: string;
  time?: number;
}> = ({ text, type = 'error', time = 5000 }) => {
  const [t, setT] = useState(false);

  let timeout: NodeJS.Timeout;

  useEffect(() => {
    if (text !== '') {
      setT(true);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeout = setTimeout(() => setT(false), time);
    }
  }, [text]);

  function handleCloseFlash() {
    setT(false);
    clearTimeout(timeout);
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      id="flash-message"
      className={`${type}-message ${t ? 'flash-active' : ''}`}
      onClick={handleCloseFlash}
    >
      <div className="flash-icon">
        <img src={type === 'error' ? errorIcon : successIcon} alt="Icon" />
      </div>
      <div className="flash-content ">
        <div className="flash-heading">
          {type === 'error' ? 'Vish!' : 'Yeeba!'}
        </div>
        <div className="flash-message">{text}</div>
      </div>
    </div>
  );
};

export default FlashMessage;
