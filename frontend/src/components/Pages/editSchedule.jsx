// Import library
import { useEffect } from "react";
import { useWorkoutsContext } from "@hooks/useWorkoutsContext";

// Import Components
import { Link, useParams } from 'react-router';
import ScheduleList from "@components/Layouts/scheduleList";
import EditScheduleForm from '@components/Layouts/editScheduleForm';
import getWorkouts from "@api/workouts/getWorkouts";

function SchedulePage() {
    const { workouts, dispatch } = useWorkoutsContext();
    const { id } = useParams();

    useEffect(() => {
        const fetchWorkouts = async () => {
            const data = await getWorkouts();

            if (!data.error) {
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
                    <Link className="text-2xl font-bold mb-4" to={'/'}>Workout Schedule</Link>
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
                <h2 className="text-2xl font-bold mb-4">Edit Schedule</h2>
                <EditScheduleForm id={id} />
            </div>
        </div>
    );
}

export default SchedulePage;