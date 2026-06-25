import { sponsorPackages } from '../mocks/packages';
import { sponsors } from '../mocks/sponsors';
import type { ApiResponse, Sponsor, SponsorPackage } from '../types';
import { api } from './api';

export const sponsorService = {
  list: async (): Promise<ApiResponse<Sponsor[]>> => ({ data: sponsors }),
  packages: async (): Promise<ApiResponse<SponsorPackage[]>> => ({ data: sponsorPackages }),
  apply: async (payload: unknown) => api.post('/sponsors/applications', payload),
};
