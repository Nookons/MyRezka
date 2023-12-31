import React, {useEffect, useRef, useState} from 'react';
import axios, {get} from "axios";
import SoloTarget from "./SoloTarget";
import cl from './Films.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import {A11y, Autoplay, EffectCards, EffectCreative, Navigation, Pagination, Scrollbar} from "swiper/modules";
import MyButton from "../../UI/MyButton/MyButton";
import {getPremiers, getTop} from "../../utils/Movies";

const Films = () => {


    let screenWidth = window.screen.width

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };


    const [countPages, setCountPages] = useState([])
    const [page, setPage] = useState(1)


    const [isLoad, setIsLoad] = useState(false);


    //7ff61e92-1e7b-4472-8cba-20d041258dd2
    //35ab9402-b96b-47e7-8fd5-a0d6c3a1b177


    const [movies, setMovies] = useState([])
    const [premiers, setPremiers] = useState([])

    const getTopMovies = async () => { getTop({setMovies})}
    const getTopPremiers = async () => { getPremiers({setPremiers})}

    useEffect(() => {
        getTopMovies();
    }, [])

    useEffect(() => {
        getTopPremiers();
    }, [])


    return (
        <div className={cl.Main}>
            <div className={cl.Section}>
                <div className={cl.InfoBlock}>
                    <span style={{display: 'flex', justifyContent: 'left', padding: 14}}>The latest</span>
                    <MyButton variant='text'> Watch more <ArrowForwardIosIcon/></MyButton>
                </div>
                <Swiper
                    style={{padding: '0 24px'}}
                    slidesPerView={2}
                    spaceBetween={8}
                    loop={false}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {movies.map(movie => {
                        return (
                            <SwiperSlide>
                                <SoloTarget
                                    previewCount='2'
                                    key={movie.filmId}
                                    movie={movie}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

            <div className={cl.Section}>
                <div className={cl.InfoBlock}>
                    <span style={{display: 'flex', justifyContent: 'left', padding: 14}}>Coming soon</span>
                    <MyButton variant='text'> Watch more <ArrowForwardIosIcon/></MyButton>
                </div>
                <Swiper
                    style={{padding: '0 24px'}}
                    slidesPerView={2}
                    spaceBetween={8}
                    loop={false}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {premiers.map(movie => {
                        return (
                            <SwiperSlide>
                                <SoloTarget
                                    previewCount='2'
                                    key={movie.filmId}
                                    movie={movie}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Films;