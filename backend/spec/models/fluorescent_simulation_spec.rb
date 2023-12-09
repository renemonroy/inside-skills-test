require_relative '../../models/fluorescent_simulation'

RSpec.describe FluorescentSimulation do
  context 'when simulating fluorescent tube replacements' do
    let(:simulation) { FluorescentSimulation.new(9, 4, 5, 4, 4, 15, 7) }

    it 'returns a hash with total_tubes_replaced and total_cost keys' do
      result = simulation.simulate
      expect(result).to be_a(Hash)
      expect(result.keys).to contain_exactly(:total_tubes_replaced, :total_cost)
    end

    it 'calculates total_tubes_replaced and total_cost within expected range' do
      result = simulation.simulate
      expect(result[:total_tubes_replaced]).to be >= 0
      expect(result[:total_cost]).to be >= 0
    end

    it 'does not replace any tubes for zero usage hours' do
      simulation = FluorescentSimulation.new(9, 4, 5, 4, 4, 0, 7)
      result = simulation.simulate
      expect(result[:total_tubes_replaced]).to eq(0)
      expect(result[:total_cost]).to eq(0)
    end

    it 'replaces more tubes for maximum daily usage hours' do
      simulation = FluorescentSimulation.new(9, 4, 5, 4, 4, 24, 7)
      result = simulation.simulate
      expect(result[:total_tubes_replaced]).to be > 0
    end

    it 'replaces tubes more frequently with minimum lifespan' do
      allow_any_instance_of(FluorescentSimulation).to receive(:rand_hours).and_return(100)
      result = simulation.simulate
      # Given the nature of random numbers, we can't expect an exact number of replacements.
      # Instead, we'll expect a range of replacements that is within 10% of the expected value.
      # For 16 tubes, this is about 432 replacements a year.
      expected_replacements = 432
      tolerance = 43  # 10% of 432
    
      expect(result[:total_tubes_replaced]).to be_between(expected_replacements - tolerance, expected_replacements + tolerance)
    end
    

    it 'replaces tubes less frequently with maximum lifespan' do
      allow_any_instance_of(FluorescentSimulation).to receive(:rand_hours).and_return(200)
      result = simulation.simulate
      # Maximum scenario: Each tube is replaced approximately 13.5 times a year (2700 / 200)
      # For 16 tubes, this is about 216 replacements a year.
      expected_maximum_replaced = 16 * (2700 / 200)
      expect(result[:total_tubes_replaced]).to be <= expected_maximum_replaced
    end

    it 'handles boundary lifespan values correctly' do
      [100, 200].each do |lifespan|
        allow_any_instance_of(FluorescentSimulation).to receive(:rand_hours).and_return(lifespan)
        result = simulation.simulate
        expect(result[:total_tubes_replaced]).to be_a(Integer)
        expect(result[:total_cost]).to be_a(Integer)
      end
    end

    [150, 175].each do |lifespan|
      it "handles a lifespan of #{lifespan} hours correctly" do
        allow_any_instance_of(FluorescentSimulation).to receive(:rand_hours).and_return(lifespan)
        result = simulation.simulate
        expect(result[:total_tubes_replaced]).to be_a(Integer)
        expect(result[:total_cost]).to be_a(Integer)
      end
    end    
    
    it 'correctly calculates with specific parameters' do
      specific_simulation = FluorescentSimulation.new(12, 2, 3, 3, 5, 10, 8)
      result = specific_simulation.simulate
      expect(result[:total_tubes_replaced]).to be_a(Integer)
      expect(result[:total_cost]).to be_a(Integer)
    end

    it 'handles non-integer parameters' do
      expect { FluorescentSimulation.new("9", "4", "5", "4", "4", "15", "7") }.not_to raise_error
    end    
  end
end
