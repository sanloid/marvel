import { observer } from 'mobx-react-lite';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { getStoreByName } from 'util/getStoreByName';

export interface CardPropType {
  id: string;
  name: string;
  description: string;
  location: string;
  img: {
    path: string;
    extension: string;
  };
}

const activeStyle =
  'cursor-pointer top-8 right-8 text-2xl absolute text-red-500';
const notActiveStyle =
  'cursor-pointer top-8 right-8 text-2xl absolute text-gray-600';

const Card: React.FC<CardPropType> = observer(
  ({ img, description, name, id, location }) => {
    const store = getStoreByName(location);
    return (
      <>
        <div className="relative p-4 md:w-1/3 sm:w-1/2 xsm:w-1/2 xxsm:w-full xxxsm:w-full font-marvel sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-top w-full h-full"
              src={`${img.path}.${img.extension}`}
            />
          </div>
          <FaHeart
            onClick={() =>
              store.heartClick({
                thumbnail: img,
                description,
                name,
                id,
                location
              })
            }
            className={store.isFavourite(id) ? activeStyle : notActiveStyle}
          />
          <h2 className="text-xl font-medium mt-5">{name}</h2>
          <p className="text-base leading-relaxed mt-2">{description}</p>
          <NavLink
            to={`../${location}/${id}`}
            className="cursor-pointer text-red-600 dark:text-gray-600 border-2 p-2 rounded-xl border-red-600 dark:border-gray-600 hover:bg-red-600 dark:hover:bg-gray-600 hover:text-white dark:hover:text-white inline-flex items-center mt-3"
          >
            See More
          </NavLink>
        </div>
      </>
    );
  }
);
export default Card;
