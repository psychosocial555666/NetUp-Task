import React from 'react';
import { dragXHandler } from '../../common/utils';
import { CardsSliderContainer, CardsSliderItem, CardsSliderList } from './CardsSlider.styles';

const CardsSlider: React.FC = () => {
  const listRef = React.createRef<HTMLUListElement>();
  const pressedRef = React.useRef(false);
  const mousePosRef = React.useRef(0);

  const listScrollHandler = (e: React.WheelEvent) => {
    e.stopPropagation();
    dragXHandler(listRef.current, e.deltaY, 1);
  };

  const mouseDownHandler = (e: React.MouseEvent) => {
    pressedRef.current = true;
    mousePosRef.current = e.clientX;
  };

  const mouseUpHandler = () => {
    pressedRef.current = false;
    mousePosRef.current = 0;
  };

  const mouseMoveHandler = (e: React.MouseEvent) => {
    if (pressedRef.current) {
      e.stopPropagation();
      const delta = mousePosRef.current - e.clientX;
      mousePosRef.current = e.clientX;
      console.log(delta);
      dragXHandler(listRef.current, delta, 1);
    }
  };

  return (
    <CardsSliderContainer
      onWheel={listScrollHandler}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onMouseMove={mouseMoveHandler}
    >
      <CardsSliderList ref={listRef}>
        <CardsSliderItem />
        <CardsSliderItem />
        <CardsSliderItem />
        <CardsSliderItem />
        <CardsSliderItem />
        <CardsSliderItem />
        <CardsSliderItem />
        <CardsSliderItem />
        <CardsSliderItem />
        <CardsSliderItem />
        <CardsSliderItem />
        <CardsSliderItem />
      </CardsSliderList>
    </CardsSliderContainer>
  );
};

export default CardsSlider;
