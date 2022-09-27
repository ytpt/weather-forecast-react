import React from "react";
import s from '../MainScreen/MainScreen.module.css';
import {AiOutlineHeart} from 'react-icons/ai';

const Now = ({weather, addToFavList, favCities}) => {

    return (
        <div className={s.main_info}>
            <div className={s.main_info_forecast}>
                <h2>{weather ? `${Math.round(weather.temp)}°C` : '°C'}</h2>
                {weather
                    ? <img alt='Weather icon' src={weather.iconUrl} width={100} height={100} />
                    : ''}
                <div className={s.add_favorite}>
                    <h3 id={'city'}>{weather ? `${weather.name}` : 'City'}</h3>
                    <button id={'likeBtn'} onClick={() => addToFavList(weather.name, favCities)}>
                        <AiOutlineHeart className={s.add_favorite_icon} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Now;