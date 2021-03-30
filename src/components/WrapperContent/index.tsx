import React from 'react';

import './styles.scss';
import TopBarContainer from '../TopBarContainer';

const WrapperContent: React.FunctionComponent<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div id="page-content" className={className}>
      <TopBarContainer transparent />
      {children}
    </div>
  );
};

export default WrapperContent;
