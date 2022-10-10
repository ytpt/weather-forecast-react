import React, {useEffect} from "react";
import s from '../MainScreen/MainScreen.module.css';
import {AiOutlineHeart} from 'react-icons/ai';

const Now = ({weather, addToFavList, favCities, isFav, setIsFav}) => {

    useEffect(() => {
        if (isFav === true) {
            document.querySelector('#likeIcon').style.color = 'red';
        }
    }, [isFav]);

    const handleClick = () => {
        setIsFav(true);
        if (favCities.find(el => el.name === weather.name)) {
            alert(`${weather.name} is already in favorite list!`);
        }
        addToFavList(weather.name, favCities);
    }

    return (
        <div className={s.main_info}>
            <div className={s.main_info_forecast}>
                <h2>{weather ? `${Math.round(weather.temp)}°C` : '°C'}</h2>
                {weather
                    ? <img alt='Weather icon' src={weather.iconUrl} width={100} height={100} />
                    : ''}
                <div className={s.add_favorite}>
                    <h3 id={'city'}>{weather ? `${weather.name}` : 'City'}</h3>
                    <button id={'likeBtn'} onClick={handleClick}>
                        <AiOutlineHeart id={'likeIcon'} className={s.add_favorite_icon} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Now;