import React from "react";
import { combineReducers } from "redux";
import favCities from './favorite-reducer';

const rootReducer = () => combineReducers({favCities});

export default rootReducer;