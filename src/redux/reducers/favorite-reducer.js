const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
const DELETE_FROM_FAVORITE = 'DELETE_FROM_FAVORITE';

const initialState = {
    favCities: [
        {name: 'Bali'},
        {name: 'Dubrovnik'},
        {name: 'Budva'},
        {name: 'Tomsk Oblast'},
        {name: 'Dubai'}
    ]
}

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE: {
            return {
                ...state,
                favCities: [...state.favCities, {
                    name: action.cityName
                }]
            }
        }
        case DELETE_FROM_FAVORITE: {
            return {
                ...state,
                favCities: state.favCities.filter((city) =>
                    city.name !== action.cityName)
            }
        }
        default: return state;
    }
}

export const addToFavoriteAC = (cityName) => ({type: ADD_TO_FAVORITE, cityName});
export const deleteFromFavoriteAC = (cityName) => ({type: DELETE_FROM_FAVORITE, cityName});

export default favoriteReducer;