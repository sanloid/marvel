import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchForm: React.FC = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const loc = useLocation().pathname.split('/');
  loc[loc.indexOf('page') + 1] = '1';
  const path = '..'.concat(loc.join('/'));

  return (
    <form
      className="mt-10 px-5 font-marvel container mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        navigate({
          pathname: path,
          search: `?name=${name}`
        });
      }}
    >
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="search"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="default-search"
          className="block p-4 pl-10 w-full text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 dark:focus:ring-gray-500 focus:border-red-500 dark:focus:border-gray-500 focus:outline-none"
          placeholder="Search comics, series..."
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-red-acid dark:bg-gray-600 hover:bg-white dark:hover:bg-white hover:text-black border-2 hover:border-red-acid dark:hover:border-gray-600 focus:ring-4 focus:outline-none focus:ring-red-500 dark:focus:ring-gray-500 font-medium rounded-lg px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
