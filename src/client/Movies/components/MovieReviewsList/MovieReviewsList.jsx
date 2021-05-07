import React from 'react'
import PropTypes from 'prop-types'

import MovieReviewsListItem from '../MovieReviewsListItem'

import styles from './MovieReviewsList.module.css'

const MovieReviewsList = ({ reviews }) => {
    const reviewElements = reviews.map(({ id, ...props }) => <MovieReviewsListItem key={id} {...props} />)
    return (
        <ul className={styles.reviewsList}>
            <h2>Reviews</h2>
            {reviewElements}
        </ul>
    );
}

MovieReviewsList.defaultProps = {
    reviews: []
}

MovieReviewsList.propTypes = {
    reviews: PropTypes.array,
    id: PropTypes.string.isRequired,
}


export default MovieReviewsList;