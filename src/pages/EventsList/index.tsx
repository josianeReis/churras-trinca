import React, { useEffect, useState } from 'react';
import AddEventItem from '../../components/AddEventItem';
import CardItem from '../../components/CardItem';
import PageHeader from '../../components/PageHeader';
import backgroundImg from '../../assets/images/background.svg';

import './EventsList.scss';
import { mockEventData } from '../../utils';

const EventsList: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [eventData, setEventData] = useState<any>({});

  // const fetchEventsData = useCallback(() => {
  //   setEventData(mockEventData);
  // }, []);

  useEffect(() => {
    setEventData(mockEventData);
    // fetchEventsData();
  }, []);

  return (
    <div id="page-event-list">
      <PageHeader page="Listagem de churrascos" background={backgroundImg}>
        <div className="profile-header">
          <h2>Confira os próximos churrascos</h2>
        </div>
      </PageHeader>
      <main>
        {mockEventData.map((item: any) => {
          return <CardItem eventData={item} />;
        })}
        <AddEventItem />
      </main>
    </div>
  );
};

export default EventsList;
