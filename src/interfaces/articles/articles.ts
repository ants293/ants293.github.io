import { IArticle } from "./article";

export interface INewsList {
  newsList: {
    rows: IArticle[];
    totalRows: number;
  };
}

export interface INewsRequestVariables {
  limit: number;
  skip: number;
}

export interface IRequestMoreResults {
  fetchMoreResult: INewsList;
  variables: INewsRequestVariables;
}
