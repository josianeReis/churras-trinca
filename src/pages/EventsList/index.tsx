import React from 'react';
import CardItem from '../../components/CardItem';

import './EventsList.module.scss';

// const classesLabel = [
//   {
//     id: 1,
//     name: 'josiane',
//   },
//   {
//     id: 2,
//     name: 'patricia',
//   },
//   {
//     id: 3,
//     name: 'marcio',
//   },
// ];

const EventsList: React.FC = () => {
  return (
    <div id="page-event-list" className="container">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
};

export default EventsList;
