import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import qs from "qs"

import MovieSearchForm from '../../components/MoviesSearchForm'
import MoviesSearchList from '../../components/MoviesSearchList'

class MovieSearchPage extends Component {
    state = {
        query: "",
        submit: false,
    }

    componentDidUpdate() {
        if (this.state.submit) {
            this.setState({
                submit: false
            })
        }
    }

    changeQuery = (query) => {
        this.setState({
            query,
            submit: true,
        })
    }

    render() {
        const { query, submit } = this.state;

        if (submit) {
            const redirectOptions = {
                pathname: '/movie/search',
                search: `?query=${query}`
            }
            return <Redirect to={redirectOptions} />
        }
        const { query: searchQuery } = qs.parse(this.props.location.search.slice(1))

        return (
            <>
                <MovieSearchForm onSubmit={this.changeQuery} />
                {searchQuery && <MoviesSearchList query={searchQuery} />}
            </>
        );
    }

}

export default MovieSearchPage;

