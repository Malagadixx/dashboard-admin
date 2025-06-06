import DonutChart from "./donutChart";
import ShortCuts from "./shortCuts";
import User from "./user";

const Profile = () => {
  return (
    <div className="px-2 py-4 bg-gray-200 rounded-lg w-full dark:bg-gray-700 lg:w-60 xl:w-80 flex flex-col justify-between">
      <User />
      <ShortCuts />
      <DonutChart />
    </div>
  );
};

export default Profile;
