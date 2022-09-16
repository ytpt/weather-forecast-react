import React, {useEffect} from "react";
import City from "./FavoriteList/City";
import {addToFavoriteAC, deleteFromFavoriteAC} from "../../redux/reducers/favorite-reducer";
import {useDispatch} from "react-redux";
import s from "./MainScreen.module.css";
import Now from "../NowScreen/Now";
import ButtonsList from "./Buttons/ButtonsList";

const MainScreen = ({favCities, weather, city}) => {

    const likeBtn = document.querySelector('#likeBtn')
    const dispatch = useDispatch();

    const addToFavList = (cityName, favCities) => {
        if (favCities.find(el => el.name === cityName)) {
            likeBtn.style.color = 'red';
            localStorage.setItem('favCity', cityName)
        } else {
            dispatch(addToFavoriteAC(cityName));
            likeBtn.style.color = 'red';
        }
    }

    const deleteFromFavList = (cityId) => {
        dispatch(deleteFromFavoriteAC(cityId));
    }

    useEffect(() => {
        localStorage.setItem("favorites", favCities.map(elem => elem.name));
    }, [favCities, weather]);

    const favCityList = favCities.map(city => {
        return (
            <City
                key={city.id}
                favCities={favCities}
                city={city}
                deleteFromFavList={deleteFromFavList}
                weather={weather}
            />
        )
    })

    return (
        <div>
            <div className={s.main}>
                <div className={s.main_info}>
                    <Now weather={weather} addToFavList={addToFavList} favCities={favCities}/>
                    {/*<Details weather={weather} />*/}
                    {/*<Forecast weather={weather} />*/}
                    <ButtonsList />
                </div>
                <div className={s.favList}>
                    <h3>Added locations:</h3>
                    <ul>
                        {favCityList}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainScreen;