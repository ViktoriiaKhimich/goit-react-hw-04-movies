import React from 'react'
import PropTypes from 'prop-types'


import styles from './MovieCastListItem.module.css'

const MovieCastListItem = ({ profile_path, name, character }) => {
    return (
        <li className={styles.castListItem}>
            <img className={styles.castListImg} src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} />
            <h3 className={styles.name}>{name}</h3>
            <p>Character: {character}</p>
        </li>
    );
}

MovieCastListItem.defaultProps = {
    profile_path: '',
    name: '',
    character: '',
}

MovieCastListItem.propTypes = {
    profile_path: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string,
}

export default MovieCastListItem;