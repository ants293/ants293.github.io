import React from 'react';
import './App.css';

import { useQuery, gql } from '@apollo/client';
const NEWS_LIST = gql`
    query getNewsList {
        newsList(skip: 5, limit: 15){totalRows, rows {id, title}}
    }
`

export default function App() {
    const { loading, error, data } = useQuery(NEWS_LIST);

  return (
    <div className="App">
      Stuff
    </div>
  );
}
