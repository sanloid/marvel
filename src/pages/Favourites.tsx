import React from 'react';
import stores from 'stores';
import MoreDetail from 'components/MoreDetail';
import { FavContentAdapter } from 'util/FavouriteContentAdapter';
import { observer } from 'mobx-react-lite';

const Favourites: React.FC = observer(() => {
  const favPath = [
    {
      title: 'characters',
      content: FavContentAdapter(stores.CharStore.favourites)
    },
    {
      title: 'series',
      content: FavContentAdapter(stores.SeriesStore.favourites)
    },
    {
      title: 'comics',
      content: FavContentAdapter(stores.ComicsStore.favourites)
    }
  ];
  return (
    <>
      {favPath.map((e) => (
        <MoreDetail title={e.title} path={e.title} content={e.content} />
      ))}
    </>
  );
});

export default Favourites;
