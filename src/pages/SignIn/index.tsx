/* eslint-disable react/button-has-type */
import React from 'react';
import { useAuth } from '../../contexts/auth';

import './SignIn.css';

const SignIn: React.FC = () => {
  const { signed, Login } = useAuth();

  console.log(signed);

  async function handleLogin() {
    await Login({
      email: 'josiane@email.com.br',
      password: '123muitofacil456',
    });
  }
  return (
    <div
      id="retirar"
      style={{ height: '100vh', width: '100wh', background: '#F0F0F7' }}
    >
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default SignIn;
