import React, { Component } from 'react';
import { fetchMovieCast } from '../../service/movie-service/movie-service'
import MovieCastList from '../../components/MovieCastList'


class MovieCastPage extends Component {
    state = {
        cast: [],
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
            const response = fetchMovieCast(movieId);

            response
                .then(({ cast }) => {
                    this.setState({
                        cast: cast,
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
        const { cast } = this.state;

        return (<>
            <MovieCastList cast={cast} />
        </>);
    }
}

export default MovieCastPage;