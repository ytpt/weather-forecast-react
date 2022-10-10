import React, {useEffect, useState} from "react";
import s from './App.module.css';
import MainScreen from "./Components/MainScreen/MainScreen";
import {useDispatch, useSelector} from "react-redux";
import {GoSearch} from 'react-icons/go';
import {getWeather} from "./api";
import {updateMainCityAC} from "./redux/reducers/mainCity-reducer";


const App = () => {

    const dispatch = useDispatch();
    let favCities = useSelector((store) => store.favCities.favCities);
    let [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const mainCity = localStorage.getItem('mainCity');
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        if (mainCity) {
            setCity(mainCity);

            let fetchWeatherData = async () => {
                setWeather(await getWeather(mainCity));

                favCities.find(city => {
                    if (city.name === mainCity) {
                        setIsFav(true);
                    }
                })
            }

            fetchWeatherData();
            setCity('');
        }
    }, []);

    useEffect(() => {
        document.querySelector('#cityForm').addEventListener('submit', (e) => {
            e.preventDefault();
            city = document.querySelector('#cityName').value;
            setIsFav(false);

            let fetchWeatherData = async () => {
                setWeather(await getWeather(city));
            }
            fetchWeatherData();

            dispatch(updateMainCityAC(city));
            setCity('');
        })
    }, []);

    useEffect(() => {
        if (weather) {
            localStorage.setItem('mainCity', weather.name);

            favCities.find(favCity => {
                if (favCity.name === weather.name) {
                    setIsFav(true);
                }
            })
        }
    }, [weather]);

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
            <MainScreen
                weather={weather} setWeather={setWeather}
                city={city} setCity={setCity}
                isFav={isFav} setIsFav={setIsFav}
                dispatch={dispatch}
                favCities={favCities}
            />
        </div>
    );
}

export default App;
