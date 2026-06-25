import { api } from './api';

export const authService = {
  login: async (email: string, password: string) => {
    if (email && password) {
      window.localStorage.setItem('sdv_auth_token', 'mock-admin-token');
      return { data: { token: 'mock-admin-token', user: { name: 'Admin Salon', email } } };
    }
    return api.post('/login', { email, password });
  },
  logout: () => {
    window.localStorage.removeItem('sdv_auth_token');
  },
};
