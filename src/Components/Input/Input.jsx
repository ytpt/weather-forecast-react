import React, {useState} from "react";
import search from '../../img/lupa.png';
import s from './Input.module.css';
import axios from "axios";

const Input = () => {

    const [data, setData] = useState();
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

    return (
        <div className={s.input_block}>
            <input type='text' defaultValue={location}
                placeholder={'Enter location'}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={enterClick} />
            <img alt={search} src={search} width={30} height={20} onClick={getWeather} />
        </div>
    )
}

export default Input;