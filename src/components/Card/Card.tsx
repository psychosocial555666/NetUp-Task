import React from 'react';
import { MINUTES } from '../../common/const';
import { PlayIcon } from '../../common/Icons/Icons';
import {
  CardButton,
  CardButtonText,
  CardGenres,
  CardImage,
  CardItem,
  CardParametres,
  CardStats,
  CardTitle,
  NewStat,
  RatingStat,
} from './Card.styles';
import { StateType } from './Card.types';

const Card: React.FC<StateType> = ({ item }) => {
  const [hovered, setHovered] = React.useState(false);

  const mouseEnterHandler = () => {
    setHovered(true);
  };
  const mouseLeaveHandler = () => {
    setHovered(false);
  };

  return (
    <CardItem onMouseOver={mouseEnterHandler} onMouseOut={mouseLeaveHandler}>
      <CardStats hovered={hovered}>
        {item.is_new && <NewStat>New on NetUP TV</NewStat>}
        <RatingStat>{`IMDB ${item.imdb_rate}/10`}</RatingStat>
      </CardStats>
      <CardImage
        poster={item.poster}
        keyframe={item.keyframe}
        hovered={hovered}
        onMouseOver={mouseEnterHandler}
        onMouseOut={mouseLeaveHandler}
      >
        <CardButton hovered={hovered}>
          <CardButtonText>More details</CardButtonText>
          <PlayIcon />
        </CardButton>
      </CardImage>
      <CardTitle>{item.title}</CardTitle>
      <CardParametres>{`${item.country} | ${item.year} | ${item.length / MINUTES} min | ${item.num_seasons} seasons | ${
        item.min_age
      }+`}</CardParametres>
      <CardGenres>{item.genres.join(', ')}</CardGenres>
    </CardItem>
  );
};

export default Card;
