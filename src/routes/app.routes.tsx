import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import EventDetails from '../pages/EventDetails';
import EventRegister from '../pages/EventRegister';
import EventsList from '../pages/EventsList';
import Home from '../pages/Home';

function AppRoutes(): any {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/event-register" component={EventRegister} />
      <Route path="/events-list" component={EventsList} />
      <Route path="/event-details" component={EventDetails} />
    </BrowserRouter>
  );
}

export default AppRoutes;
