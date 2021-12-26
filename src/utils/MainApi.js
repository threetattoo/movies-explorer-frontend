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

    register({ name, password, email }) {
        return fetch(`${this._apiUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name,
                password,
                email,
            }),
            credentials: 'include',
        })
        .then((response) => this._checkApiRequest(response))
    };

    login({ email, password }) {
        return fetch(`${this._apiUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                email,
                password,
            }),
            credentials: 'include',
        })
        .then((response) => this._checkApiRequest(response))
    };

    logout() {
        return fetch(`${this._apiUrl}/signout`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
        })
        .then((response) => this._checkApiRequest(response))
    };

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

    deleteMovie(savedMovie) {
        return fetch(`${this._apiUrl}/movies/${savedMovie._id}`, {
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
