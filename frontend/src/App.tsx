import React from "react";
import SimulationSelector from "./components/SimulationSelector";
import SimulationForm from "./components/SimulationForm";
import SimulationResult from "./components/SimulationResult";
import useSimulation from "./hooks/useSimulation";
import { FormData } from "./types/formData";

const App: React.FC = () => {
  const { simulate, result, loading, error } = useSimulation();
  const onSubmit = (formData: FormData) => simulate.fluorescentTubes(formData);

  return (
    <div className="lg:flex lg:h-full lg:flex-col">
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          Classroom Materials Budgeting
        </h1>
      </header>
      <main className="p-5 bg-gray-50 lg:flex lg:h-full lg:flex-col">
        <div className="flex flex-col gap-x-5 md:flex-row">
          <div className="md:w-1/2">
            <SimulationSelector />
            <div className="px-0 md:px-5">
              {loading && <p>Loading...</p>}
              {error && <p>Error: {error.message}</p>}
              {result && <SimulationResult result={result} />}
            </div>
          </div>
          <div className="md:w-1/2">
            <SimulationForm onSubmit={onSubmit} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
