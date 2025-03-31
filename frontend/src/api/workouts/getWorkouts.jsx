import axios from "axios"
import { BASE_URL } from "@api/constants"

const getWorkouts = async () => {
    try {
        const response = await axios.get(BASE_URL + "/api/workouts");
        const data = response.data;

        return data;
    } catch (error) {
        console.log(error)
    }

}

export default getWorkouts