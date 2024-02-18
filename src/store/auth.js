import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AsyncStorage} from 'react-native';

const loadAuthStateFromLocalStorage = async () => {
  try {
    const serializedState = await AsyncStorage.getItem('auth-info');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const initialState = {
  auth: {
    id: '',
    name: '',
    email: '',
    userSignedIn: false,
  },
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action) {
      state.auth.id = action.payload.id;
      state.auth.email = action.payload.email;
      state.auth.name = action.payload.name;
      state.auth.userSignedIn = true;
    },
    logOut(state, action) {
      state.auth.id = null;
      state.auth.email = null;
      state.auth.name = null;
      state.auth.userSignedIn = false;
    },
  },
});

export const {signIn, logOut} = auth.actions;
export default auth.reducer;
