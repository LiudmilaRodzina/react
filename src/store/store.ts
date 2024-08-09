import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import selectedItemsReducer from './reducers/selectedItemsSlice';

export const store = configureStore({
  reducer: {
    selectedItems: selectedItemsReducer,
  },
});

export const wrapper = createWrapper(() => store);
export type RootState = ReturnType<typeof store.getState>;
