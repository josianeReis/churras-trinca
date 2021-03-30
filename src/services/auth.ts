/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-types */
import api from './api';

export interface Response {
  data: {
    token: string;
    refresh_token: string;
    user: any;
  };
}

export function fakeAuth(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          token: 'eyJhbGcfQ.SflKxwRJSMeKKF6POk6yJV_adQssw5c',
          refresh_token: 'eyJhbGcfQ.SflKxwMeJf36POk6yJV_adQssw5c',
          user: {
            name: 'Josiane',
            email: 'azz.felix7@gmail.com',
          },
        },
      });
    }, 2000);
  });
}

export function auth(params: object): Promise<Response> {
  return api.post('auth', params);
}

export function register(params: object): Promise<Response> {
  return api.post('register', params);
}
