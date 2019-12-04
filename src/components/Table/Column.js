import React from 'react';

import classes from './Column.module.css';

const Column = ({ children, title, width }) => {
  return (
    <th width={width}>
      {children ? children : title}
      <i className={classes.split} onMouseDown={onMouseDown} />
    </th>
  );
};

export default Column;

let th, prevTh, thWidth, prevThWidth, prevPageX;

function onMouseDown(e) {
  th = e.target.parentNode;
  prevTh = th.previousSibling;
  prevPageX = e.pageX;
  thWidth = th.offsetWidth;
  prevThWidth = prevTh.offsetWidth;
  document.addEventListener('mousemove', setThWidth);
  document.addEventListener('mouseup', onMouseUp);
}

function onMouseUp(e) {
  document.removeEventListener('mousemove', setThWidth);
}

function setThWidth(e) {
  const offsetWidth = e.pageX - prevPageX;

  prevTh.style.width = prevThWidth + offsetWidth + 'px';
  th.style.width = thWidth - offsetWidth + 'px';
}
