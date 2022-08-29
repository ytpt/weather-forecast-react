import React from "react";
import City from "./City";
import s from './FavoriteCity.module.css';

const FavoriteList = ({favCityList}) => {

    const favList = favCityList.map((city) =>
        <City key={city.id} city={city} />
    )

    return (
        <ul className={s.favCityList}>
            {favList}
        </ul>
    )
}

export default FavoriteList;