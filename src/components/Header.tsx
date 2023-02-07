import React, { useState } from 'react';
import RouteInfo from 'RouteInfo';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [mode, setMode] = useState(false);
  const changeColorMode = () => {
    if (mode) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
    setMode(!mode);
  };
  return (
    <header className="text-gray-600 font-marvel bg-red-acid dark:bg-gray-500">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="flex items-center h-10">
          <img src="/marvel_logo.svg" className="w-full h-full" alt="" />
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {RouteInfo.map((e) => (
            <NavLink
              key={e.path}
              to={`${e.path}/page/1`}
              className="cursor-pointer text-white text-xl hover:rounded-xl hover:bg-white p-5 mr-5 hover:text-black"
            >
              {e.name}
            </NavLink>
          ))}
          <NavLink
            key="favourites"
            to="favourites"
            className="cursor-pointer text-white text-xl hover:rounded-xl hover:bg-white p-5 mr-5 hover:text-black"
          >
            Favourites
          </NavLink>
        </nav>
        <label
          htmlFor="red-toggle"
          className="inline-flex relative items-center mr-5 cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="red-toggle"
            className="sr-only peer"
            checked={mode}
            onChange={changeColorMode}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600" />
        </label>
      </div>
    </header>
  );
};

export default Header;
