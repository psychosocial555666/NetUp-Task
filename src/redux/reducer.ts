import { createSlice, configureStore } from '@reduxjs/toolkit'

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    backgrounds: [],
    items: [],
  },
  reducers: {
    setBackgrounds: (state, action) => {
      state.backgrounds = action.payload
    },
    setItems: (state, action) => {
      state.items = action.payload
    },
  }
})

const { setBackgrounds, setItems } = dataSlice.actions

export const store = configureStore({
  reducer: dataSlice.reducer
})

export const dataSetter = {
  getData() {
    fetch('./api/discover')
      .then(data => data.json())
      .then(data => {
        store.dispatch(setBackgrounds(data.backgrounds));
        store.dispatch(setItems(data.items));
      })
  }
}