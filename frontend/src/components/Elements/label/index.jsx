/* eslint-disable react/prop-types */
export default function Label({ htmlFor, children, className = "" }) {
    return (
      <label className={`block text-sm font-medium mb-2 ${className}`} htmlFor={htmlFor}>
        {children}
      </label>
    );
  }
  