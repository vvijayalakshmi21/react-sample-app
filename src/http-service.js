import axios from 'axios';

export const httpService = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
});

httpService.interceptors.request.use(
  (config) => {
    console.log('Request interceptor: Success', config.headers);
    config.headers['X-Custom-Header'] = 'X-Value';
    return config;
  },
  (err) => {    
    console.log('Request interceptor: Error', err);
    return Promise.reject(err);
  }
);

httpService.interceptors.response.use(
  (response) => {
    console.log('Response interceptor: Success', response);
    return response;
  },
  (err) => {
    console.log('Response interceptor: Error', err);
    return Promise.reject(err);
  }
);