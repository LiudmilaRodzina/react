import { createSlice, PayloadAction } from '@reduxjs/toolkit/react';

interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  passwordConfirm: string;
  gender: string;
  terms: boolean;
  profilePicture: string;
  newlyAdded?: boolean;
}

interface FormState {
  forms: FormData[];
}

const initialState: FormState = {
  forms: [],
};

const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addForm: (state, action: PayloadAction<FormData>) => {
      state.forms = state.forms.map((form) => ({ ...form, newlyAdded: false }));
      state.forms.push({ ...action.payload, newlyAdded: true });
    },
    clearNewlyAdded: (state) => {
      state.forms = state.forms.map((form) => ({ ...form, newlyAdded: false }));
    },
  },
});

export const { addForm, clearNewlyAdded } = formSlice.actions;

export default formSlice.reducer;
