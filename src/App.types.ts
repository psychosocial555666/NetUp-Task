import { ItemType } from './components/CardsSlider/CardsSlider.types';

export type StateType = {
  searchInput: string;
  focused: boolean;
  filtered: ItemType[];
};

export type IProps = {
  searchInput: string;
  focused: boolean;
  filtered: ItemType[];
};
