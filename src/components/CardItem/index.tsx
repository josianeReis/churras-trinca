import React from 'react';

import { TiGroupOutline } from 'react-icons/ti';
import { HiChevronDoubleRight } from 'react-icons/hi';

import './CardItem.scss';

import { Link } from 'react-router-dom';
import yummy from '../../assets/images/icons/yummy.svg';

// type guest = {
//   name: string;
//   email: string;
//   value: string;
//   isPaid: boolean;
// };

// type eventDataType = {
//   name: string;
//   scheduled: string;
//   contributionValue: string;
//   confirmedGuests: any;
// };

type Props = {
  eventData: any;
  // title: string;
  // scheduled: string;
  // description: string;
  // contributionValue: string;
  // confirmedGuests: any;
} & React.HTMLAttributes<any>;

const CardItem: React.FC<Props> = ({ eventData }: Props) => {
  return (
    <Link
      to="/event-details"
      style={{ textDecorationColor: 'none' }}
      className="card-container"
    >
      <article className="card-item">
        <header>
          <img src={yummy} alt="event owner" />
          <div>
            <strong>{eventData.scheduled}</strong>
            <span>{eventData.title}</span>
          </div>
        </header>

        <p>{eventData.description}</p>

        <footer>
          <div className="guestList">
            <TiGroupOutline
              className="iconGroup"
              size={24}
              color="rgba(204, 162, 38)"
            />
            <span>{eventData.confirmedGuests.length || 20}</span>
          </div>
          <HiChevronDoubleRight
            className="iconGroup"
            size={28}
            color="rgba(204, 162, 38)"
          />
        </footer>
      </article>
    </Link>
  );
};

export default CardItem;
