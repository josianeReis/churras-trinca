import React from 'react';

import { TiGroupOutline } from 'react-icons/ti';
import { HiChevronDoubleRight } from 'react-icons/hi';

import './CardItem.scss';

import { Link } from 'react-router-dom';
import yummy from '../../assets/images/icons/yummy.svg';

type Props = React.HTMLAttributes<any>;

const CardItem: React.FC<Props> = () => {
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
            <strong>21/12/2021</strong>
            <span>Churras da Mari</span>
          </div>
        </header>

        <p>Churras para comemorar o aniversário da Mari</p>

        <footer>
          <div className="guestList">
            <TiGroupOutline
              className="iconGroup"
              size={24}
              color="rgba(204, 162, 38)"
            />
            <span>20</span>
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
