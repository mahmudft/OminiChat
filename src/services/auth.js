import {post} from './request.js';

export const login = data => post('user/login', data);

export const register = data => post('user/signup', data);

export const logOut = () => post('user/logOut');
