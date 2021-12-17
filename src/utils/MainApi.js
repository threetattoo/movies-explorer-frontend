import { MAIN_API_URL } from '../utils/constants';

class MainApi {
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

    getUserInfo() {
        return fetch(`${this._apiUrl}/users/me`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include',
        })
        .then((response) => this._checkApiRequest(response))
    };

    setNewUserInfo(data) {
        return fetch(`${this._apiUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            })
        })
        .then((response) => this._checkApiRequest(response))
    };

    getMovies() {
        return fetch(`${this._apiUrl}/movies`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include',
        })
        .then((response) => this._checkApiRequest(response))
    };

    saveMovie(data) {
        return fetch(`${this._apiUrl}/movies`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: data.image,
                trailer: data.trailer,
                thumbnail: data.thumbnail,
                movieId: data.movieId,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            })
        })
        .then((response) => this._checkApiRequest(response))
    };

    deleteMovie(movieId) {
        return fetch(`${this._apiUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
            credentials: 'include',
        })
        .then((response) => this._checkApiRequest(response))
    };
}

const mainApi = new MainApi({
    apiUrl: MAIN_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default mainApi;
