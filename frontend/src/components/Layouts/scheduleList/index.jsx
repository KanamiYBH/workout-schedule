/* eslint-disable react/prop-types */
import ListItem from "../../Fragments/listItems";

export default function ScheduleList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <ListItem key={index} id={item._id} title={item.title} load={item.load} reps={item.reps} />
      ))}
    </ul>
  );
}
