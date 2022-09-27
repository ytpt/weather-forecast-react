import React, {useEffect, useState} from "react";
import {ImCross} from 'react-icons/im';
import s from './FavoriteCity.module.css';

const City = ({city, deleteFromFavList}) => {

    return (
        <li className={s.favCity}>
            <a className={s.favCityLink} onClick={localStorage.setItem('favCity', city.name)}>
                <p>{city.name}</p>
            </a>
            <button onClick={() => deleteFromFavList(city.id)}>
                <ImCross className={s.favCity_icon} />
            </button>
        </li>
    )
}

export default City;