import React, { createContext, useState, useEffect } from 'react';

import { fakeAuth as auth } from '../services/auth';
import api from '../services/api';
import FlashMessage from '../components/FlashMessage';

interface User {
  name: string;
  email: string;
}
interface AuthContextData {
  loading: boolean;
  signed: boolean;
  user: User | null;
  signIn(email: string, password: string): Promise<void>;
  emitMessage(text: string, type?: string, time?: number): void;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [flash, setFlash] = useState<{
    text: string;
    type: string;
    time: number | undefined;
  }>({ text: '', type: 'success', time: undefined });

  function emitMessage(text: string, type = 'success', time?: number) {
    setFlash({ text, type, time });
  }

  useEffect(() => {
    const storagedUser = localStorage.getItem('@trinca:user');
    const storagedToken = localStorage.getItem('@trinca:token');

    if (storagedUser && storagedToken) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.authorization = `Bearer ${storagedToken}`;
    }

    setLoading(false);
  }, []);

  async function signIn(email: string, password: string) {
    const { data } = await auth();
    console.log(`email: ${email}; password: ${password}`);

    setUser(data.user);
    api.defaults.headers.authorization = `Bearer ${data.token}`;

    localStorage.setItem('@trinca:user', JSON.stringify(data.user));
    localStorage.setItem('@trinca:token', data.token);
  }

  function signOut() {
    setUser(null);
    api.defaults.headers.authorization = null;
    localStorage.clear();
  }

  return (
    <AuthContext.Provider
      value={{ loading, signed: !!user, user, signIn, signOut, emitMessage }}
    >
      <FlashMessage text={flash.text} type={flash.type} time={flash.time} />
      {children}
    </AuthContext.Provider>
  );
};
