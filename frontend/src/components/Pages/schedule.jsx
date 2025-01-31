// Import library
import axios from 'axios';
import { useEffect } from "react";
import { useWorkoutsContext } from "@hooks/useWorkoutsContext";

// Import Components
import ScheduleList from "@components/Layouts/scheduleList";
import AddScheduleForm from "@components/Layouts/addScheduleForm";
import { Link } from 'react-router';

function SchedulePage() {
    const { workouts, dispatch } = useWorkoutsContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await axios.get('http://localhost:4000/api/workouts');
            const data = response.data;

            if (data) {
                dispatch({
                    type: 'SET_WORKOUT',
                    payload: data
                })
            }
        }

        fetchWorkouts();
    }, []);


    return (
        <div className="flex flex-col md:flex-row h-screen p-4 bg-gray-100">
            {/* Left Section: Workout Schedule */}
            <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-md p-6 mb-4 md:mb-0">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold mb-4">Workout Schedule</h2>
                    <Link
                        className="w-10 h-10 text-xl flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
                        to={'/'}
                    >
                        +
                    </Link>
                </div>
                <ScheduleList items={workouts} />
            </div>

            {/* Right Section: Add New Schedule */}
            <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-md p-6 md:ml-4">
                <h2 className="text-2xl font-bold mb-4">Add New Schedule</h2>
                <AddScheduleForm />
            </div>
        </div>
    );
}

export default SchedulePage;