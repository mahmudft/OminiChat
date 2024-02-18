import {logOutUser} from './auth';
import {logOut} from '../services/auth';

export async function logOutScenario() {
  await logOut();
  logOutUser();
}
