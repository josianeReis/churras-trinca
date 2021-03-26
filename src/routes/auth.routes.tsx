import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

function AuthRoutes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/forgot-password" exact component={ForgotPassword} />
    </BrowserRouter>
  );
}

export default AuthRoutes;
