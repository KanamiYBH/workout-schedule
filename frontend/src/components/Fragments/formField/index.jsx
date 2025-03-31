/* eslint-disable react/prop-types */
import Label from "@components/Elements/label";
import Input from "@components/Elements/input";

export default function FormField({ label, id, type, placeholder, ...props }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} {...props} />
    </div>
  );
}
