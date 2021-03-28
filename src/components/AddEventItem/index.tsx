import React from 'react';

import { TiGroupOutline } from 'react-icons/ti';
import { HiChevronDoubleRight } from 'react-icons/hi';

import './AddEventItem.scss';

import yummy from '../../assets/images/icons/yummy.svg';

function AddEventItem(): any {
  return (
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
  );
}

export default AddEventItem;
