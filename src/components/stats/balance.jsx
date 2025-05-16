import { FiSend } from "react-icons/fi";
import BarChart from "./barChart";
import Title from "../../ui/title";

const Balance = ({ darkMode }) => {
  return (
    <div className="bg-white p-5 rounded-2xl dark:bg-gray-600 dark:text-gray-300">
      <div className="flex justify-between items-center">
        <Title>Balance</Title>
        <FiSend className="bg-gray-50 p-2 rounded-full text-gray-300 w-8 h-8" />
      </div>
      <div>
        <h1 className="font-bold text-2xl">
          R$600,00 <span className="font-medium text-xl">(R$)</span>
        </h1>
        <span>Em Julho de 2025</span>
      </div>
      <BarChart darkMode={darkMode} />
    </div>
  );
};

export default Balance;
