import React from "react";
import s from './Datails.module.css';

const Details = ({weather}) => {

    function currentDay (date) {
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

    const date = new Date(weather.dt * 1000);
    currentDay(date);

        const sunriseDate = new Date(weather.sunrise * 1000);
        const sunrise = ((sunriseDate.getHours() < 10 ? '0' : '') + sunriseDate.getHours()) + ':' + // Время в формате 00:00
            ((sunriseDate.getMinutes() < 10 ? '0' : '') + sunriseDate.getMinutes());

        const sunsetDate = new Date(weather.sunset * 1000);
        const sunset = ((sunsetDate.getHours()< 10 ? '0' : '') + sunsetDate.getHours()) + ':' + // Время в формате 00:00
            ((sunsetDate.getMinutes()< 10 ? '0' : '') + sunsetDate.getMinutes());


    return (
        <div className={s.detailsBlock}>
            <h2>{weather.name}</h2>
            <ul className={s.detailsBlock_list}>
                <li>Temperature: {Math.round(weather.temp)}°</li>
                <li>Feels like: {Math.round(weather.feels_like)}°</li>
                <li>Weather: {weather.main}</li>
                <li>Sunrise: {sunrise}</li>
                <li>Sunset: {sunset}</li>
            </ul>
       </div>
    )
}

export default Details;