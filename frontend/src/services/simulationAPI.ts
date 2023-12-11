import axios from "axios";
import { SimulationData } from "../types/simulationData";
import { FormData } from "../types/formData";

/**
 * Constants used in the simulation API.
 * -------------------------------------------------------------------------
 */
const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || "https://backend-zmli.onrender.com";

/**
 * Object containing API calls for simulations.
 * -------------------------------------------------------------------------
 */
const simulationAPI = {
  /**
   * Simulates fluorescent tube replacement in a classroom setting.
   * -------------------------------------------------------------------------
   * @param {FormData} params - The simulation parameters.
   * @returns {Promise<SimulationData>} The simulation result data.
   */
  simulateFluorescentTubes: async (
    params: FormData
  ): Promise<SimulationData> => {
    const query = new URLSearchParams(
      params as unknown as Record<string, string>
    ).toString();
    const response = await axios.get(
      `${BACKEND_URL}/simulate/fluorescent-tubes?${query}`
    );
    return response.data as SimulationData;
  },
};

export default simulationAPI;
