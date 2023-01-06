import { createSlice, configureStore } from '@reduxjs/toolkit';
import { randomInteger } from '../common/utils';
import { ItemType } from '../components/CardsSlider/CardsSlider.types';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    backgrounds: [],
    items: [],
    focused: false,
    searchInput: '',
    filtered: [],
    loading: false,
  },
  reducers: {
    setBackgrounds: (state, action) => {
      state.backgrounds = action.payload;
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setFocused: (state, action) => {
      state.focused = action.payload;
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setFiltered: (state, action) => {
      state.filtered = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

const { setBackgrounds, setItems, setFiltered, setFocused, setSearchInput, setLoading } = dataSlice.actions;

export const store = configureStore({
  reducer: dataSlice.reducer,
});

export const dataSetter = {
  getData() {
    fetch('./api/discover')
      .then(data => data.json())
      .then(data => {
        store.dispatch(setBackgrounds(data.backgrounds));
        store.dispatch(setItems(data.items));
      });
  },
  setFocused(status: boolean) {
    store.dispatch(setFocused(status));
  },
  setSearchInput(string: string) {
    store.dispatch(setSearchInput(string));
  },
  setLoading(status: boolean) {
    store.dispatch(setLoading(status));
  },
  setFiltered(string: string ) {
    if(string.length === 0) {
      store.dispatch(setFiltered([]));
      return;
    }
    store.dispatch(setLoading(true));
    const items = [...store.getState().items];
    const filteredItems = items.filter((item: ItemType) => (item.title.toLowerCase().indexOf(string.toLowerCase()) >= 0));
    setTimeout(() => {
      store.dispatch(setFiltered(filteredItems));
      store.dispatch(setLoading(false));
    }, randomInteger(0, 1000))
  },
};
