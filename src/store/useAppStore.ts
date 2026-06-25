import { create } from 'zustand';
import type { Stand } from '../types';

type AppState = {
  selectedStand?: Stand;
  lockedStandId?: string;
  lockUntil?: number;
  visitorBadge?: {
    firstName: string;
    lastName: string;
    type: string;
    city: string;
  };
  selectStand: (stand: Stand) => void;
  clearStand: () => void;
  setVisitorBadge: (visitor: AppState['visitorBadge']) => void;
};

export const useAppStore = create<AppState>((set) => ({
  selectStand: (stand) =>
    set({
      selectedStand: stand,
      lockedStandId: stand.id,
      lockUntil: Date.now() + 3 * 60 * 1000,
    }),
  clearStand: () => set({ selectedStand: undefined, lockedStandId: undefined, lockUntil: undefined }),
  setVisitorBadge: (visitorBadge) => set({ visitorBadge }),
}));
