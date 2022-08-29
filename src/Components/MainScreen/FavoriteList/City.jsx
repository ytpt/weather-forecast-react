import React from "react";
import cross from "../../../img/close-icon.png";
import s from './FavoriteCity.module.css';
import {deleteFromFavorite} from "../../../redux/reducers/favCities";

const City = ({city}) => {
    return (
        <li className={s.favCity}>
            <p>{city.name}</p>
            <img src={cross} alt={cross} width={20} height={20}
                 onClick={deleteFromFavorite} />
        </li>
    )
}

export default City;