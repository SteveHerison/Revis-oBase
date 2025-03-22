import React from "react";

const Input = ({ type, label, value, ...rest }) => {
  return (
    <label className="flex flex-col">
      <p className="text-white">{label}</p>
      <input
        type={type}
        value={value}
        {...rest}
        className="p-2 border outline-none rounded-xl"
      />
    </label>
  );
};

export default Input;
