import { useState } from "react";
import "./App.css";
import { FiAlignCenter, FiChevronDown } from "react-icons/fi";
import DashBoard from "./components/dashboard";

function App() {
  const [filterview, setFilterView] = useState(false);
  const [groupBy, setGroupBy] = useState("status");
  const [orderBy, setOrderBy] = useState("priority");

  return (
    <>
      <div className="navbar">
        <div className="filter-box-wrapper ">
          <div
            className="filter-box"
            onClick={(e) => {
              setFilterView(!filterview);
            }}
          >
            <FiAlignCenter size={14} />
            <p>Display</p>
            <FiChevronDown size={14} />
          </div>
          <div
            className="filter-options"
            style={{ display: filterview ? "block" : "none" }}
          >
            <div className="filter-select">
              <label>Grouping </label>
              <select
                value={groupBy}
                onChange={(e) => setGroupBy(e.target.value)}
              >
                <option value="status" key="Status">
                  Status
                </option>
                <option value="userId" key="User">
                  User
                </option>
                <option value="priority" key="Priority">
                  Priority
                </option>
              </select>
            </div>
            <div className="filter-select">
              <label>Ordering</label>
              <select
                value={orderBy}
                onChange={(e) => setOrderBy(e.target.value)}
              >
                <option value="priority" key="Priority">
                  Priority
                </option>
                <option value="title" key="Title">
                  Title
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* <Container /> */}
      <DashBoard groupBy={groupBy} orderBy={orderBy} />
    </>
  );
}

export default App;
