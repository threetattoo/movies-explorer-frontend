import { BEATFILM_API_URL } from '../utils/constants';

class MoviesApi {
    constructor({ apiUrl, headers }) {
        this._apiUrl = apiUrl;
        this._headers = headers;
    }

    _checkApiRequest(response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(new Error(`Ошибка запроса: ${response.status}`));
    }

    getMovies() {
        return fetch(`${this._apiUrl}`, {
            method: 'GET',
            headers: {
                ...this._headers,
            },
        })
        .then(response => this._checkApiRequest(response));
    }
}

const moviesApi = new MoviesApi({
    apiUrl: BEATFILM_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default moviesApi;
