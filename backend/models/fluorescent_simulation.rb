class FluorescentSimulation
  def initialize(months, weeks_per_month, days_per_week, units, tubes_per_unit, daily_usage_hours, tube_cost)
    @months = months
    @weeks_per_month = weeks_per_month
    @days_per_week = days_per_week
    @units = units
    @tubes_per_unit = tubes_per_unit
    @daily_usage_hours = daily_usage_hours
    @tube_cost = tube_cost
  end

  def simulate
    total_tubes_replaced = 0
    total_cost = 0

    classroom_units = Array.new(@units) { Array.new(@tubes_per_unit) { rand_hours } }

    @months.times do
      @weeks_per_month.times do
        @days_per_week.times do
          classroom_units.each do |unit|
            unit.map! { |hours| hours - @daily_usage_hours }

            if unit.count { |hours| hours <= 0 } >= 2
              total_tubes_replaced += @tubes_per_unit
              total_cost += @tubes_per_unit * @tube_cost
              unit.map! { rand_hours }
            end
          end
        end
      end
    end

    { total_tubes_replaced: total_tubes_replaced, total_cost: total_cost }
  end

  private

  def rand_hours
    rand(100..200)
  end
end
