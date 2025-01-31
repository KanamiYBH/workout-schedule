/* eslint-disable react/prop-types */
import Label from "../../Elements/label";
import Input from "../../Elements/input";

export default function FormField({ label, id, type, placeholder, ...props }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} {...props} />
    </div>
  );
}
