export type IntervalType = number | undefined;

export interface IImage {
  src: string;
  active: boolean;
}

export type ItemType = {
  type: string,
  title: string,
  imdb_rate: number,
  is_new: boolean,
  country: string,
  year: number,
  length: number,
  num_seasons: number,
  min_age: number,
  genres: string[],
  poster: string,
  keyframe: string,
};

export type StateType = {
  items: ItemType[];
  filtered: ItemType[];
};

export interface IProps {
  items: ItemType[];
  filtered: ItemType[];
}
