/**
 * SimulationData interface represents the result structure from the simulation.
 * -------------------------------------------------------------------------
 * @interface
 * @property {number} total_tubes_replaced - Total number of tubes replaced in the simulation.
 * @property {number} total_cost - Total cost incurred in the simulation.
 */
export interface SimulationData {
  total_broken_tubes: number;
  total_cost: number;
}
