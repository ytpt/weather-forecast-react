import React from "react";
import cloud from '../../img/icons-cloud.png';
import favorite from '../../img/Shape.png';
import s from './MainScreen.module.css';
import FavoriteList from "./FavoriteList/FavoriteList";
import {useDispatch} from "react-redux";
import {addToFavoriteAC} from "../../redux/reducers/favCities";
import Buttons from "./Buttons/Buttons";

const MainScreen = ({favCities, data}) => {

    let favCityList = [];
    favCities.forEach(city => {
        favCityList.push(city)
    })

    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(addToFavoriteAC())
    }

    return (
        <div className={s.main}>
            <div className={s.main_info}>
                <div className={s.main_info_forecast}>
                    <h2>{}°</h2>
                    <img alt={cloud} src={cloud} width={70} height={50} />
                    <div className={s.add_favorite}>
                        <h3>{}</h3>
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