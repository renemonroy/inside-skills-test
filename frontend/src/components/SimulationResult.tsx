import React from "react";

interface SimulationResultProps {
  result: {
    total_tubes_replaced: number;
    total_cost: number;
  };
}

const SimulationResult: React.FC<SimulationResultProps> = ({ result }) => {
  return (
    <div>
      <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
        Results
      </h3>
      <p className="mt-2 text-base leading-7 text-slate-700">
        Based on the values you entered, here are the results.
      </p>
      <div className="mt-5 grid gap-5 grid-cols-2">
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 mb-5">
          <div className="truncate text-sm font-medium text-gray-500">
            Total Tubes Replaced in a Year
          </div>
          <div className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {result.total_tubes_replaced}
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 mb-5">
          <div className="truncate text-sm font-medium text-gray-500">
            Total Cost per Year
          </div>
          <div className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            ${result.total_cost.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulationResult;
