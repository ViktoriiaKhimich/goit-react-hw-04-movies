import React from 'react'
import PropTypes from 'prop-types'

import styles from './MovieDetails.module.css'

const MovieDetails = ({ movie }) => {
    const { backdrop_path, original_title, overview, vote_average } = movie;

    return (
        <>
            <h2>{original_title}</h2>
            <img className={styles.movieCardImg} src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={original_title} />
            <p className={styles.overview}>{overview}</p>
            <p>Vote: {vote_average}</p>
        </>
    );
}

MovieDetails.defaultProps = {
    backdrop_path: '',
    original_title: '',
    overview: '',
    vote_average: '',
}

MovieDetails.propTypes = {
    backdrop_path: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.string,
}

export default MovieDetails;

// backdrop_path, genres, original_title, overview, vote_average