import React, {useEffect, useState} from 'react';
import axios from "axios";
import SoloTarget from "./SoloTarget";
import cl from './Films.module.css'

const Films = () => {


    const [countPages, setCountPages] = useState([])
    const [page, setPage] = useState(1)


    const [isLoad, setIsLoad] = useState(false);


    //7ff61e92-1e7b-4472-8cba-20d041258dd2
    //35ab9402-b96b-47e7-8fd5-a0d6c3a1b177

    const API_KEY = '35ab9402-b96b-47e7-8fd5-a0d6c3a1b177';
    const TOP_100_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';

    const [movies, setMovies] = useState([])

    useEffect(() => {
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

        getMovies(TOP_100_URL);
    }, [])


    return (
        <div>
            <h1 style={{display: 'flex', justifyContent: 'center'}}>Top 100 films</h1>
            <div className={cl.Main}>
                {movies.map(movie => {
                    return (
                        <SoloTarget
                            key={movie.filmId}
                            movie={movie}
                        />
                    )
                })}
            </div>
            <div>

            </div>
        </div>
    );
};

export default Films;