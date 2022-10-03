import React from "react";
import { combineReducers } from "redux";
import favCities from './favorite-reducer';
import favoriteReducer from './favorite-reducer';
import mainCity from './mainCity-reducer';
import mainCityReducer from './mainCity-reducer';

const rootReducer = () => combineReducers({
    mainCity, mainCityReducer,
    favCities, favoriteReducer,
});

export default rootReducer;