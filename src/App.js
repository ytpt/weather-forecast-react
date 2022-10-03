import React, {useEffect, useState} from "react";
import s from './App.module.css';
import MainScreen from "./Components/MainScreen/MainScreen";
import {useDispatch} from "react-redux";
import {GoSearch} from 'react-icons/go';
import {getWeather} from "./api";
import {updateMainCityAC} from "./redux/reducers/mainCity-reducer";


const App = () => {

    const dispatch = useDispatch();
    let [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const mainCity = localStorage.getItem('mainCity');

    useEffect(() => {
        if (mainCity !== null) {
            setCity(mainCity);
            let fetchWeatherData = async () => {
                setWeather(await getWeather(mainCity));
            }
            fetchWeatherData();
            setCity('');
        }
    }, []);


    useEffect(() => {
        document.querySelector('#cityForm').addEventListener('submit', (e) => {
            e.preventDefault();
            city = document.querySelector('#cityName').value;
            localStorage.setItem('mainCity', city);

            let fetchWeatherData = async () => {
                setWeather(await getWeather(city));
            }
            fetchWeatherData();

            dispatch(updateMainCityAC(city));
            setCity('');
        })
    }, []);

    return (
        <div className={s.container}>
            <div className={s.input_block}>
                <form id={'cityForm'}>
                    <input type='text'
                           id={'cityName'}
                           value={city}
                           maxLength='50'
                           placeholder={'Enter city'}
                           onChange={e => setCity(e.target.value)}
                           required />
                    <button type='submit' id={'searchBtn'}>
                        <GoSearch className={s.input_block_search_icon} />
                    </button>
                </form>
            </div>
            <MainScreen weather={weather} />
        </div>
    );
}

export default App;
