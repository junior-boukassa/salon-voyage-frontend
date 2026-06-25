import { stands } from '../mocks/stands';
import type { ApiResponse, Stand } from '../types';
import { api } from './api';

export const standService = {
  list: async (): Promise<ApiResponse<Stand[]>> => ({ data: stands }),
  reserve: async (payload: unknown) => api.post('/stands/reservations', payload),
  lock: async (standId: string) => api.post(`/stands/${standId}/lock`),
};
