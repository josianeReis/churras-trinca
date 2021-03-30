import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../contexts/auth';
import EventDetails from '../pages/EventDetails';
import EventRegister from '../pages/EventRegister';
import EventsList from '../pages/EventsList';

const AppRoutes: React.FC = () => {
  const { signed } = useContext(AuthContext);

  return (
    <Switch>
      <Route path="/events-list" exact component={EventsList} />
      <Route path="/event-register" component={EventRegister} />
      <Route path="/event-details" component={EventDetails} />
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

export default AppRoutes;
