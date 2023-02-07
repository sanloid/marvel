import Store from './Store';

export default {
  CharStore: new Store('characters', ['comics', 'series']),
  ComicsStore: new Store('comics', ['characters']),
  SeriesStore: new Store('series', ['characters', 'comics'])
};
