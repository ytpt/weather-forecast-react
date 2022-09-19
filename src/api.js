import axios from "axios";
import React from "react";

const api ={
    url: 'http://api.openweathermap.org/data/2.5/weather',
    key: 'f660a2fb1e4bad108d6160b7f58c555f'
}

const makeIconUrl = (iconId) => `http://openweathermap.org/img/wn/${iconId}@2x.png`;

const getForecast = async(city) => {
    const apiUrl = `${api.url}?q=${city}&appid=${api.key}&units=metric`;

    const data = await axios.get(apiUrl)
        .then(res => res.data)

    const {
        weather,
        main: { temp, feels_like },
        sys: { sunrise, sunset },
        dt,
        name
    } = data;

    const {description, icon, main} = weather[0]

    return {
            description,
            iconUrl: makeIconUrl(icon),
            temp,
            feels_like,
            sunrise,
            sunset,
            main,
            dt,
            name,
    }
}

export { getForecast };