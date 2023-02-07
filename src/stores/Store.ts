import api from 'api';
import { observable, makeObservable, runInAction, action, toJS } from 'mobx';
import { ContentType } from 'types/api/ContentType';
import { ResponsesTypes } from 'types/api/ResponsesType';
import { Favourite } from 'types/Favourite';

class Store {
  response: ResponsesTypes;

  oneResponse: ResponsesTypes;

  pageLimit: number;

  onPage: number = 9;

  loadingList: boolean;

  loadingOne: boolean;

  content: Map<string, ContentType> = new Map<string, ContentType>();

  apiPath: string = '';

  contentList: string[] = [];

  favourites: Favourite[] = [];

  constructor(apiPath: string, contentList: string[]) {
    makeObservable(this, {
      response: observable,
      oneResponse: observable,
      pageLimit: observable,
      onPage: observable,
      loadingList: observable,
      loadingOne: observable,
      content: observable,
      favourites: observable,
      getList: action,
      getOne: action,
      searchByName: action,
      heartClick: action
    });
    this.apiPath = apiPath;
    this.contentList = contentList;
    this.favourites = JSON.parse(
      localStorage.getItem(`fav${this.apiPath}`) || '[]'
    );
  }

  heartClick = (card: Favourite): void => {
    if (this.isFavourite(card.id)) {
      this.favourites = this.favourites.filter(
        (e) => String(e.id) !== String(card.id)
      );
    } else {
      this.favourites.push(card);
    }
    localStorage.setItem(
      `fav${this.apiPath}`,
      JSON.stringify([...this.favourites])
    );
  };

  isFavourite = (id: string): boolean => {
    return (
      this.favourites.find((e) => String(e.id) === String(id)) !== undefined
    );
  };

  getList = async (page: string): Promise<void> => {
    try {
      this.loadingList = true;

      const response = await api.common.getList(
        Number(page),
        this.onPage,
        this.apiPath
      );

      runInAction(() => {
        this.response = response;
        this.pageLimit = Math.ceil(response.data.total / this.onPage);
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loadingList = false;
      });
    }
  };

  getOne = async (id: string): Promise<void> => {
    try {
      this.loadingOne = true;

      const response = await api.common.getOne(id, this.apiPath);

      runInAction(() => {
        this.oneResponse = response;
        this.contentList.forEach(async (e) => {
          this.content.set(e, await api.common.getContent(id, this.apiPath, e));
        });
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loadingOne = false;
      });
    }
  };

  searchByName = async (name: string, page: string): Promise<void> => {
    try {
      this.loadingList = true;

      const response = await api.common.searchByName(
        name,
        this.onPage,
        Number(page),
        this.apiPath,
        this.apiPath === 'characters' ? 'name' : 'title'
      );

      runInAction(() => {
        this.response = response;
        this.pageLimit = Math.ceil(response.data.total / this.onPage);
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loadingList = false;
      });
    }
  };
}

export default Store;
