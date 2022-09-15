const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
const DELETE_FROM_FAVORITE = 'DELETE_FROM_FAVORITE';

export const initialState = {
    favCities: [
        {id: 1, name: 'Bali'},
        {id: 2, name: 'Dubrovnik'},
        {id: 3, name: 'Budva'},
        {id: 4, name: 'Tomsk Oblast'},
        {id: 5, name: 'Dubai'}
    ]
}

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE: {
            return {
                ...state,
                favCities: [...state.favCities, {
                    id: Math.floor(Math.random() * 1000000),
                    name: action.cityName
                }]
            }
        }
        case DELETE_FROM_FAVORITE: {
            return {
                ...state,
                favCities: state.favCities.filter((city) =>
                    city.id !== action.cityId)
            }
        }
        default: return state;
    }
}

export const addToFavoriteAC = (cityName) => ({type: ADD_TO_FAVORITE, cityName});
export const deleteFromFavoriteAC = (cityId) => ({type: DELETE_FROM_FAVORITE, cityId});

export default favoriteReducer;