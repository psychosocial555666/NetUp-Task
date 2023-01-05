export type IntervalType = number | undefined;

export interface IImage {
  src: string;
  active: boolean;
}

export type BackgroundType = {
  url: string;
};

export type StateType = {
  backgrounds: BackgroundType[];
};

export interface IProps {
  images: BackgroundType[];
}
