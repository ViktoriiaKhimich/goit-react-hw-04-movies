import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import MoviesListItem from '../MovieListItem'

import styles from './MoviesList.module.css'

const MoviesList = ({ movies = [], location }) => {
    const movieElements = movies.map(({ id, ...props }) => {
        return (
            <Link key={id} className={styles.link} to={{
                pathname: `/movie/${id}`,
                state: {
                    from: location,
                }
            }}>
                <MoviesListItem {...props} />
            </Link>
        )
    })


    return (
        <ul className={styles.moviesList}>
            {movieElements}
        </ul>
    );
}

MoviesList.defaultProps = {
    movies: [],
}

MoviesList.propTypes = {
    movies: PropTypes.array,
}


export default withRouter(MoviesList);