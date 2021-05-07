import React, { Component } from 'react'

import MovieSearchForm from '../../components/MoviesSearchForm'
import MoviesSearchList from '../../components/MoviesSearchList'

class MovieSearchPage extends Component {
    state = {
        query: "",
    }

    changeQuery = (query) => {
        this.setState({
            query,
        })
    }

    render() {
        const { query } = this.state;

        return (
            <>
                <MovieSearchForm onSubmit={this.changeQuery} />
                {query && <MoviesSearchList query={query} />}
            </>
        );
    }

}

export default MovieSearchPage;

