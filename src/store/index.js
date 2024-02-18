import {configureStore} from '@reduxjs/toolkit';
import auth from './auth.js';

const store = configureStore({
  reducer: {
    auth,
  },
});

export default store;
