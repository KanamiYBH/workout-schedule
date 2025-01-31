/* eslint-disable react/prop-types */
import axios from "axios";
import { useWorkoutsContext } from "../../../hooks/useWorkoutsContext";
import Button from "../../Elements/button";
import { useState } from "react";
import { Link } from "react-router";

export default function ListItem({ id, title, load, reps }) {
  const { dispatch } = useWorkoutsContext();
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    const response = await axios.delete(`http://localhost:4000/api/workouts/${id}`);
    const data = response.data;

    if (data.error) {
      return setError(data.error);
    }

    dispatch({ type: 'DELETE_WORKOUT', payload: data });
  }

  return (
    <li className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
      <div>
        <div className="text-lg font-semibold">{title}</div>
        <div className="flex gap-1 text-sm text-gray-600">
          <div className="rounded-lg bg-sky-500 p-1 font-semibold text-gray-50 text-xs">Load : {load}</div>
          <div className="rounded-lg bg-sky-500 p-1 font-semibold text-gray-50 text-xs">Reps : {reps}</div>
        </div>
      </div>
      <div className="flex gap-2">
        <Link className="py-2 px-4 rounded-lg shadow-md font-semibold text-blue-500 hover:text-blue-700"
          to={`/edit/${id}`}>
          Edit
        </Link>
        <Button className="text-red-500 hover:text-red-700"
          onClick={handleDelete}>
          ×
        </Button>
      </div>
      {error && <p>{error}</p>}
    </li>
  );
}
