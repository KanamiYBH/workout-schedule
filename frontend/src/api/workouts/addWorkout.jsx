import axios from "axios"
import { BASE_URL } from "@api/constants"

const addWorkout = async (workout) => {
    try {
        const response = await axios.post(BASE_URL + "/api/workouts/", workout);
        const data = response.data;

        return data;
    } catch (error) {
        return error.response.data.error
    }

}

export default addWorkout