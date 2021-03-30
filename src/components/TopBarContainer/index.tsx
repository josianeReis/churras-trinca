import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import logoImg from '../../assets/images/logo-trinca.svg';

import './styles.scss';

interface TopBarContainerProps {
  profile?: boolean;
  title?: string;
  transparent?: boolean;
}

const TopBarContainer: React.FunctionComponent<TopBarContainerProps> = ({
  profile = false,
  title,
  transparent = false,
}) => {
  return (
    <div
      className={`holder-top-bar ${!profile || (transparent && 'holder-dark')}`}
    >
      <div className="top-bar-container">
        <Link to="/">
          <div className="arrow-back-icon">
            <BiArrowBack
              className="iconGroup"
              size={32}
              color="rgba(204, 162, 38)"
            />
          </div>
        </Link>
        <p>{title}</p>
        <div className="logo-container">
          <img src={logoImg} alt="Trinca" />
        </div>
      </div>
    </div>
  );
};

export default TopBarContainer;
