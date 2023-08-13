

export const getSoloMovie = ({FILM, setFilm}) => {

    const API_KEY = '1a76997d-58ca-4dc1-88db-a647f45f84fd';

    const check = FILM.split('/')


    console.log(check[6])

    if(check[6] !== 'undefined') {
        const getMovies = async (url) => {
            const response =  fetch(url, {
                method: 'GET',
                headers: {
                    'X-API-KEY': API_KEY,
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(json => setFilm(json))
                .catch(err => console.log(err))
        }
        getMovies(FILM);
    }
    else {
        alert('This movie has not yet been released...')
        window.location.href = '/';
    }
}

export const getTop = ({setMovies}) => {

    //7ff61e92-1e7b-4472-8cba-20d041258dd2
    //35ab9402-b96b-47e7-8fd5-a0d6c3a1b177

    const API_KEY = '1a76997d-58ca-4dc1-88db-a647f45f84fd';
    const TOP_100_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';


    const getMovies = async (url) => {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(json => setMovies(json.films))
            .catch(err => console.log(err))
    }
    getMovies(TOP_100_URL)
}

export const getPremiers = ({setPremiers}) => {

    //7ff61e92-1e7b-4472-8cba-20d041258dd2
    //35ab9402-b96b-47e7-8fd5-a0d6c3a1b177

    const API_KEY = '1a76997d-58ca-4dc1-88db-a647f45f84fd';
    const PREMIERS = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=SEPTEMBER';


    const getMovies = async (url) => {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(json => setPremiers(json.items))
            .catch(err => console.log(err))
    }
    getMovies(PREMIERS)
}


export const getTrailers = ({filmUid, setTrailerLink}) => {

    //7ff61e92-1e7b-4472-8cba-20d041258dd2
    //35ab9402-b96b-47e7-8fd5-a0d6c3a1b177
    //1a76997d-58ca-4dc1-88db-a647f45f84fd

    const API_KEY = '1a76997d-58ca-4dc1-88db-a647f45f84fd';
    const TRAILERS = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/'+ filmUid +'/videos';

    const getMovies = async (url) => {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(json => setTrailerLink(json.items))
            .catch(err => console.log(err))
    }
}