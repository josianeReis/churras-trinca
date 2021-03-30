import React from 'react';
import List from '../../components/List';
import PageHeader from '../../components/PageHeader';
import backgroundImg from '../../assets/images/background.svg';
import { mockEventData } from '../../utils';
import yummy from '../../assets/images/icons/yummy.svg';

import './EventDetails.scss';

const EventDetails: React.FC = () => {
  const eventData = mockEventData[0];
  return (
    <div id="page-event-details">
      <PageHeader page="Detalhes do churrasco" background={backgroundImg}>
        <div className="profile-header">
          <h2>Lista de participantes</h2>
        </div>
      </PageHeader>
      <main>
        <div className="details-container">
          <img src={yummy} alt="event owner" width="18%" />
          <div className="content">
            <h1>{eventData.title}</h1>
            <div>
              <strong>Data: </strong>
              <span>{eventData.scheduled}</span>
            </div>
            <div>
              <strong>Descrição: </strong>
              <span>{eventData.description}</span>
            </div>
            <div>
              <strong>{'Organizador(a): '}</strong>
              <span>{eventData.manager}</span>
            </div>
            <div>
              <strong>Observações: </strong>
              <span>{eventData.notes}</span>
            </div>
          </div>
        </div>
      </main>
      <div className="guest-details">
        <List />
      </div>
    </div>
  );
};

export default EventDetails;
