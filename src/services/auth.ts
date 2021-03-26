/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-types */
import api from './api';

export interface UserData {
  id?: number;
  name?: string;
  email: string;
  password?: string;
}

interface ResponseUserData {
  data: {
    user: UserData;
    // TODO: Criar arquivo de model do usuario
    // classes?: ClassItemInterace[];
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

export function adorableImage(param: string): String {
  return `https://real-api-url${param}`;
}
