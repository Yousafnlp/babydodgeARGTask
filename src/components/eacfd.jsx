import React, { useState, useEffect } from 'react';
import './Test.css'
import { CSSTransition } from 'react-transition-group';

const Carousel = ({ items, active: initialActive }) => {
  const [active, setActive] = useState(initialActive);
  const [direction, setDirection] = useState('');

  const moveLeft = () => {
    const newActive = active - 1;
    setActive(newActive < 0 ? items.length - 1 : newActive);
    setDirection('left');
  };

  const moveRight = () => {
    setActive((active + 1) % items.length);
    setDirection('right');
  };

  const generateItems = () => {
    return [ -1, 0, 1].map((offset) => {
      let index = (active + offset + items.length) % items.length;
      let level = -offset;
      return (
        <CSSTransition key={index} classNames={direction} timeout={1000}>
          <Item id={items[index]} level={level} />
        </CSSTransition>
      );
    });
  };

  return (
    <div className="flex items-center justify-center  bg-black">
    <div className=" container">

    <div id="carousel" className="noselect">
      <div className="arrow arrow-left" onClick={moveLeft}>
        <i className="fi-arrow-left"></i>
      </div>
      <div className="item-container">
        {generateItems()}
      </div>
      <div className="arrow arrow-right" onClick={moveRight}>
        <i className="fi-arrow-right"></i>
      </div>
    </div>
    </div>
    </div>
  );
};

const Item = ({ id, level }) => {
  const className = `item level${level}`;
  return <div className={className}>{id}</div>;
};

const Test = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return <Carousel items={items} active={0} />;
};

export default Test;
