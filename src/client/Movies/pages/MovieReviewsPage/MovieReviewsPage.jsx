import React, { Component } from 'react'
import { fetchMovieReviews } from '../../service/movie-service/movie-service'
import MovieReviewsList from '../../components/MovieReviewsList'

class MovieReviewsPage extends Component {
    state = {
        reviews: [],
        loading: false,
        error: false,
    }

    componentDidMount() {
        this.setState({
            loading: true,
        })
    }

    componentDidUpdate() {
        const { loading } = this.state;
        if (loading) {
            const { movieId } = this.props.match.params;
            const response = fetchMovieReviews(movieId);

            response
                .then(({ results }) => {
                    this.setState({
                        reviews: results,
                        loading: false,
                    })
                })
                .catch((error) => {
                    this.setState({
                        error,
                        loading: false,
                    })
                })
        }
    }

    render() {
        const { reviews } = this.state;
        return (
            <>
                {reviews.length > 0 ? <MovieReviewsList reviews={reviews} /> : <h1>No reviews</h1>}
            </>
        );
    }
}

export default MovieReviewsPage;