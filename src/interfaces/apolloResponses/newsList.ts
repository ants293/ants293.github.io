import { IArticle } from "../articles/article";

export interface INewsList {
  newsList: {
    totalRows: number;
    rows: [IArticle];
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
