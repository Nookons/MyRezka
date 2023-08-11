import React, {useEffect, useState} from 'react';
import cl from './SoloPage.module.css'
// import film from './film.json'


const SoloPage = () => {

    const currentUrl = window.location.href;
    const splitLink = currentUrl.split('_')
    const filmUid = splitLink[1]

    const API_KEY = '7ff61e92-1e7b-4472-8cba-20d041258dd2';
    const FILM = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/' + filmUid;

    const [film, setFilm] = useState({})

    let isLoad = false;

    console.log(film)

    useEffect(() => {
        isLoad = true;
        const getMovies = async (url) => {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-API-KEY': API_KEY,
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(json => {
                    try {
                        setFilm(json)
                        isLoad = false;
                    }catch (e) {
                        console.log(e)
                    }finally {
                    }
                })
                .catch(err => console.log(err))
        }

        getMovies(FILM);
    }, [])

    return (
        <div className={cl.Main}>
            {isLoad
                ?
                <div>
                    Loading...
                </div>
                :
                <div>
                    <div className={cl.Poster}>
                        <img src={film.posterUrl} alt=""/>
                        <div>
                            <h1>{film.nameRu}</h1>
                            {/*<h4 style={{display: "flex", gap: 4, flexWrap: "wrap", alignItems: 'center'}}> Категории : {film.genres.map(e => { return ( <mark>{e.genre}</mark> ) })} </h4>
                            <h4 style={{display: "flex", gap: 4, flexWrap: "wrap", alignItems: 'center'}}> Страна : {film.countries.map(e => { return ( <mark>{e.country}</mark> ) })} </h4>*/}
                            {film.year ? <p>Год выпуска: <mark>{film.year} </mark></p> : <div></div>}
                            {film.year ? <p>Продолжительность: <mark>{film.filmLength} минут</mark></p> : <div></div>}
                            <p>{film.description}</p>
                            <hr/>
                            {film.ratingKinopoiskVoteCount ? <p>Голосов на кинопоиске: <mark>{film.ratingKinopoiskVoteCount}</mark></p> : <div></div>}
                            {film.ratingKinopoisk ? <p>Рейтинг на кинопоиск: <mark>{film.ratingKinopoisk} ★</mark></p> : <div></div>}
                            {film.ratingImdb ? <p>Рейтинг на IMDB: <mark>{film.ratingImdb} ★</mark></p> : <div></div>}
                        </div>
                    </div>
                    <hr/>
                </div>
            }
        </div>
    );
};

export default SoloPage;