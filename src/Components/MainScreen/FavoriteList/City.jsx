import React from "react";
import {ImCross} from 'react-icons/im';
import s from './FavoriteCity.module.css';
import {getForecast} from "../../../api";

const City = ({city, deleteFromFavList}) => {

    return (
        <li className={s.favCity}>
            <a id={'favCityLink'} className={s.favCityLink} onClick={() => getForecast(city.name)}>
                <p id={'favCityName'}>{city.name}</p>
            </a>
            <button onClick={() => deleteFromFavList(city.id)}>
                <ImCross className={s.favCity_icon} />
            </button>
        </li>
    )
}

export default City;