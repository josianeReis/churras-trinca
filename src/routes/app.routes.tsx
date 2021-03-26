import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import EventRegister from '../pages/EventRegister';

function AppRoutes(): any {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/event-register" component={EventRegister} />
    </BrowserRouter>
  );
}

export default AppRoutes;
