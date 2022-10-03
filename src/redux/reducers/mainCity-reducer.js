const UPDATE_MAIN_CITY = 'UPDATE_MAIN_CITY';

const initialState = {
    mainCity: ''
}

const mainCityReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MAIN_CITY: {
            return {
                mainCity: action.cityName
            }
        }
        default: return state;
    }
}

export const updateMainCityAC = (cityName) => ({type:UPDATE_MAIN_CITY, cityName});

export default mainCityReducer;