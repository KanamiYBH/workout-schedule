/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { workoutsReducer } from "@reducers/workoutsReducer";

export const WorkoutsContext = createContext();

export const WorkoutContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: []
    });

    return (
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutsContext.Provider>
    )
}