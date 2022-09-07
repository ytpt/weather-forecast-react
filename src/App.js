import React, {useState} from "react";
import s from './App.module.css';
import MainScreen from "./Components/MainScreen/MainScreen";
import {useSelector} from "react-redux";
import search from "./img/lupa.png";

const api ={
    url: 'http://api.openweathermap.org/data/2.5/weather',
    key: 'f660a2fb1e4bad108d6160b7f58c555f'
}

const App = () => {

    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    let [error, setError] = useState(false);

    const getForecast = (e) => {
        e.preventDefault();

        if (city.length === 0) {
            return setError(true);
        }

        setError(false);
        setResponseObj({});

        const uriEncodedCity = encodeURIComponent(city);
        const apiUrl = `${api.url}?q=${uriEncodedCity}&appid=${api.key}&units=metric`;

        fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                if (res.cod !== 200) {
                    throw new Error()
                }
                setResponseObj(res);
                setCity('');
                console.log(res);
            })
            .catch(err => {
                setError(true);
                console.log(err.message);
            });
    }

    const favCities = useSelector((store) => store.favCities.favCities)

    return (
        <div className={s.container}>
            <div className={s.input_block}>
                <form onSubmit={getForecast}>
                    <input type='text' id={'cityName'} value={city}
                           placeholder={'Enter city'} maxLength="50"
                           onChange={(e) => setCity(e.target.value)}
                           required />
                    <button type={'submit'} id={'searchBtn'}>
                        <img alt={search} src={search} width={30} height={20} />
                    </button>
                </form>
            </div>
            <MainScreen favCities={favCities} responseObj={responseObj} />
        </div>
    );
}

export default App;
