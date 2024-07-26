import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SelectedItemsState {
  selectedItems: number[];
}

const initialState: SelectedItemsState = {
  selectedItems: [],
};

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    addSelectedItem(state, action: PayloadAction<number>) {
      state.selectedItems.push(action.payload);
    },
    removeSelectedItem(state, action: PayloadAction<number>) {
      state.selectedItems = state.selectedItems.filter(
        (item) => item !== action.payload
      );
    },
    clearSelectedItems(state) {
      state.selectedItems = [];
    },
  },
});

export const { addSelectedItem, removeSelectedItem, clearSelectedItems } =
  selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;
