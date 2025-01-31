export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUT': {
            return {
                workouts: action.payload
            }
        }
        case 'CREATE_WORKOUT': {
            return {
                workouts: [action.payload, ...state.workouts]
            }
        }
        case 'DELETE_WORKOUT' : {
            return {
                workouts: state.workouts.filter(i => i._id !== action.payload._id)
            }
        }
        case 'UPDATE_WORKOUT': {
            return {
                workouts: state.workouts.map(i => (i._id === action.payload._id ? action.payload : i))
            }
        }
        default: {
            return state
        }
    }
}