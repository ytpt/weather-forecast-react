import React, {useEffect, useState} from "react";
import s from './App.module.css';
import MainScreen from "./Components/MainScreen/MainScreen";
import {useSelector} from "react-redux";
import {GoSearch} from 'react-icons/go';
import {getWeather} from "./api";

const App = () => {
    let [weather, setWeather] = useState(null);
    let [city, setCity] = useState('');

    useEffect(() => {
        document.querySelector('#cityForm').addEventListener('submit', (e) => {
            e.preventDefault();
            city = document.querySelector('#cityName').value;

            const fetchWeatherData = async () => {
                setWeather(await getWeather(city));
            }
            fetchWeatherData()
            setCity('');
            localStorage.setItem('city', city);
        });
    }, []);

    const favCities = useSelector((store) => store.favCities.favCities);

    return (
        <div className={s.container}>
            <div className={s.input_block}>
                <form id={'cityForm'}>
                    <input type='text'
                           id={'cityName'}
                           maxLength='50'
                           placeholder={'Enter city'}
                           value={city}
                           onChange={e => setCity(e.target.value)}
                           required />
                    <button type='submit' id={'searchBtn'}>
                        <GoSearch className={s.input_block_search_icon} />
                    </button>
                </form>
            </div>
            <MainScreen favCities={favCities} weather={weather} city={city}/>
        </div>
    );
}

export default App;
