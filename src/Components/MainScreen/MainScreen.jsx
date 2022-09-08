import React from "react";
import s from './MainScreen.module.css';
import FavoriteList from "./FavoriteList/FavoriteList";
import {useDispatch} from "react-redux";
import {addToFavoriteAC} from "../../redux/reducers/favorite-reducer";
import Buttons from "./Buttons/Buttons";
import {AiOutlineHeart} from 'react-icons/ai';

const MainScreen = ({favCities, weather}) => {

    let favCityList = [];
    favCities.forEach(city => {
        favCityList.push(city)
    })

    const dispatch = useDispatch();
    const addToFavList = (cityName) => {
        dispatch(addToFavoriteAC(cityName));
    }

    return (
        <div className={s.main}>
            <div className={s.main_info}>
                <div className={s.main_info_forecast}>
                    <h2>{`${Math.round(weather.temp)}°C`}</h2>
                    <img alt='Weather icon' src={weather.iconUrl} width={100} height={100}/>
                    <div className={s.add_favorite}>
                        <h3>{`${weather.name}, ${weather.country}`}</h3>
                        <button>
                            <AiOutlineHeart className={s.add_favorite_icon} onClick={addToFavList} />
                        </button>
                    </div>
                </div>
                <Buttons />
            </div>
            <div className={s.favList}>
                <h3>Added locations:</h3>
                <FavoriteList favCityList={favCityList} />
            </div>
        </div>
    )
}

export default MainScreen;