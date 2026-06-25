import { visitors } from '../mocks/visitors';
import type { ApiResponse, Visitor } from '../types';
import { api } from './api';

export const visitorService = {
  list: async (): Promise<ApiResponse<Visitor[]>> => ({ data: visitors }),
  register: async (payload: unknown) => api.post('/visitors', payload),
};
