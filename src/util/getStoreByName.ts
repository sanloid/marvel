import stores from 'stores';
import Store from 'stores/Store';

export const getStoreByName = (name: string): Store => {
  switch (name) {
    case 'characters':
      return stores.CharStore;
    case 'series':
      return stores.SeriesStore;
    case 'comics':
      return stores.ComicsStore;
    default:
      return stores.CharStore;
  }
};
