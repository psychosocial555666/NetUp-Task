import React from 'react';
import { connect } from 'react-redux';
// import { dragXHandler } from '../../common/utils';
import Card from '../Card/Card';
import { CardsSliderContainer, CardsSliderItem, CardsSliderList } from './CardsSlider.styles';
import { IProps, StateType } from './CardsSlider.types';

const mapStateToProps = (state: StateType) => ({
  items: state.items,
  filtered: state.filtered,
});

const CardsSlider: React.FC<IProps> = ({ items, filtered }) => {
  const listRef = React.createRef<HTMLUListElement>();
  const pressedRef = React.useRef(false);
  const mousePosRef = React.useRef(0);

  const listScrollHandler = (e: React.WheelEvent) => {
    e.currentTarget.scrollBy(e.deltaY, 0);
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
      const delta = mousePosRef.current - e.clientX;
      mousePosRef.current = e.clientX;
      e.currentTarget.scrollBy(delta, 0);
    }
  };

  return (
    <CardsSliderContainer>
      <CardsSliderList
        ref={listRef}
        onWheel={listScrollHandler}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        onMouseMove={mouseMoveHandler}
      >
        {filtered.length > 0
          ? filtered.map((item, index) => (
              <CardsSliderItem key={item.title + index}>
                <Card item={item} />
              </CardsSliderItem>
            ))
          : items.map((item, index) => (
              <CardsSliderItem key={item.title + index}>
                <Card item={item} />
              </CardsSliderItem>
            ))}
      </CardsSliderList>
    </CardsSliderContainer>
  );
};

export default connect(mapStateToProps)(CardsSlider);
