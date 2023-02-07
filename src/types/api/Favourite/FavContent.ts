import { Favourite } from 'types/Favourite';

export interface FavContent {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Favourite[];
  };
  etag: string;
}
