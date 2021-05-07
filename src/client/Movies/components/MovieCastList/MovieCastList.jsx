import React from 'react'
import PropTypes from 'prop-types'
import MovieCastListItem from '../MovieCastListItem'

import styles from './MovieCastList.module.css'

const MovieCastList = ({ cast }) => {
    const castElements = cast.map(({ id, ...props }) => <MovieCastListItem key={id} {...props} />)
    return (
        <ul>
            <h2 className={styles.title}>Cast</h2>
            <div className={styles.castList}>
                {castElements}
            </div>
        </ul>
    );
}

MovieCastList.defaultProps = {
    cast: [],
}

MovieCastList.propTypes = {
    cast: PropTypes.array,
}

export default MovieCastList;