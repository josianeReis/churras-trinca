import React from 'react';
import { useAuth } from '../contexts/auth';

import AuthRoutes from './AuthRoutes';
import PrivateRoutes from './PrivateRoutes';

const Routes: React.FC = () => {
  const { signed } = useAuth();

  return signed ? <PrivateRoutes /> : <AuthRoutes />;
};

export default Routes;
