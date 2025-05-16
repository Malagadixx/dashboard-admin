import Title from "../../ui/title";
import Member from "./member";
import { users } from "../../constants";

const Team = () => {
  return (
    <div className="bg-white p-3 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex flex-col gap-5">
      <Title>Team</Title>
      {users.map((user, index) => (
        <Member key={index} user={user} />
      ))}
    </div>
  );
};

export default Team;
