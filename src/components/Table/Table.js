import React from 'react';

import classes from './Table.module.css';

const Table = ({
  data = [],
  children = [],
  rowKey = 'id',
  className = classes.table
}) => {
  return (
    <table className={className}>
      <thead>
        <tr>{children}</tr>
      </thead>
      <tbody>
        {data.map(item => {
          return (
            <tr key={item[rowKey]}>
              {children.map(column => {
                const { dataIndex, render, className } = column.props;
                const value = dataIndex ? item[dataIndex] : item;
                return (
                  <td key={column.key || dataIndex} className={className}>
                    {render ? render(value, item) : value}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
