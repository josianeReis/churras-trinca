import React, { useContext, useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import WrapperContent from '../../components/WrapperContent';
import LogoContainer from '../../components/LogoContainer';
import './Login.scss';
import { AuthContext } from '../../contexts/auth';

export const Login: React.FC = () => {
  const { signIn } = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function isAble() {
    return email !== '' && password !== '';
  }

  async function handleSignIn(e: FormEvent) {
    e.preventDefault();
    if (isAble()) {
      await signIn(email, password);
      history.push('/');
    }
  }

  return (
    <div id="page-login">
      <WrapperContent className="page-content-left">
        <LogoContainer />
        <div className="login-container">
          <form className="form-80" onSubmit={(e) => handleSignIn(e)}>
            <fieldset>
              <legend>
                <p>LOGIN</p>
              </legend>
              <Input
                name="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                name="password"
                placeholder="Senha"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className="login-tools">
                <Link to="/forgot-password">Esqueci minha senha</Link>
              </div>
              <button
                className={`login-submit ${isAble() && 'login-submit-active'}`}
                disabled={false}
                type="submit"
              >
                Entrar
              </button>
            </fieldset>
            <div className="login-footer">
              <div className="signup">
                <p>Não tem conta?</p>
                <Link to="/signup">Cadastre-se</Link>
              </div>
              <span>Powered by Trinca ;)</span>
            </div>
          </form>
        </div>
      </WrapperContent>
    </div>
  );
};

export default Login;
