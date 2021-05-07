import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '923c2cf88ec4338da74c768a045101f0'
    }
})