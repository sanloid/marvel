import Store from 'stores/Store';
import stores from './stores/index';

const RouteInfo = [
  {
    name: 'Characters',
    path: 'characters',
    store: stores.CharStore
  },
  {
    name: 'Comics',
    path: 'comics',
    store: stores.ComicsStore
  },
  {
    name: 'Series',
    path: 'series',
    store: stores.SeriesStore
  }
];

export default RouteInfo;
