import axios from "axios";
import React from "react";

const apiWeather ={
    url: 'http://api.openweathermap.org/data/2.5/weather',
    key: 'f660a2fb1e4bad108d6160b7f58c555f'
}

const makeWeatherIconUrl = (iconId) => `http://openweathermap.org/img/wn/${iconId}@2x.png`;

const getWeather = async(city) => {
    const apiWeatherUrl = `${apiWeather.url}?q=${city}&appid=${apiWeather.key}&units=metric`;
    const dataWeather = await axios.get(apiWeatherUrl)
        .then(res => res.data)
        .catch(error => {
            alert('Такого города нет');
            console.log(error.message());
        })

    const {
        weather,
        main: { temp, feels_like },
        sys: { sunrise, sunset },
        dt,
        name
    } = dataWeather;

    const {description, icon, main} = weather[0]

    return {
        description,
        iconUrl: makeWeatherIconUrl(icon),
        temp,
        feels_like,
        sunrise,
        sunset,
        main,
        dt,
        name
    }
}

const apiForecast ={
    url: 'http://api.openweathermap.org/data/2.5/forecast',
    key: 'e53de13439964005b3e5ddfa27abca32'
}

const getForecast = async(city) => {
    const apiForecastUrl = `${apiForecast.url}?q=${city}&appid=${apiForecast.key}`;
    return await axios.get(apiForecastUrl)
        .then(res => res.data.list)
        .catch(error => console.log(error.message));
}

export { getWeather, getForecast };
