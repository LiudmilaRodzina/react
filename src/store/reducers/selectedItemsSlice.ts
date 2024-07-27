import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, SelectedItemsState } from '../../interfaces/interfaces';

const initialState: SelectedItemsState = {
  selectedItems: [],
};

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    addSelectedItem: (state, action: PayloadAction<Product>) => {
      state.selectedItems.push(action.payload);
    },
    removeSelectedItem: (state, action: PayloadAction<number>) => {
      state.selectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearSelectedItems: (state) => {
      state.selectedItems = [];
    },
  },
});

export const { addSelectedItem, removeSelectedItem, clearSelectedItems } =
  selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;
