import {getForecast} from "../../api";

const UPDATE_CURRENT_CITY = 'UPDATE_CURRENT_CITY';

export const initialState = {
    currentCity: {
        name: '',
        weather: {}
    }
}

const currentCityReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_CITY: {
            return {
                ...state,
                currentCity: {
                    name: action.cityName,
                    weather: action.weather
                }
            }
        }
        default:
            return state;
    }
}

export const updateCurrentCityAC = (cityName, weather) => ({type: UPDATE_CURRENT_CITY, cityName, weather});

export const getCurrentCity = (cityName) => async (dispatch) => {
    const response = await getForecast(cityName);
    const weather = response.data;
    dispatch(updateCurrentCityAC(weather));
}

export default currentCityReducer;