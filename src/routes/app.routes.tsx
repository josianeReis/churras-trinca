import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import EventRegister from '../pages/EventRegister';
import Home from '../pages/Home';

function AppRoutes(): any {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/event-register" component={EventRegister} />
    </BrowserRouter>
  );
}

export default AppRoutes;
