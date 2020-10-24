import React from 'react';
import { useQuery, gql } from '@apollo/client';
import {Link} from "react-router-dom";
const NEWS_LIST = gql`
    query getNewsList($skip: Int!, $limit: Int!) {
        newsList(skip: $skip, limit: $limit){totalRows, rows {id, title}}
    }
`

export default function ArticlesView() {
    const { loading, error, data } = useQuery(NEWS_LIST, {
        variables: {
            skip: 1,
            limit: 5
        }
    });

    console.log(error, data);

    return (
        <div>is a list<Link to={'/article'}>To article</Link></div>
    )
}
