import { authAPI } from '../api/auth';
import { UserDTO } from '../api/types';
import type { Dispatch } from '../core/Store';
import { transformUser, apiHasError } from '../utils';

export async function initApp(dispatch: Dispatch<AppState>) {

  try {
    const resp: any = await authAPI.me();
    const response = resp.response;
    if (apiHasError(response)) {
      return;
    }
    dispatch({ user: transformUser(response as UserDTO) });
  } catch (err) {
    console.error(err);
  } finally {
    dispatch({ appIsInited: true });
  }
}
