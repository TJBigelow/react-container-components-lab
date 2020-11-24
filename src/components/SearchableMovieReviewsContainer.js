import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import React, { Component } from 'react'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
