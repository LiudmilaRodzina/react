import { describe, it, expect } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import selectedItemsReducer, {
  addSelectedItem,
  removeSelectedItem,
  clearSelectedItems,
} from '../store/reducers/selectedItemsSlice';
import { SelectedItemsState, Product } from '../interfaces/interfaces';

describe('selectedItemsSlice', () => {
  const initialState: SelectedItemsState = {
    selectedItems: [],
  };

  const product: Product = {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    price: 100,
    rating: '4.5',
    brand: 'Brand 1',
    category: 'Category 1',
    images: ['image1-url', 'image2-url'],
    shippingInformation: '',
    warrantyInformation: '',
    dimensions: {
      depth: 0,
      height: 0,
      width: 0,
    },
  };

  it('should return the initial state', () => {
    const store = configureStore({ reducer: selectedItemsReducer });
    const state = store.getState();
    expect(state).toEqual(initialState);
  });

  it('should handle addSelectedItem', () => {
    const store = configureStore({ reducer: selectedItemsReducer });
    store.dispatch(addSelectedItem(product));
    const state = store.getState();
    expect(state.selectedItems).toEqual([product]);
  });

  it('should handle removeSelectedItem', () => {
    const store = configureStore({ reducer: selectedItemsReducer });
    store.dispatch(addSelectedItem(product));
    store.dispatch(removeSelectedItem(product.id));
    const state = store.getState();
    expect(state.selectedItems).toEqual([]);
  });

  it('should handle clearSelectedItems', () => {
    const store = configureStore({ reducer: selectedItemsReducer });
    store.dispatch(addSelectedItem(product));
    store.dispatch(clearSelectedItems());
    const state = store.getState();
    expect(state.selectedItems).toEqual([]);
  });
});
