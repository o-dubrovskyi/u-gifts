import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models';
import { RootState } from '../index';

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    init: (state: UserState, action: PayloadAction<User>) => {
      state.user = action.payload;
    }
  }
})

export const { init } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;