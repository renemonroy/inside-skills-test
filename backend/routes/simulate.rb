require 'sinatra'
require 'json'

get '/simulate/fluorescent-tubes' do
  months = params['months'].to_i
  weeks_per_month = params['weeks_per_month'].to_i
  days_per_week = params['days_per_week'].to_i
  units = params['units'].to_i
  tubes_per_unit = params['tubes_per_unit'].to_i
  daily_usage_hours = params['daily_usage_hours'].to_i
  tube_cost = params['tube_cost'].to_i

  simulator = FluorescentSimulation.new(months, weeks_per_month, days_per_week, units, tubes_per_unit, daily_usage_hours, tube_cost)
  result = simulator.simulate
  content_type :json
  result.to_json
end
