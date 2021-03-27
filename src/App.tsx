import React from 'react';
import './assets/styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
// import AuthProvider from './contexts/auth';

function App(): any {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <AuthProvider> */}
        <Routes />
        {/* </AuthProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
