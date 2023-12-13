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
    total_broken_tubes = 0
    total_cost = @units * @tubes_per_unit * @tube_cost

    classroom_units = Array.new(@units) { Array.new(@tubes_per_unit) { rand_hours } }

    total_hours = @months * @weeks_per_month * @days_per_week * @daily_usage_hours
    total_hours.times do
      classroom_units.each do |unit|
        unit.map! do |hours|
          if hours > 0
            hours -= 1
          else
            hours
          end
        end

        if unit.count { |hours| hours <= 0 } >= 2
          broken_tubes = unit.count { |hours| hours <= 0 }
          total_broken_tubes += broken_tubes
          total_cost += @tubes_per_unit * @tube_cost
          unit.map! { rand_hours }
        end
      end
    end

    { total_broken_tubes: total_broken_tubes, total_cost: total_cost }
  end

  private

  def rand_hours
    rand(100..200)
  end
end
