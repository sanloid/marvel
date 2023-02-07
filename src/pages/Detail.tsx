import React, { useEffect } from 'react';
import Store from 'stores/Store';
import { observer } from 'mobx-react-lite';
import { CharOneResp, SeriesOneResp } from 'pages/PageBase';
import { useLocation, useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import MoreDetail from 'components/MoreDetail';
import ErrorFallback from 'components/ErrorFallback';
import LoadingSpinner from '../components/LoadingSpinner';

export interface DetailPropType {
  store: Store;
}

const Detail: React.FC<DetailPropType> = observer(({ store }) => {
  const { id } = useParams();
  const location = useLocation().pathname.split('/')[1];
  useEffect(() => {
    if (id) store.getOne(id);
    window.scrollTo(0, 0);
  }, [location]);

  if (store.loadingOne) {
    return <LoadingSpinner />;
  }

  if (store.oneResponse) {
    if (store.oneResponse.code !== 200) {
      return (
        <ErrorFallback
          code={store.oneResponse.code}
          message={store.oneResponse.status}
        />
      );
    }

    const data = store.oneResponse?.data.results[0];
    return (
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="rounded-lg h-full overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-top h-full w-full"
                  src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                />
              </div>
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <img
                    alt="content"
                    className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
                    src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                  />
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                      {(data as SeriesOneResp).title
                        ? (data as SeriesOneResp).title
                        : (data as CharOneResp).name}
                    </h2>
                    <div className="w-12 h-1 bg-red-acid dark:bg-gray-600 rounded mt-2 mb-4" />
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-lg mb-4">
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {Array.from(store.content).map(([key, value]) => {
          return value.data.total ? (
            <MoreDetail
              title={key}
              path={`/${key}/`}
              content={value}
              key={key}
            />
          ) : null;
        })}
      </>
    );
    console.log(data);
  }
  return null;
});

export default Detail;
