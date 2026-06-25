export type StandStatus = 'disponible' | 'reserve' | 'verrouille' | 'paye';

export type SponsorPackage = {
  id: string;
  name: string;
  visibility: string;
  benefits: string[];
  featured?: boolean;
};

export type Sponsor = {
  id: string;
  name: string;
  packageName: string;
  sector: string;
  featured?: boolean;
};

export type Exhibitor = {
  id: string;
  name: string;
  sector: string;
  standNumber: string;
  description: string;
  products: string[];
  website: string;
  featured?: boolean;
};

export type Stand = {
  id: string;
  number: string;
  sector: string;
  status: StandStatus;
  price: number;
  size: string;
  x: number;
  y: number;
};

export type Visitor = {
  id: string;
  firstName: string;
  lastName: string;
  type: string;
  city: string;
  interests: string[];
};

export type ProgramItem = {
  time: string;
  title: string;
  description: string;
};

export type ProgramDay = {
  day: string;
  date: string;
  items: ProgramItem[];
};

export type DashboardStats = {
  totalVisitors: number;
  totalExhibitors: number;
  totalSponsors: number;
  availableStands: number;
  reservedStands: number;
  lockedStands: number;
  successfulPayments: number;
  failedPayments: number;
  revenue: number;
  latestRegistrations: Array<{ id: string; name: string; type: string; date: string }>;
};

export type ApiResponse<T> = {
  data: T;
  message?: string;
};
