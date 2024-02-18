import store from '../store';
import {useSelector} from 'react-redux';
import {signIn, logOut} from '../store/auth.js';
export const useAuthData = () => useSelector(state => state.auth.auth);
export const signInUser = userData => store.dispatch(signIn(userData));

export const logOutUser = () => store.dispatch(logOut());
