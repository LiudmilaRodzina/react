import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../interfaces/interfaces';

interface SelectedItemsState {
  selectedItems: Product[];
}

const initialState: SelectedItemsState = {
  selectedItems: JSON.parse(localStorage.getItem('selectedItems') || '[]'),
};

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    addSelectedItem: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      if (!state.selectedItems.some((item) => item.id === product.id)) {
        state.selectedItems.push(product);
        localStorage.setItem(
          'selectedItems',
          JSON.stringify(state.selectedItems)
        );
      }
    },
    removeSelectedItem: (state, action: PayloadAction<number>) => {
      state.selectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem(
        'selectedItems',
        JSON.stringify(state.selectedItems)
      );
    },
    clearSelectedItems: (state) => {
      state.selectedItems = [];
      localStorage.removeItem('selectedItems');
    },
  },
});

export const { addSelectedItem, removeSelectedItem, clearSelectedItems } =
  selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;
