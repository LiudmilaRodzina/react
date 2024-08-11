import selectedItemsReducer from './reducers/selectedItemsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = () =>
  configureStore({
    reducer: {
      selectedItems: selectedItemsReducer,
    },
  });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
