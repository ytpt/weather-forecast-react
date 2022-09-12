import React from "react";
import { combineReducers } from "redux";
import favCities from './favorite-reducer';
import favoriteReducer from './favorite-reducer';

const rootReducer = () => combineReducers({
    favCities,
    favoriteReducer
});

export default rootReducer;