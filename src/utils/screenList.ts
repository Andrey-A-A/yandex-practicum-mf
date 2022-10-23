import LoginPage from '../pages/login/login';
import ProfilePage from '../pages/profile/profile';
import RegistrationPage from '../pages/registration/registration';
import ChatsPage from '../pages/chats/chats';
import ChangingProfilePage from '../pages/changingProfile/changingProfile';
import ChangingPasswordPage from '../pages/changingPassword/changingPassword';
import { BlockClass } from '../core/Block';

export enum Screens {
  Login = 'login',
  Profile = 'settings',
  Registation = 'sign-up',
  Chats = 'messenger',
  ChangingProfile = 'changing-settings',
  ChangingPassword = 'changing-password',
}

const map: Record<Screens, BlockClass<any>> = {
  [Screens.Login]: LoginPage,
  [Screens.Profile]: ProfilePage,
  [Screens.Registation]: RegistrationPage,
  [Screens.Chats]: ChatsPage,
  [Screens.ChangingProfile]: ChangingProfilePage,
  [Screens.ChangingPassword]: ChangingPasswordPage,
};

export const getScreenComponent = (screen: Screens): BlockClass<any> => {
  return map[screen];
};
