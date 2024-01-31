import React, { useState, useCallback } from "react";
import "./App.css";
import { FaAngleLeft } from "react-icons/fa6";
import Overview from "./components/Overview/Overview";
import Other from "./components/Other/Other";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [toggleTab, setToggleTab] = useState(1);
  const [collapsed, setCollapsed] = useState(false);

  // Create memoized functions using useCallback
  const handleToggleSidebar = useCallback(() => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  }, []);

  return (
    <div className="container">
      <header>
        <div className="topbar">
          <div className="heading">
            <FaAngleLeft />
            <h3>Create Workorder</h3>
          </div>
          <button className="btn saveBtn" onClick={handleToggleSidebar}>
            Save
          </button>
        </div>
        <nav>
          <button
            className={
              toggleTab === 1 ? "active_tab overviewBtn" : "overviewBtn"
            }
            onClick={() => setToggleTab(1)}
          >
            Overview
          </button>
          <button
            className={toggleTab === 2 ? "active_tab otherBtn" : "otherBtn"}
            onClick={() => setToggleTab(2)}
          >
            Other
          </button>
        </nav>
      </header>
      <section>{toggleTab === 1 ? <Overview /> : <Other />}</section>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
    </div>
  );
}

export default App;
