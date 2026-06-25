import { api } from './api';

export const paymentService = {
  simulate: async (payload: unknown) =>
    Promise.resolve({
      data: {
        status: 'success',
        reference: `SDV-${Date.now()}`,
        payload,
      },
    }),
  createIntent: async (payload: unknown) => api.post('/payments/intents', payload),
};
