import { instance } from '../../../../shared/services/basic-http-service';

export const fetchTrendingMovies = async () => {
    const { data } = await instance.get('/trending/all/day');
    return data;
}

export const fetchMoviesByQuery = (query = "") => {
    return instance.get("/search/movie", {
        params: {
            query
        }
    })
}

export const fetchOneFilm = (id) => {
    return instance.get(`/movie/${id}`);
}

export const fetchMovieCast = async (id) => {
    const { data } = await instance.get(`/movie/${id}/credits`);
    return data;
}

export const fetchMovieReviews = async (id) => {
    const { data } = await instance.get(`/movie/${id}/reviews`);
    return data;
}