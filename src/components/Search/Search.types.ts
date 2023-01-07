export interface ISearchStyle {
  focused: boolean;
}

export type StateType = {
  searchInput: string;
  focused: boolean;
  loading: boolean;
};

export type IProps = {
  searchInput: string;
  focused: boolean;
  loading: boolean;
};
