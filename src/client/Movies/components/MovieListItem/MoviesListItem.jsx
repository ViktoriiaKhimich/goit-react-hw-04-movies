import React from 'react'
import PropTypes from 'prop-types'

import styles from './MoviesListItem.module.css'

const MoviesListItem = ({ backdrop_path, original_title, original_name }) => {
    const title = original_title ? original_title : original_name;

    return (
        <li className={styles.moviesItem}>
            <img className={styles.moviesItemImage} src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title} />
            <h3>{title}</h3>
        </li>
    );
}

MoviesListItem.defaultProps = {
    backdrop_path: '',
    original_title: '',
    original_name: '',
}

MoviesListItem.propTypes = {
    backdrop_path: PropTypes.string,
    original_title: PropTypes.string,
    original_name: PropTypes.string,
}

export default MoviesListItem;