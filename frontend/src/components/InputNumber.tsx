import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface InputNumberProps {
  label: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors;
}

const InputNumber: React.FC<InputNumberProps> = ({
  label,
  placeholder,
  register,
  name,
  errors,
}) => {
  return (
    <div className="sm:col-span-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...register(name, { required: true })}
          type="number"
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        />
        {errors[name] && (
          <p className="text-red-600 text-xs mt-1">Requires a valid number</p>
        )}
      </div>
    </div>
  );
};

export default InputNumber;
