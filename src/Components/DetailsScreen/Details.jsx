import React from "react";

const Details = ({weather}) => {
    return (
        <div className={s.detailsBlock}>
            <h2>{weather.name}</h2>
            <ul className={s.detailsBlock_list}>
                <li>${`Temperature: ${weather.temp}°`}</li>
                <li>${`Feels like: ${weather.feels_like}°`}</li>
                <li>${`Weather: ${weather.weather}`}</li>
                <li>${`Sunrise: ${weather.sunrise}`}</li>
                <li>${`Sunset: ${weather.sunset}`}</li>
            </ul>
        </div>
    )
}

export default Details;