import React from "react";
import axios from "axios";

export const request = (location) => {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${location}&appid=${apiKey}`;

    axios.get(url)
        .then((response) => {
            if (response) {
                return (response.data)
            } else {
                alert("Такого города не существует.");
            }
        })
        .catch(error => console.log(error.message));
}


// const render = data => {
//     const weather = Object.entries(data);
//     let iconSRC = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     let nowIcon = document.querySelector('.nowIcon')
//     let nowTemp = document.querySelector('.nowTemp')
//     let nowTemperature = `${Math.round(data.main.temp)}`;
//     let nowCity = document.getElementById('city');
//     let weatherConditions = document.querySelector('.weatherConditions');
//     let feelsLike = document.querySelector('.feelsLike');
//     let sunrise = document.querySelector('.sunrise');
//     let sunset = document.querySelector('.sunset');
//
//     nowTemp.innerHTML = `<p>${nowTemperature}&#176;</p>`;
//     nowIcon.src = iconSRC;
//     nowCity.innerHTML = data.name;
//     let detailsCity = nowCity.textContent;
//     weatherConditions = data.weather[0].main;
//     feelsLike = `${Math.round(data.main.feels_like)}`;
//     const sunriseDate = new Date(data.sys.sunrise * 1000);
//     const sunsetDate = new Date(data.sys.sunset * 1000);
//     sunrise = ((sunriseDate.getHours() < 10 ? '0' : '') + sunriseDate.getHours()) + ':' + // Время в формате 00:00
//         ((sunriseDate.getMinutes() < 10 ? '0' : '') + sunriseDate.getMinutes());
//     sunset = ((sunsetDate.getHours()< 10 ? '0' : '') + sunsetDate.getHours()) + ':' + // Время в формате 00:00
//         ((sunsetDate.getMinutes()< 10 ? '0' : '') + sunsetDate.getMinutes());
//
//     let detailsElem = document.getElementById('tab-window-details');
//     detailsElem.innerHTML = `
//         <div class="details-content">
//             <span class="detailsCity">${detailsCity}</span>
//             <ul class="details">
//                 <li>Temperature: ${nowTemperature}&#176;</li>
//                 <li>Feels like: ${feelsLike}&#176;</li>
//                 <li>Weather: ${weatherConditions}</li>
//                 <li>Sunrise: ${sunrise}</li>
//                 <li>Sunset: ${sunset}</li>
//             </ul>
//         </div>
//         `;
//
//     //Очищаем инпут
//     let clearInput = document.getElementById("enterCity").value = '';
// }

// function currentDay (date) {
//     let dd = String(date.getDate());
//     let mm = getMonthName(date);
//     return dd + ' ' + mm;
// }
//
// function getMonthName(date){
//     const monthNames = [
//         "January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December"
//     ];
//
//     return monthNames[date.getMonth()];
// }