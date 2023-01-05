import React from 'react';
import { connect } from 'react-redux';
import { Container, Image } from './BackgroundCarousel.styles';
import { IProps, IntervalType, StateType } from './BackgroundCarousel.types';

const mapStateToProps = (state: StateType) => ({
  images: state.backgrounds,
});

const BackgroundCarousel: React.FC<IProps> = ({ images }) => {
  let scrollInterval: IntervalType;
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    scrollInterval = setTimeout(() => {
      setCurrent((current + 1) % images.length);
    }, 5000);

    return () => clearTimeout(scrollInterval);
  });

  return (
    <Container>
      {images.map((item, index) => (
        <Image src={`../api/${item.url}`} active={index === current} />
      ))}
    </Container>
  );
};

export default connect(mapStateToProps)(BackgroundCarousel);
