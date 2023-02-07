import { observer } from 'mobx-react-lite';
import React from 'react';
import { CharSeriesResponse } from 'types/api/Characters/CharSeriesResponse';
import { ContentType } from 'types/api/ContentType';
import { SeriesCharacterResponse } from 'types/api/Series/SeriesCharacterResponse';
import Card from './Card';

export interface MoreDetailPropType {
  title: string;
  path: string;
  content: ContentType;
}

export type SeriesCharOneResp = SeriesCharacterResponse['data']['results']['0'];
export type CharSeriesOneResp = CharSeriesResponse['data']['results']['0'];

const MoreDetail: React.FC<MoreDetailPropType> = ({ title, path, content }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {title}
            </h1>
            <div className="h-1 w-20 bg-red-500 dark:bg-gray-600 rounded" />
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {content ? (
            content.data.results.map((e) => (
              <Card
                id={String(e.id)}
                name={
                  (e as SeriesCharOneResp).name
                    ? (e as SeriesCharOneResp).name
                    : (e as CharSeriesOneResp).title
                }
                description={e.description}
                location={title}
                img={e.thumbnail}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default MoreDetail;
