import React from 'react';
import AddEventItem from '../../components/AddEventItem';
import CardItem from '../../components/CardItem';
import Input from '../../components/Input';

import './EventsList.scss';

const EventsList: React.FC = () => {
  return (
    <div id="page-event-list">
      <main>
        <CardItem className="card-item" />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <AddEventItem />
      </main>
    </div>
  );
};

export default EventsList;
