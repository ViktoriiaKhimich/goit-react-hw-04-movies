import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import { fetchOneFilm } from '../../service/movie-service/movie-service'
import MovieCastPage from '../MovieCastPage'
import MovieReviewsPage from '../MovieReviewsPage'
import Button from '../../../../shared/components/Button'
import MovieDetails from '../../components/MovieDetails'

import styles from './SingleMoviePage.module.css'


class SingleMoviePage extends Component {
    state = {
        movie: [],
        loading: false,
        error: null,
    }

    componentDidMount() {
        this.setState({
            loading: true,
        })
    }

    componentDidUpdate() {
        const { loading } = this.state;

        if (loading) {
            const { movieId } = this.props.match.params;
            const response = fetchOneFilm(movieId);

            response
                .then(({ data }) => {
                    this.setState({
                        movie: data,
                        loading: false
                    })
                })
                .catch((error) => {
                    this.setState({
                        loading: false,
                        error
                    })
                })
        }
    }

    handleGoBack = () => {
        const { location, history } = this.props;
        history.push(location?.state?.from || '/')
    }

    render() {
        const { movie, error, loading } = this.state;
        const { id } = this.state.movie;

        return (
            <>
                <Button className={styles.backBtn} onClick={this.handleGoBack}>Go back</Button>
                <div className={styles.movieCard}>
                    {loading && <p>Loading...</p>}
                    {error && <p>Sorry, there must be some problem on a server</p>}
                    {!loading && !error && <MovieDetails movie={movie} />}

                    <div>
                        <ul>
                            <h3>Additional Info</h3>
                            <div className={styles.additionalInfo}>
                                <li><NavLink className={styles.additionalInfoItem} activeClassName={styles.active} to={`/movie/${id}/cast`}>Cast</NavLink></li>
                                <li><NavLink className={styles.additionalInfoItem} activeClassName={styles.active} to={`/movie/${id}/reviews`}>Reviews</NavLink></li>
                            </div>
                        </ul>
                    </div>
                </div>

                <Route exact path='/movie/:movieId/cast' component={MovieCastPage} />
                <Route exact path='/movie/:movieId/reviews' component={MovieReviewsPage} />

            </>
        );
    }
}

export default SingleMoviePage;