import React from "react";
import {ImCross} from 'react-icons/im';
import s from './FavoriteCity.module.css';
import {deleteFromFavorite} from "../../../redux/reducers/favorite-reducer";

const City = ({city}) => {
    return (
        <li className={s.favCity}>
            <p>{city.name}</p>
            <ImCross className={s.favCity_icon} onClick={deleteFromFavorite} />
        </li>
    )
}

export default City;