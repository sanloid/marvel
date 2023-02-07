import { CharComicsResponse } from './Characters/CharComicsResponse';
import { CharSeriesResponse } from './Characters/CharSeriesResponse';
import { ComicsCharacterResponse } from './Comics/ComicsCharacterResponse';
import { FavContent } from './Favourite/FavContent';
import { SeriesCharacterResponse } from './Series/SeriesCharacterResponse';
import { SeriesComicsResponse } from './Series/SeriesComicsResponse';

export type CharContentType = CharComicsResponse | CharSeriesResponse;
export type ComicsContentType = ComicsCharacterResponse;
export type SeriesContentType = SeriesCharacterResponse | SeriesComicsResponse;

export type ContentType =
  | CharContentType
  | SeriesContentType
  | ComicsContentType
  | FavContent;
