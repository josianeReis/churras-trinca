import React from 'react';

import { RiDeleteBin6Line } from 'react-icons/ri';

import './Table.scss';

const Table: React.FC = () => {
  return (
    <div id="table-container">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">Id</div>
          <div className="col col-2">Nome</div>
          <div className="col col-3">Contribuição</div>
          <div className="col col-4">Excluir</div>
        </li>
        <li className="table-row">
          <div className="col col-1" data-label="Job Id">
            01
          </div>
          <div className="col col-2" data-label="Customer Name">
            João pé de feijão
          </div>
          <div className="col col-3" data-label="Amount">
            R$ 20,00
          </div>
          <div className="col col-4" data-label="Payment Status">
            <RiDeleteBin6Line
              className="iconGroup"
              size={24}
              color="rgba(204, 162, 38)"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Table;
