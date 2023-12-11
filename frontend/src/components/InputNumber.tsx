import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

/**
 * Props for InputNumber component.
 * -------------------------------------------------------------------------
 * @typedef {Object} InputNumberProps
 * @property {string} label - The label text for the input field.
 * @property {string} placeholder - Placeholder text for the input field.
 * @property {UseFormRegister<any>} register - The register function from react-hook-form.
 * @property {string} name - The name attribute for the input field.
 * @property {FieldErrors} errors - Object containing form errors.
 */
interface InputNumberProps {
  label: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors;
}

/**
 * A number input component integrated with react-hook-form.
 * -------------------------------------------------------------------------
 * It includes validation and error display functionalities.
 * @param {InputNumberProps} props - Props for the component.
 * @returns {JSX.Element} A styled number input field with label and error message.
 */
const InputNumber: React.FC<InputNumberProps> = ({
  label,
  placeholder,
  register,
  name,
  errors,
}): JSX.Element => {
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
          id={name}
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
