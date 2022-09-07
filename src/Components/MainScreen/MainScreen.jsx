import React from "react";
import favorite from '../../img/Shape.png';
import s from './MainScreen.module.css';
import FavoriteList from "./FavoriteList/FavoriteList";
import {useDispatch} from "react-redux";
import {addToFavoriteAC} from "../../redux/reducers/favCities";
import Buttons from "./Buttons/Buttons";

const MainScreen = ({favCities, responseObj}) => {
    let temp = '';
    let iconSRC = '';

    let favCityList = [];
    favCities.forEach(city => {
        favCityList.push(city)
    })

    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(addToFavoriteAC())
    }

    if (Object.keys(responseObj).length > 0) {
        temp = `${Math.round(responseObj.main.temp)}°C`;
        iconSRC = `http://openweathermap.org/img/w/${responseObj.weather[0].icon}.png`;
    }

    return (
        <div className={s.main}>
            <div className={s.main_info}>
                <div className={s.main_info_forecast}>
                    <h2>{temp}</h2>
                    <img alt={responseObj.main} src={iconSRC} width={100} height={100}/>
                    <div className={s.add_favorite}>
                        <h3>{responseObj.name}</h3>
                        <button>
                            <img alt={favorite} src={favorite} width={15} height={15}
                                 onClick={handleClick} />
                        </button>
                    </div>
                </div>
                <Buttons />
            </div>
            <div className={s.favList}>
                <h3>Added locations:</h3>
                <FavoriteList favCityList={favCityList} />
            </div>
        </div>
    )
}

export default MainScreen;