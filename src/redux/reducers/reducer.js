import React from "react";
import { combineReducers } from "redux";
import favCities from './favCities';

const rootReducer = () => combineReducers({favCities});

export default rootReducer;