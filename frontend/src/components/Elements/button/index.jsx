/* eslint-disable react/prop-types */
export default function Button({ children, onClick, className = "", ...props }) {
    return (
      <button
        className={`py-2 px-4 rounded-lg shadow-md font-semibold disabled:bg-slate-500 ${className}`}
        onClick={onClick} {...props}
      >
        {children}
      </button>
    );
  }
  