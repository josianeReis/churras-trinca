/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-types */
import api from './api';
import { ClassItemInterace } from '../interfaces';

export interface UserData {
  id?: number;
  name?: string;
  surname?: string;
  avatar?: string;
  bio?: string;
  email: string;
  password?: string;
  whatsapp?: string;
}

interface ResponseUserData {
  data: {
    user: UserData;
    classes?: ClassItemInterace[];
  };
}

export interface Response {
  data: {
    token: string;
    refresh_token: string;
    user: UserData;
  };
}

export function authenticate(params: object): Promise<Response> {
  return api.post('authenticate', params);
}

export function register(params: object): Promise<Response> {
  return api.post('register', params);
}

export function getProfile(classes?: boolean): Promise<ResponseUserData> {
  return api.get('profile', {
    params: {
      classes: classes ? true : null,
    },
  });
}

export function updateProfile(params: UserData): Promise<ResponseUserData> {
  return api.put('profile', params);
}

export function adorableImage(param: string): any {
  return `https://realapi${param}@trinca.png`;
}
