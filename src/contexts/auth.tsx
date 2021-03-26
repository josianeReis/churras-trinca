/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable func-names */
/* eslint-disable camelcase */
import React, { createContext, useState, useEffect } from 'react';
import * as auth from '../services/auth';
import api from '../services/api';
import { UserData } from '../services/auth';

interface AuthContextData {
  signed: boolean;
  user: UserData;
  signIn(params: { password: string; email: string }): Promise<UserData>;

  register(params: {
    password: string;
    email: string;
    name: string;
    surname: string;
  }): Promise<UserData>;
  signOut(): void;
  emitMessage(text: string, type?: string, time?: number): void;
  setLocalUser(param: UserData): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [flash, setFlash] = useState<{
    text: string;
    type: string;
    time: number | undefined;
  }>({ text: '', type: 'success', time: undefined });

  function emitMessage(text: string, type = 'success', time?: number) {
    setFlash({ text, type, time });
  }

  function signOut() {
    localStorage.removeItem('@trinca:user');
    localStorage.removeItem('@trinca:token');
    localStorage.removeItem('@trinca:refresh_token');

    setUser(null);
  }

  function setLocalUser(userData: UserData) {
    setUser(userData);
    localStorage.setItem('@trinca:user', JSON.stringify(userData));
  }

  function setLocalToken(tokenData: string, refreshTokenData: string) {
    // setToken(tokenData)
    api.defaults.headers.Authorization = `Bearer ${tokenData}`;
    localStorage.setItem('@trinca:token', JSON.stringify(tokenData));
    localStorage.setItem(
      '@trinca:refresh_token',
      JSON.stringify(refreshTokenData)
    );
  }

  async function signIn(params: {
    email: string;
    password: string;
    refresh_token?: string;
  }) {
    await auth
      .authenticate(params)
      .then((response) => {
        const { token, refresh_token, user: userData } = response.data;
        setLocalToken(token, refresh_token);
        setLocalUser(userData);
        api.defaults.headers.Authorization = `Bearer ${token}`;
      })
      .catch(() => {
        signOut();
      });
  }

  api.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      if (error.response.status === 401) {
        return signIn({
          email: '',
          password: '',
          refresh_token: JSON.parse(
            localStorage.getItem('@trinca:refresh_token') as string
          ),
        });
      }
      if (error.response.status === 403) {
        return emitMessage(
          'Você não tem permissão para acessar os dados desta página.',
          'error'
        );
      }
      if (error.response.status === 404) {
        return emitMessage('Esta página não foi encontrada.', 'error');
      }
      return Promise.reject(error);
    }
  );

  async function register(params: {
    email: string;
    password: string;
    name: string;
    surname: string;
  }) {
    await auth.register(params);

    // setLocalToken(response.token, response.refresh_token)
    // setLocalUser(response.user)
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('@trinca:user') as string));
    setLocalToken(
      JSON.parse(localStorage.getItem('@trinca:token') as string),
      JSON.parse(localStorage.getItem('@trinca:refresh_token') as string)
    );

    let refresh_token = localStorage.getItem('@trinca:refresh_token') as string;

    if (
      typeof refresh_token === 'undefined' ||
      refresh_token === 'null' ||
      refresh_token === ''
    ) {
      signOut();
    } else {
      refresh_token = JSON.parse(refresh_token);
      signIn({ email: '', password: '', refresh_token }).then();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        // @ts-expect-error: alguma justificativa
        user,
        // @ts-expect-error: alguma justificativa
        signIn,
        signOut,
        // @ts-expect-error: alguma justificativa
        register,
        setLocalUser,
        emitMessage,
      }}
    >
      <span>{flash.text}</span>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
