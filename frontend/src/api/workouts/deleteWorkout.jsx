import axios from "axios"
import { BASE_URL } from "@api/constants"

const deleteWorkout = async (id) => {
    try {
        const response = await axios.delete(BASE_URL + "/api/workouts/" + id);
        const data = response.data;

        return data;
    } catch (error) {
        return error.response.data.error
    }

}

export default deleteWorkout