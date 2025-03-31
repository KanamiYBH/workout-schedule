import axios from "axios"
import { BASE_URL } from "@api/constants"

const getWorkout = async (id) => {
    try {
        const response = await axios.get(BASE_URL + "/api/workouts/" + id);
        const data = response.data;

        return data;
    } catch (error) {
        return error.response.data.error
    }

}

export default getWorkout