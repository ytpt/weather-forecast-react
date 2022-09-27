import React, {useEffect, useState} from "react";
import s from './Forecast.module.css';
import {getForecast} from "../../api";
import ListItem from './List/ListItem';

const Forecast = ({weather}) => {
    let forecastList = null;
    const [list, setList] = useState([]);

    useEffect(() => {
        const getForecastData = async () => {
            forecastList = await getForecast(weather.name);
            let listItem = [];

            forecastList.map(item => {
                const date = new Date(item.dt * 1000);
                const currentDate = currentDay(date);
                const time = ((date.getHours() < 10 ? '0' : '') + date.getHours()) + ':' +
                    ((date.getMinutes() < 10 ? '0' : '') + date.getMinutes())
                const tempFeels = Math.round(item.main.feels_like - 273.15);
                const temp = Math.round(item.main.temp - 273.15);
                const weather = item.weather[0];
                const conditions = weather.main;
                const makeWeatherIconUrl = (iconId) => `http://openweathermap.org/img/wn/${iconId}@2x.png`;
                const icon = makeWeatherIconUrl(weather.icon);

                let i = <ListItem key={item.dt} date={date} currentDate={currentDate} time={time}
                            tempFeels={tempFeels} temp={temp} conditions={conditions} icon={icon} />
                listItem.push(i)
            })
            setList(listItem);

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
        }
        getForecastData();
    }, [forecastList, weather]);

    return (
        <div className={s.forecastContent}>
            <h2>{weather.name}</h2>
            {list}
        </div>
    )
}

export default Forecast;