import { useState } from "react";
import "./home.css"; // Importing CSS styles for the Home component
import { FiAlignCenter, FiChevronDown } from "react-icons/fi"; // Importing icons
import DashBoard from "../components/dashboard"; // Importing the Dashboard component

function Home() {
  // State variables for filter view, grouping, and ordering
  const [filterview, setFilterView] = useState(false);
  const [groupBy, setGroupBy] = useState("status");
  const [orderBy, setOrderBy] = useState("priority");

  return (
    <>
      {/* Navbar section */}
      <div className="navbar">
        <div className="filter-box-wrapper ">
          {/* Filter bar or filter options */}
          <div
            className="filter-box"
            onClick={(e) => {
              setFilterView(!filterview); // Toggling filter view
            }}
          >
            <FiAlignCenter size={14} /> {/* Align Center icon */}
            <p>Display</p> {/* Text for display */}
            <FiChevronDown size={14} /> {/* Chevron Down icon */}
          </div>

          {/* Filter options */}
          <div
            className="filter-options"
            style={{ display: filterview ? "block" : "none" }} // Conditional display based on filterview state
          >
            {/* Grouping select */}
            <div className="filter-select">
              <label>Grouping </label>
              {/* Dropdown for grouping */}
              <select
                value={groupBy}
                onChange={(e) => setGroupBy(e.target.value)} // Handling groupBy factor change
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

            {/* Ordering select */}
            <div className="filter-select">
              <label>Ordering</label>
              {/* Dropdown for ordering */}
              <select
                value={orderBy}
                onChange={(e) => setOrderBy(e.target.value)} // Handling ordering change
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

      {/* Dashboard component with groupBy and orderBy props */}
      <DashBoard groupBy={groupBy} orderBy={orderBy} />
    </>
  );
}

export default Home; // Exporting the Home component
