const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
const DELETE_FROM_FAVORITE = 'DELETE_FROM_FAVORITE';

const initialState = {
    favCities: [
        {id: 1, name: 'Bali'},
        {id: 2, name: 'Dane'},
        {id: 3, name: 'Kilo'},
        {id: 4, name: 'Tomsk'},
        {id: 5, name: 'Dubai'}
    ]
}

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE: {
            return {
                ...state,
                favCities: [...state.favCities, {
                    id: Math.floor(Math.random() * 1000),
                    name: action.name
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

export const addToFavoriteAC = (cityName) => ({type: ADD_TO_FAVORITE, cityName})
export const deleteFromFavorite = (cityName) => ({type: DELETE_FROM_FAVORITE, cityName})

export default favoriteReducer;