import Header from "./components/header/header";
import { useState } from "react";
import SideBar from "./components/sideBar/sideBar";
import Main from "./ui/main";
import Content from "./ui/content";
import Profile from "./components/profile/profile";
import Stats from "./components/stats/stats";
import Team from "./components/team/team";
import Event from "./components/event/event";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${darkMode && "dark"} font-quickSand`}>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleSidebar={toggleSidebar}
      />

      <SideBar isSidebarOpen={isSidebarOpen} />

      <Main>
        <Content>
          <Stats darkMode={darkMode} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <Team />
            <Event />
          </div>
        </Content>
        <Profile />
      </Main>
    </div>
  );
};

export default App;
