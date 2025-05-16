import Card from "./card";
import { empolyeesData } from "../../constants";
import Balance from "./balance";

const Stats = ({ darkMode }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 w-full">
      {/* Cards com estatísticas */}
      <div className="flex flex-col gap-4 h-full md:w-1/3">
        {empolyeesData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>

      {/* Gráfico de barras */}
      <div className="md:w-2/3">
        <Balance darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Stats;
