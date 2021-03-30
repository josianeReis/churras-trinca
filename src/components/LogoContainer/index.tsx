import React from 'react';

import yummy from '../../assets/images/icons/yummy.svg';
import './styles.scss';

// const logoContainerStyle = {
//   backgroundImage: `url(${squaredBgImg})`,
//   backgroundSize: 'contain',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   zIndex: 0,
// };

const LogoContainer: React.FunctionComponent<{ background?: boolean }> = () => {
  return (
    <div className="logo-container">
      {/* {background && (
        <div className="logo-bg-container" style={logoContainerStyle} />
      )} */}
      <div className="logo-hero">
        <div className="logo-content">
          <img src={yummy} alt="Churras trinca" />
          <h1>Churras Trinca</h1>
        </div>
        <h2>Junte os amigos para tomar aquela cerveja TRINCAndo! </h2>
      </div>
    </div>
  );
};

export default LogoContainer;
