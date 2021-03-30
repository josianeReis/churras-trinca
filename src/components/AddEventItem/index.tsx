import React from 'react';
import { Link } from 'react-router-dom';

import './AddEventItem.scss';
import addIcon from '../../assets/images/bbk-grill.svg';

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

type Props = React.HTMLAttributes<any>;

const CardAddItem: React.FC<Props> = () => {
  return (
    <Link
      to="/event-register"
      style={{ textDecorationColor: 'none' }}
      className="card-add-container"
    >
      <article className="card-add-item">
        <div className="button-container">
          <div className="add-icon-container">
            <img src={addIcon} alt="Add event" />
          </div>
        </div>
        <span>Adicionar Churras</span>
      </article>
    </Link>
  );
};

export default CardAddItem;
