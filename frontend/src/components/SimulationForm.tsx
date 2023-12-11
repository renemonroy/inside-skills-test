import React from "react";
import { useForm } from "react-hook-form";
import { FormData } from "../types/formData";
import InputNumber from "./InputNumber";

interface SimulationFormProps {
  onSubmit: (data: FormData) => void;
}

const SimulationForm: React.FC<SimulationFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <form
      className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="px-4 py-6 sm:p-8">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Classroom Operation
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          The fields below represent the amount of time the classroom is
          operated.
        </p>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8 mt-5 mb-10 border-b border-gray-900/10 pb-12">
          <InputNumber
            label="Hours per Day"
            placeholder="(15)"
            register={register}
            name="daily_usage_hours"
            errors={errors}
          />
          <InputNumber
            label="Days per Week"
            placeholder="(5)"
            register={register}
            name="days_per_week"
            errors={errors}
          />
          <InputNumber
            label="Weeks per Month"
            placeholder="(4)"
            register={register}
            name="weeks_per_month"
            errors={errors}
          />
          <InputNumber
            label="Months per Year"
            placeholder="(9)"
            register={register}
            name="months"
            errors={errors}
          />
        </div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Materials in Classroom
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          The fields below represent the amount of material used and their
          costs.
        </p>
        <div className="mt-5 space-y-10">
          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">
              Fluorescent Tubes
            </legend>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mt-5">
              <InputNumber
                label="Units per Classroom"
                placeholder="(4)"
                register={register}
                name="units"
                errors={errors}
              />
              <InputNumber
                label="Tubes per Unit"
                placeholder="(4)"
                register={register}
                name="tubes_per_unit"
                errors={errors}
              />
              <InputNumber
                label="Cost per Fluorescent Tube"
                placeholder="(7)"
                register={register}
                name="tube_cost"
                errors={errors}
              />
            </div>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              *In this simulation each tube works for a random number of hours,
              between 100 and 200 before breaking.
            </p>
          </fieldset>
        </div>
        <div className="mt-5 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Simulate
          </button>
        </div>
      </div>
    </form>
  );
};

export default SimulationForm;
