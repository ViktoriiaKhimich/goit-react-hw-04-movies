import React from 'react'
import PropTypes from 'prop-types'


const MovieReviewListItem = ({ author, content }) => {
    return (
        <li>
            <h3>Username: {author}</h3>
            <p>{content}</p>
        </li>
    );
}

MovieReviewListItem.defaultProps = {
    author: '',
    content: '',
}

MovieReviewListItem.propTypes = {
    author: PropTypes.string,
    content: PropTypes.string,
}

export default MovieReviewListItem;