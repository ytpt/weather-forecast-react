import React from "react";
import {ImCross} from 'react-icons/im';
import s from './FavoriteCity.module.css';

const City = ({city, deleteFromFavList}) => {

    const setFavCityToStorage = () => {
        localStorage.setItem('favCity', city.name);
    }

    return (
        <li className={s.favCity}>
            <a id={'favCityLink'}
               className={s.favCityLink}
               onClick={setFavCityToStorage}
            >
                <p id={'favCityName'}>{city.name}</p>
            </a>
            <button onClick={() => deleteFromFavList(city.id)}>
                <ImCross className={s.favCity_icon} />
            </button>
        </li>
    )
}

export default City;