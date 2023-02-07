import { Favourite } from 'types/Favourite';
import { FavContent } from 'types/api/Favourite/FavContent';

export const FavContentAdapter = (favs: Favourite[]): FavContent => {
  const newFavs = {
    code: 0,
    status: '',
    copyright: '',
    attributionText: '',
    attributionHTML: '',
    data: {
      offset: 0,
      limit: 0,
      total: 0,
      count: 0,
      results: favs
    },
    etag: ''
  };
  return newFavs;
};
