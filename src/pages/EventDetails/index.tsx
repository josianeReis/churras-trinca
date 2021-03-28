import React from 'react';
import Table from '../../components/Table';

import './EventDetails.scss';

const EventDetails: React.FC = () => {
  return (
    <div id="page-event-list">
      <main>
        <Table />
      </main>
    </div>
  );
};

export default EventDetails;
