import { Component } from "react";
import { fetchTrendingMovies } from '../../service/movie-service/movie-service'
import MovieList from '../MoviesList'

class TrendingMovieList extends Component {

    state = {
        movies: [],
        loading: false,
        error: null
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
    }

    componentDidUpdate() {
        const { loading } = this.state;

        if (loading) {
            fetchTrendingMovies()
                .then(({ results }) => {
                    this.setState({
                        movies: [...results],
                        loading: false,
                    })
                })
                .catch(error => this.setState({ error, loading: false }))
        }
    }


    render() {
        const { movies, loading, error } = this.state;
        return (
            <>
                {loading && <p>Loading...</p>}
                {error && <p>Sorry, there must be some problem on the server</p>}

                <MovieList movies={movies} />
            </>
        );
    }
}

export default TrendingMovieList;