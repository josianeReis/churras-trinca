import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import { AuthContext } from '../contexts/auth';

const AuthRoutes: React.FC = () => {
  const { signed } = useContext(AuthContext);

  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/forgot-password" exact component={ForgotPassword} />
      <Route
        path="*"
        component={
          signed
            ? () => <Redirect to="/events-list" />
            : () => <Redirect to="/" />
        }
      />
    </Switch>
  );
};

export default AuthRoutes;
