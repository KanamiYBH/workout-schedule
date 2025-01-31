/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { useWorkoutsContext } from "@hooks/useWorkoutsContext";

import FormField from "@components/Fragments/formField";
import Button from "@components/Elements/button";

export default function EditScheduleForm({ id }) {
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState('');
  const [reps, setReps] = useState('');
  const [load, setLoad] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWorkout = async (id) => {
      const response = await axios.get(`http://localhost:4000/api/workouts/${id}`);
      const data = response.data;

      if (data) {
        console.log(data)
        setTitle(data.title);
        setReps(data.reps);
        setLoad(data.load);
      }
    }
    fetchWorkout(id);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !reps || !load) {
      setError("Please fill out all fields");
      return;
    }

    setLoading(true);
    const workout = { title, reps, load };

    try {
      const response = await axios.patch(`http://localhost:4000/api/workouts/${id}`, workout);
      const data = response.data;

      if (data.error) {
        setError(data.error);
      } else {
        setError(null);
        dispatch({ type: 'UPDATE_WORKOUT', payload: data });
      }
    } catch (err) {
      // Improved error handling
      if (err.response) {
        setError(err.response?.data?.error || "Something went wrong with the server");
      } else if (err.request) {
        setError("Network error. Please try again later.");
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit}
    >
      <FormField label="Title" id="title" type="text" placeholder="Enter schedule title" onChange={(e) => setTitle(e.target.value)} value={title} required />
      <FormField label="Reps" id="reps" type="number" placeholder="Enter reps" onChange={(e) => setReps(e.target.value)} value={reps} required />
      <FormField label="Load(kg)" id="load" type="number" placeholder="Enter load" onChange={(e) => setLoad(e.target.value)} value={load} required />
      <Button
        type="submit"
        className="w-full bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400" disabled={loading}
      >
        {loading ? 'Updating...' : 'Edit Schedule'}
      </Button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
} 
