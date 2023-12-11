import Select from "./Select";

const materials = [{ id: 1, name: "Fluorescent Tubes" }];

const SimulationSelector: React.FC = () => {
  return (
    <div className="px-0 md:px-5">
      <h2 className="text-base font-semibold leading-7 text-indigo-600">
        Simulator
      </h2>
      <p className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">
        A simple guide to calculate the cost of replacing materials.
      </p>
      <p className="mt-4 text-base leading-7 text-slate-700">
        Budgeting effectively for classroom materials is a skill every educator
        needs. Please, select a material and then enter the values you want to
        simulate the cost of replacing in your classroom.
      </p>
      <div className="mt-4 mb-8">
        <Select list={materials} />
      </div>
    </div>
  );
};

export default SimulationSelector;
