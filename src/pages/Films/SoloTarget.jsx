import React from 'react';
import cl from './SoloTarget.module.css';
import MyButton from "../../UI/MyButton/MyButton";

const SoloTarget = ({movie, previewCount}) => {


    const rootClasses = []

    if (previewCount === '1') {
        rootClasses.push(cl.SoloPreview)
    }
    else if (previewCount === '2') {
        rootClasses.push(cl.SecondaryPreview)
    }


    const goFullPage = () => {
        window.location.href = '/films?_' + movie.filmId;
    }

    return (
        <div onClick={goFullPage} className={cl.Main}>
            <img className={rootClasses.join(' ')} src={movie.posterUrlPreview} alt=""/>
        </div>
    );
};

export default SoloTarget;