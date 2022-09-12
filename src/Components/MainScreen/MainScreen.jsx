import React from "react";
import s from './MainScreen.module.css';
import Buttons from "./Buttons/Buttons";
import {AiOutlineHeart} from 'react-icons/ai';
import City from "./FavoriteList/City";
import {addToFavoriteAC, deleteFromFavoriteAC} from "../../redux/reducers/favorite-reducer";
import {useDispatch} from "react-redux";

const MainScreen = ({favCities, weather, getForecast}) => {

    const dispatch = useDispatch();
    const addToFavList = (cityName, favCities) => {
        if (favCities.find(el => el.name === cityName)) {
            const likeBtn = document.querySelector('#likeBtn')
            likeBtn.style.color = 'red';
        } else {
            dispatch(addToFavoriteAC(cityName));
            const likeBtn = document.querySelector('#likeBtn')
            likeBtn.style.color = 'red';
        }

    }
    const deleteFromFavList = (cityId) => {
        dispatch(deleteFromFavoriteAC(cityId));
    }

    const favCityList = favCities.map(city => {
        return <City
            key={city.id}
            city={city}
            deleteFromFavList={deleteFromFavList}
        />
    })


    return (
        <div className={s.main}>
            <div className={s.main_info}>
                <div className={s.main_info_forecast}>
                    <h2>{`${Math.round(weather.temp)}°C`}</h2>
                    <img alt='Weather icon' src={weather.iconUrl} width={100} height={100}/>
                    <div className={s.add_favorite}>
                        <h3>{`${weather.name}, ${weather.country}`}</h3>
                        <button id={'likeBtn'} onClick={() => addToFavList(weather.name, favCities)}>
                            <AiOutlineHeart className={s.add_favorite_icon} />
                        </button>
                    </div>
                </div>
                <Buttons />
            </div>
            <div className={s.favList}>
                <h3>Added locations:</h3>
                <ul>
                    {favCityList}
                </ul>
            </div>
        </div>
    )
}

export default MainScreen;