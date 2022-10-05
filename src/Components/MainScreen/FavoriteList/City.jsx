import React from "react";
import {ImCross} from 'react-icons/im';
import s from './FavoriteCity.module.css';
import {getWeather} from "../../../api";
import {updateMainCityAC} from "../../../redux/reducers/mainCity-reducer";

const City = ({setWeather, city, deleteFromFavList, dispatch}) => {

    const fetchWeatherData = async () => {
        setWeather(await getWeather(city.name));
        localStorage.setItem('mainCity', city.name);
        dispatch(updateMainCityAC(city.name));
    }

    return (
        <li className={s.favCity}>
            <a className={s.favCityLink} onClick={fetchWeatherData}>
                <p>{city.name}</p>
            </a>
            <button onClick={() => deleteFromFavList(city.id)}>
                <ImCross className={s.favCity_icon} />
            </button>
        </li>
    )
}

export default City;