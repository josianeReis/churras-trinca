import React from 'react';

import './CardItem.scss';
import { TiGroupOutline } from 'react-icons/ti';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import yummy from '../../assets/images/icons/yummy.svg';

import Button from '../Button';

const CardItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src={yummy} alt="event owner" />
        <div>
          <strong>21/12</strong>
          <span>Churras da Fulana</span>
        </div>
      </header>
      <p>Rua das Candeias, 831 - São Sebastião --- 20:00</p>

      <footer>
        <div className="guestList">
          <TiGroupOutline
            className="iconGroup"
            size={24}
            color="rgba(204, 162, 38)"
          />
          <span>20</span>
        </div>
        <Link to="/event-details" className="class-edit">
          <HiChevronDoubleRight
            className="iconGroup"
            size={28}
            color="rgba(204, 162, 38)"
          />
        </Link>
      </footer>
    </article>
  );
};

export default CardItem;
