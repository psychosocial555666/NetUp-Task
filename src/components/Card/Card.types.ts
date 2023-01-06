import { ItemType } from "../CardsSlider/CardsSlider.types";

export type StateType = {
  item: ItemType;
};

export interface IImageStyle {
  poster: string;
  keyframe: string;
  hovered: boolean;
}

export interface IImageStatsStyle {
  hovered: boolean;
}