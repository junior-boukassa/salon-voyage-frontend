import { api } from './api';

const TOKEN_KEY = 'sdv_auth_token';

export const authService = {
  login: async (email: string, password: string) => {
    if (email && password) {
      window.localStorage.setItem(TOKEN_KEY, 'mock-admin-token');
      return { data: { token: 'mock-admin-token', user: { name: 'Admin Salon', email } } };
    }
    return api.post('/login', { email, password });
  },
  logout: () => {
    window.localStorage.removeItem(TOKEN_KEY);
  },
  isAuthenticated: () => Boolean(window.localStorage.getItem(TOKEN_KEY)),
};
