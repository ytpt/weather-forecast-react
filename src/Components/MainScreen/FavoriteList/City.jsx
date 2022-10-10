import React, {useEffect} from "react";
import {ImCross} from 'react-icons/im';
import s from './FavoriteCity.module.css';
import {getWeather} from "../../../api";
import {updateMainCityAC} from "../../../redux/reducers/mainCity-reducer";
import {deleteFromFavoriteAC} from "../../../redux/reducers/favorite-reducer";

const City = ({ setWeather, city, dispatch, isFav, setIsFav}) => {

    useEffect(() => {
        if (isFav === false) {
            document.querySelector('#likeIcon').style.color = 'black';
        }
    }, [isFav]);

    const fetchWeatherData = async () => {
        setWeather(await getWeather(city.name));
        localStorage.setItem('mainCity', city.name);
        dispatch(updateMainCityAC(city.name));
    }

    const deleteFromFavList = (cityName) => {
        dispatch(deleteFromFavoriteAC(cityName));

        const mainCity = localStorage.getItem('mainCity');
        if (mainCity === cityName) {
            setIsFav(false);
        }
    }

    return (
        <li className={s.favCity}>
            <a className={s.favCityLink} onClick={fetchWeatherData}>
                <p>{city.name}</p>
            </a>
            <button onClick={() => deleteFromFavList(city.name)}>
                <ImCross className={s.favCity_icon} />
            </button>
        </li>
    )
}

export default City;