import React, {useEffect, useState} from "react";
import City from "./FavoriteList/City";
import {addToFavoriteAC, deleteFromFavoriteAC} from "../../redux/reducers/favorite-reducer";
import {useDispatch} from "react-redux";
import s from "./MainScreen.module.css";
import classNames from "classnames";
import Now from "../NowScreen/Now";
import Forecast from "../ForecastScreen/Forecast";
import Details from "../DetailsScreen/Details";

const MainScreen = ({favCities, weather}) => {

    const dispatch = useDispatch();

    const addToFavList = (cityName, favCities) => {
        if (favCities.find(el => el.name === cityName)) {
            localStorage.setItem('favCity', cityName)
        } else {
            dispatch(addToFavoriteAC(cityName));
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

    const [childData, setChildData] = useState('now');
    const [isActive, setIsActive] = useState('now');

    const handleClick = (event) => {
        setIsActive(event.target.id);
        setChildData(event.target.id);
    }

    const active = classNames(s.active,s.button);
    const passive = classNames(s.button);

    function getMonthName(date){
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        return monthNames[date.getMonth()];
    }

    function currentDay(date) {
        let dd = String(date.getDate());
        const mm = getMonthName(date);
        return dd + ' ' + mm;
    }

    return <div>
        <div className={s.main}>
            <div className={s.main_info}>
                <div className={s.buttonsBlock}>
                    <button key={1} id={'now'} onClick={handleClick}
                        className={isActive !== 'now' ? passive : active}>Now</button>
                    {weather ? <button key={2} id={'details'} onClick={handleClick}
                               className={isActive === 'details' ? active : passive}>Details</button>
                        : <button disabled className={passive}>Details</button>}
                    {weather ? <button key={3} id='forecast' onClick={handleClick}
                               className={isActive === 'forecast' ? active : passive}>Forecast</button>
                        : <button disabled className={passive}>Forecast</button>}
                </div>
                <div className={s.mainBlock}>
                    {childData === 'now'
                        && <Now weather={weather} addToFavList={addToFavList} favCities={favCities} />
                    }
                    {childData === 'details' && <Details weather={weather} currentDay={currentDay} />}
                    {childData === 'forecast' && <Forecast weather={weather} currentDay={currentDay} />}
                </div>
            </div>
            <div className={s.favList}>
                <h3>Added locations:</h3>
                <ul>
                    {favCityList}
                </ul>
            </div>
        </div>
    </div>
}

export default MainScreen;