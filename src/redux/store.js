

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { loadState, saveState } from './localStorage';

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: preloadedState,
  },
});

store.subscribe(() => {
  saveState(store.getState().cart);
});

export default store;
