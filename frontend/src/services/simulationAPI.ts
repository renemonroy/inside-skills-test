import axios from "axios";
import { SimulationData } from "../types/simulationData";
import { FormData } from "../types/formData";

const BASE_URL = "http://localhost:4567";

const simulationAPI = {
  simulate: async (params: FormData) => {
    const query = new URLSearchParams(
      params as unknown as Record<string, string>
    ).toString();
    const response = await axios.get(`${BASE_URL}/simulate?${query}`);
    return response.data as SimulationData;
  },
};

export default simulationAPI;
