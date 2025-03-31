/* eslint-disable react/prop-types */
import { useState } from "react";
import { useWorkoutsContext } from "@hooks/useWorkoutsContext";

import FormField from "@components/Fragments/formField";
import Button from "@components/Elements/button";
import addWorkout from "@api/workouts/addWorkout";

export default function AddScheduleForm() {
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState('');
  const [reps, setReps] = useState('');
  const [load, setLoad] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, reps, load };

    const data = await addWorkout(workout);

    if (data.error) {
      return setError(data.error);
    }
    
    setTitle('');
    setReps('');
    setLoad('');
    setError(null);
    dispatch({ type: 'CREATE_WORKOUT', payload: data });
  };


  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit}
    >
      <FormField label="Title" id="title" type="text" placeholder="Enter schedule title" onChange={(e) => setTitle(e.target.value)} value={title} required />
      <FormField label="Reps" id="reps" type="text" placeholder="Enter reps" onChange={(e) => setReps(e.target.value)} value={reps} required />
      <FormField label="Load(kg)" id="load" type="number" placeholder="Enter load" onChange={(e) => setLoad(e.target.value)} value={load} required />
      <Button
        type="submit"
        className="w-full bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
      >
        Add Schedule
      </Button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
} 
