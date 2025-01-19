"use client";
export const Dropdown = ({ name, value, onChange, options }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-md border border-input bg-background mb-2 w-fit px-3 py-2 focus:ring-blue-200"
    >
      {options.map((option, index) => (
        <option value={option.value} key={`${name}_${index}`}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
