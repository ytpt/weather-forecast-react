import React, {useState} from "react";
import s from './App.module.css';
import MainScreen from "./Components/MainScreen/MainScreen";
import {useSelector} from "react-redux";
import search from "./img/lupa.png";
import axios from "axios";

const App = () => {

    const favCities = useSelector((store) => store.favCities.favCities)

    const [data, setData] = useState([{}]);
    const [location, setLocation] = useState('');

    const key = 'e53de13439964005b3e5ddfa27abca32';
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${key}`;

    const getWeather = () => {
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        setLocation('');
    }

    const enterClick = (event) => {
        if (event.key === 'Enter') {
            getWeather();
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
    <div className={s.container}>
        <div className={s.input_block}>
            <form onSubmit={handleSubmit}>
                <input type='text' defaultValue={location}
                       placeholder={'Enter location'}
                       onChange={event => setLocation(event.target.value)}
                        onKeyPress={enterClick} />
                <button>
                    <img alt={search} src={search} width={30} height={20} onClick={getWeather} />
                </button>
            </form>
        </div>
      <MainScreen favCities={favCities} data={data}/>
    </div>
  );
}

export default App;
