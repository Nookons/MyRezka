import React from 'react';
import cl from './SoloTarget.module.css';
import MyButton from "../../components/MyButton/MyButton";

const SoloTarget = ({movie}) => {


    const goFullPage = () => {
        window.location.href = '/films?_' + movie.filmId;
    }

    return (
        <div onClick={goFullPage} className={cl.Main}>
            <img src={movie.posterUrlPreview} alt=""/>
            <div className={cl.infoBlock}>
                <h4>{movie.country}</h4>
                <h3>{movie.nameRu}</h3>
                <article>{movie.year}</article>
                <article className={cl.Genres}>{movie.genres.map((element, index) => {
                    return (
                        <p key={index}>{element.genre} :</p>
                    )
                })}</article>
            </div>
        </div>
    );
};

export default SoloTarget;