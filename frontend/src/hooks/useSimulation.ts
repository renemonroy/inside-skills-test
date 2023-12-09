import { useState } from "react";
import apiService from "../services/simulationAPI";
import { SimulationData } from "../types/simulationData";
import { FormData } from "../types/formData";

const useSimulation = () => {
  const [result, setResult] = useState<SimulationData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const simulateFluorescentTubes = async (formData: FormData) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiService.simulateFluorescentTubes(formData);
      setResult(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      }
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    simulate: {
      fluorescentTubes: simulateFluorescentTubes,
    },
    result,
    loading,
    error,
  };
};

export default useSimulation;
