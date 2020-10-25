import React, {useState} from 'react';
import { useQuery, gql } from '@apollo/client';
import {Link} from "react-router-dom";
import {GET_ARTICLES_LIST} from "../../../apollo/articles/articles.requests";


export default function ArticlesView() {
    const [articlesPagination, setArticlesPagination] = useState({
        skip: 0,
        limit: 5
    });

    const { loading, error, data } = useQuery(GET_ARTICLES_LIST, {
        variables: {
            skip: articlesPagination.skip,
            limit: articlesPagination.limit
        }
    });

    console.log(error, data);

    return (
        <div>is a list
            <Link to={'/article'}>To article</Link>
            <button onClick={() => {setArticlesPagination({
                ...articlesPagination,
                skip: articlesPagination.skip + 5
            })}}>update pls</button>
        </div>
    )
}
