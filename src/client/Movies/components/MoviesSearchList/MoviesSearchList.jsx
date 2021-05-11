import React, { Component } from 'react'
import { initialState } from './initialState'
import { fetchMoviesByQuery } from '../../service/movie-service/movie-service'
import MoviesList from '../MoviesList'


class MoviesSearchList extends Component {
    state = {
        ...initialState
    }

    componentDidMount() {
        this.setState({
            loading: true,
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.query !== this.props.query) {
            this.setState({
                loading: true
            })
        }
        const { loading } = this.state;

        if (loading) {
            const response = fetchMoviesByQuery(this.props.query);

            response
                .then(({ data }) => {
                    this.setState({
                        movies: data,
                        loading: false,
                    })
                })
                .catch((error) => {
                    this.setState({
                        loading: false,
                        error
                    })
                })
        }
    }

    render() {

        const { loading, movies, error } = this.state;

        return (
            <>
                {loading && <p>Loading...</p>}
                {error && <p>Sorry, there must be some problem on a server</p>}
                {!loading && !error &&
                    <MoviesList movies={movies.results} />
                }
            </>
        );
    }
}

export default MoviesSearchList;