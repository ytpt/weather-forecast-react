import React from 'react';
import s from '../Forecast.module.css';

const ListItem = ({date, currentDate, time, tempFeels, temp, conditions, icon}) => {
    return (
            <div className={s.forecastBlock}>
                <div className={s.forecast_dateTime}>
                    <p>{currentDate}</p>
                    <p>{time}</p>
                </div>
                <div className={s.forecast_tempImg}>
                    <ul className={s.forecast_temp}>
                        <li>Temperature: {temp}&#176;</li>
                        <li>Feels like: {tempFeels}&#176;</li>
                    </ul>
                    <div className={s.forecast_img}>
                        <p>{conditions}</p>
                        <img src={icon} width="40" height="40" alt="weather"/>
                    </div>
                </div>
            </div>
    )
}

export default ListItem;