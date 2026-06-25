import { exhibitors } from '../mocks/exhibitors';
import type { ApiResponse, Exhibitor } from '../types';
import { api } from './api';

export const exhibitorService = {
  list: async (): Promise<ApiResponse<Exhibitor[]>> => ({ data: exhibitors }),
  get: async (id: string): Promise<ApiResponse<Exhibitor | undefined>> => ({ data: exhibitors.find((item) => item.id === id) }),
  create: async (payload: unknown) => api.post('/exhibitors', payload),
};
