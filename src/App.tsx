import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 } from 'uuid';
import RouteInfo from 'RouteInfo';
import Favourites from 'pages/Favourites';
import PageBase from 'pages/PageBase';
import Detail from 'pages/Detail';
import Layout from './Layout';
import './index.css';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {RouteInfo.map((e) => (
          <>
            <Route
              key={`${e.path}pageRoute`}
              path={`${e.path}/page/:page`}
              element={<PageBase store={e.store} />}
            />
            <Route
              key={`${e.path}pageId`}
              path={`${e.path}/:id`}
              element={<Detail store={e.store} />}
            />
          </>
        ))}
        <Route path="favourites" element={<Favourites />} />
      </Route>
    </Routes>
  );
};

export default App;
