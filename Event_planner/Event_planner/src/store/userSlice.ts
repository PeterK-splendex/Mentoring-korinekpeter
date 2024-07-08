import { createSlice} from '@reduxjs/toolkit';

interface UserState {
  name: string;
  email: string;
  role: string;
  password: string;
}

const initialState: UserState = {
  name: '',
  email: '',
  role: 'none',
  password: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const { name, email, role } = action.payload;
      state.name = name;
      state.email = email;
      state.role = role;
    },
    register: (state, action) => {
      const { name, email, role } = action.payload;
      state.name = name;
      state.email = email;
      state.role = role;
    },
    logout: (state) => {
      state.name = '';
      state.email = '';
      state.role = 'none';
      state.password = '';
    },
  },
});

export const { login, register, logout } = userSlice.actions;
export default userSlice.reducer;
