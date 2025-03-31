import axios from "axios"
import { BASE_URL } from "@api/constants"

const updateWorkout = async (id, workout) => {
    try {
        const response = await axios.patch(BASE_URL + "/api/workouts/" + id, workout);
        const data = response.data;

        return data;
    } catch (error) {
        return error.response.data.error
    }

}

export default updateWorkout