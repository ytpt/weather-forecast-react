import React, {useEffect} from "react";
import s from './MainScreen.module.css';
import ButtonsList from "./Buttons/ButtonsList";
import {AiOutlineHeart} from 'react-icons/ai';
import City from "./FavoriteList/City";
import {addToFavoriteAC, deleteFromFavoriteAC} from "../../redux/reducers/favorite-reducer";
import {useDispatch} from "react-redux";

const MainScreen = ({favCities, weather, }) => {

    const likeBtn = document.querySelector('#likeBtn')
    const dispatch = useDispatch();

    const addToFavList = (cityName, favCities) => {
        if (favCities.find(el => el.name === cityName)) {
            likeBtn.style.color = 'red';
            localStorage.setItem('favCity', cityName)
        } else {
            dispatch(addToFavoriteAC(cityName));
            likeBtn.style.color = 'red';
        }
    }

    const deleteFromFavList = (cityId) => {
        dispatch(deleteFromFavoriteAC(cityId));
    }

    useEffect(() => {
        localStorage.setItem("favorites", favCities.map(elem => elem.name));
    }, [favCities, weather]);

    const favCityList = favCities.map(city => {
        return (
            <City
                key={city.id}
                favCities={favCities}
                city={city}
                deleteFromFavList={deleteFromFavList}
                weather={weather}
            />
        )
    })

    return (
        <div className={s.main}>
            <div className={s.main_info}>
                <div className={s.main_info_forecast}>
                    <h2>{weather ? `${Math.round(weather.temp)}°C` : '°C'}</h2>
                    {
                        weather
                            ? <img alt='Weather icon' src={weather.iconUrl} width={100} height={100}/>
                            : ''
                    }
                    <div className={s.add_favorite}>
                        <h3 id={'city'}>{weather ? `${weather.name}` : 'City'}</h3>
                        <button id={'likeBtn'} onClick={() => addToFavList(weather.name, favCities)}>
                            <AiOutlineHeart className={s.add_favorite_icon} />
                        </button>
                    </div>
                </div>
                <ButtonsList />
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