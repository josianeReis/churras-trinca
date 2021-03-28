import React from 'react';
import CardItem from '../../components/CardItem';

import './EventsList.module.scss';

const EventsList: React.FC = () => {
  return (
    <div id="page-event-list" className="container">
      <div className="card-list-container">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
};

export default EventsList;
