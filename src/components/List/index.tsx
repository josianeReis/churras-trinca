import React from 'react';

import { RiDeleteBin6Line } from 'react-icons/ri';
import paid from '../../assets/images/icons/paid.svg';
import './List.scss';

const columns = [
  {
    id: 'id',
    label: 'Id',
  },
  {
    id: 'name',
    label: 'Nome',
  },
  {
    id: 'value',
    label: 'Contribuição',
  },
  {
    id: 'payment',
    label: 'pagamento',
  },
  {
    id: 'exclude',
    label: 'Excluir',
  },
];

const data = [
  {
    id: 0,
    name: 'Josiane Reis',
    paid: true,
    value: 'R$ 20,00',
  },
  {
    id: 1,
    name: 'Carlos Araujo',
    paid: false,
    value: 'R$ 20,00',
  },
  {
    id: 2,
    name: 'Douglas Gonçalves',
    paid: false,
    value: 'R$ 20,00',
  },
  {
    id: 3,
    name: 'Raphaela Aleixo',
    paid: true,
    value: 'R$ 20,00',
  },
];

const List: React.FC = () => {
  return (
    <div id="table-container">
      <ul className="responsive-table">
        <li className="table-header">
          {columns.map((el, index) => {
            return <div className={`col col-${index}`}>{el.label}</div>;
          })}
        </li>
        {data.map((item: Record<string, any>) => {
          return (
            <li className="table-row">
              {columns.map((column, index) => {
                return (
                  <div className={`col col-${index}`} data-label={column.label}>
                    {columns.length - 1 !== index ? (
                      item[column.id]
                    ) : (
                      <RiDeleteBin6Line
                        className="iconGroup"
                        size={24}
                        color="rgba(204, 162, 38)"
                      />
                    )}

                    {column.id === 'payment' && item.paid ? (
                      <img src={paid} alt="event owner" width="25rem" />
                    ) : null}
                  </div>
                );
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
