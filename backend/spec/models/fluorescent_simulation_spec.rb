require_relative '../../models/fluorescent_simulation'

RSpec.describe FluorescentSimulation do
  context 'when simulating fluorescent tube replacements' do
    let(:simulation) { FluorescentSimulation.new(9, 4, 5, 4, 4, 15, 7) }

    it 'returns a hash with total_broken_tubes and total_cost keys' do
      result = simulation.simulate
      expect(result).to be_a(Hash)
      expect(result.keys).to contain_exactly(:total_broken_tubes, :total_cost)
    end

    it 'calculates total_broken_tubes and total_cost within expected range' do
      result = simulation.simulate
      expect(result[:total_broken_tubes]).to be >= 0
      expect(result[:total_cost]).to be >= (4 * 4 * 7) # At least the cost of initial tubes
    end

    it 'does not break any tubes for zero usage hours' do
      simulation = FluorescentSimulation.new(9, 4, 5, 4, 4, 0, 7)
      result = simulation.simulate
      expect(result[:total_broken_tubes]).to eq(0)
      expect(result[:total_cost]).to eq(4 * 4 * 7) # Cost of initial tubes
    end

    it 'breaks more tubes for maximum daily usage hours' do
      simulation = FluorescentSimulation.new(9, 4, 5, 4, 4, 24, 7)
      result = simulation.simulate
      expect(result[:total_broken_tubes]).to be > 0
    end

    it 'replaces tubes more frequently with minimum lifespan' do
      allow_any_instance_of(FluorescentSimulation).to receive(:rand_hours).and_return(100)
      result = simulation.simulate
      # The test now considers the expected number of broken tubes with a lifespan of 100 hours.
      # For 16 tubes with 100 hours each and 2700 hours of operation per year.
      expected_min_broken = (2700 / 100) * 16
      expect(result[:total_broken_tubes]).to be >= expected_min_broken
    end
    
    it 'replaces tubes less frequently with maximum lifespan' do
      allow_any_instance_of(FluorescentSimulation).to receive(:rand_hours).and_return(200)
      result = simulation.simulate
      # Maximum scenario: Each tube lasts 200 hours. Estimate the least number of broken tubes.
      expected_max_broken = (2700 / 200) * 16
      expect(result[:total_broken_tubes]).to be <= expected_max_broken
    end
    
    it 'handles boundary lifespan values correctly' do
      [100, 200].each do |lifespan|
        allow_any_instance_of(FluorescentSimulation).to receive(:rand_hours).and_return(lifespan)
        result = simulation.simulate
        expect(result[:total_broken_tubes]).to be_a(Integer)
        expect(result[:total_cost]).to be_a(Integer)
      end
    end
    
    [150, 175].each do |lifespan|
      it "handles a lifespan of #{lifespan} hours correctly" do
        allow_any_instance_of(FluorescentSimulation).to receive(:rand_hours).and_return(lifespan)
        result = simulation.simulate
        expect(result[:total_broken_tubes]).to be_a(Integer)
        expect(result[:total_cost]).to be_a(Integer)
      end
    end   
    
    it 'correctly calculates with specific parameters' do
      specific_simulation = FluorescentSimulation.new(12, 2, 3, 3, 5, 10, 8)
      result = specific_simulation.simulate
      expect(result[:total_broken_tubes]).to be_a(Integer)
      expect(result[:total_cost]).to be_a(Integer)
    end

    it 'handles non-integer parameters' do
      expect { FluorescentSimulation.new("9", "4", "5", "4", "4", "15", "7") }.not_to raise_error
    end
  end
end
