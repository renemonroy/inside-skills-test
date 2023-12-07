import React from "react";
import SimulationForm from "./components/SimulationForm";
import SimulationResult from "./components/SimulationResult";
import useSimulation from "./hooks/useSimulation";
import { FormData } from "./types/formData";

const App: React.FC = () => {
  const { simulate, result, loading, error } = useSimulation();
  const onSubmit = (formData: FormData) => simulate(formData);

  return (
    <div className="lg:flex lg:h-full lg:flex-col">
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          Classroom Costs Simulator
        </h1>
      </header>
      <main className="p-5 bg-gray-50 lg:flex lg:h-full lg:flex-col">
        <div className="flex flex-row gap-x-5">
          <SimulationForm onSubmit={onSubmit} />
          <div className="flex-grow">
            {!result && !loading && !error && (
              <div className="max-w-xl px-5">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Simulate
                </h2>
                <p className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">
                  A simple guide to calculate the cost of replacing materials.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  Budgeting effectively for classroom materials is a skill every
                  educator needs. Enter the values you want to simulate the cost
                  of replacing materials in your classroom.
                </p>
              </div>
            )}
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {result && <SimulationResult result={result} />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
