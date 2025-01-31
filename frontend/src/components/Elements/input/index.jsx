/* eslint-disable react/prop-types */
export default function Input({ id, type, placeholder, className = "", ...props }) {
    return (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full border-gray-300 rounded-lg shadow-sm p-1 focus:ring-blue-500 focus:border-blue-500 ${className}`}
        {...props}
      />
    );
  }
  