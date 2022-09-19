import React from "react";
import s from './Forecast.module.css';

const Forecast = ({weather}) => {

    const date = new Date(weather.dt * 1000);
    function currentDay(date) {
        let dd = String(date.getDate());
        const mm = getMonthName(date);
        return dd + ' ' + mm;
    }

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

    const forecastList = weather.data;
    console.log(forecastList)
    forecastList.map(item => {
        currentDay(date);
        console.log(item);
    })

    return (
        <div className={s.forecastContent}>
            <h2>{weather.name}</h2>
            <div className={s.forecastBlock}>
                <div className={s.dateTime}>
                    {/*<p>${date}</p>*/}
                    {/*<p>${time}</p>*/}
                </div>
                <div className={s.tempImg}>
                    <ul className={s.forecastTemp}>
                        <li>Temperature: {Math.round(weather.temp)}°</li>
                        <li>Feels like: {Math.round(weather.feels_like)}°</li>
                    </ul>
                    <div className={s.forecastImg}>
                        <p>{weather.main}</p>
                        <img src={weather.iconUrl} width="40" height="40" alt={'weather img'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forecast;