const Main = ({ children }) => {
  return (
    <div className="text-gray-500 h-screen bg-gray-100 p-4 sm:ml-64 flex gap-5 flex-col lg:flex-row translate-all duration-300 mt-14 dark:bg-gray-800 justify-between">
      {children}
    </div>
  );
};

export default Main;
