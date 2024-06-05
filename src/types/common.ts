export type TChildren = {
  children: React.ReactNode;
};

export interface IMeta {
  total: number;
  page: number;
  pages: number;
  limit: number;
}

export interface QueryParams {
  limit?: number;
  page?: number;
  searchTerm?: string;
  sortBy?: string;
}
