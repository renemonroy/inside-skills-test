/**
 * FormData interface represents the data structure for the simulation form input.
 * -------------------------------------------------------------------------
 * @interface
 * @property {number} months - Number of months for the simulation.
 * @property {number} weeks_per_month - Number of weeks in each month.
 * @property {number} days_per_week - Number of days in each week.
 * @property {number} units - Number of fluorescent tube units in the classroom.
 * @property {number} tubes_per_unit - Number of fluorescent tubes in each unit.
 * @property {number} daily_usage_hours - Daily usage hours of the fluorescent tubes.
 * @property {number} tube_cost - Cost of each fluorescent tube.
 */
export interface FormData {
  months: number;
  weeks_per_month: number;
  days_per_week: number;
  units: number;
  tubes_per_unit: number;
  daily_usage_hours: number;
  tube_cost: number;
}
