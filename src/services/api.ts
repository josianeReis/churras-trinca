import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV !== 'production'
      ? `http://localhost:3333/v1/`
      : 'https://real-url',

  // something
});

export default api;
