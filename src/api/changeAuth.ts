import  HTTP  from '../core/HTTP';
import { APIError, UserDTO } from './types';
import type { Options } from '../core/HTTP';


export type UserRequestData = {
  login: string;
  displayName: string;
  email: string;
  firstName: string;
  secondName: string;
  phone: string;
  password: string;
};

type PasswordRequestData = {
  password: string;
}

type AvatarRequestData = {
  avatar: FormData;
}

type UserResponseData = {url: string, options: Options} | APIError;

export const userAPI = {
  userUp: (data: UserRequestData) => HTTP.put('/user/profile', {data: data})
}

export const passwordAPI = {
  passwordUp: (data: PasswordRequestData) => HTTP.put('/user/password', {data: data})
}

export const avatarAPI = {
  avatarUp: (data: AvatarRequestData) => HTTP.put('/user/profile/avatar', {data: data})
}