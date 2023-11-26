import Card from "./card"; // Importing the Card component
import GroupIcon from "./groupIcon"; // Importing the GroupIcon component
import "./cardContainer.css"; // Importing CSS styles for the CardContainer component
import { HiOutlineDotsHorizontal } from "react-icons/hi"; // Importing icons
import { IoMdAdd } from "react-icons/io";
import { useEffect, useState } from "react";

export default function CardContainer({
  groupBy,
  group,
  tasks,
  orderBy,
  userData,
}) {
  // State variables to manage group header, user availability, and task state
  const [groupHeader, setGroupHeader] = useState(group);
  const [userAvailable, setUserAvailable] = useState(false);
  const [taskState, setTaskState] = useState([]);
  const priority = ["No Priority", "Low", "Medium", "High", "Urgent"]; // Priority levels in increasing order of index

  // Effect to update taskState when tasks change
  useEffect(() => setTaskState(tasks), [tasks]);

  // Effect to sort taskState array based on alphabetical order of title and higher order of priority as selected by user
  useEffect(() => {
    if (tasks && tasks.length > 0) {
      let temp = [...tasks];
      temp.sort((a, b) => {
        if (orderBy === "title" || a.priority === b.priority) {
          return a.title.localeCompare(b.title);
        }
        return a.priority - b.priority;
      });
      setTaskState(temp);
    }
  }, [orderBy]);

  // Effect to update groupHeader and userAvailability based on groupBy attribute and userData changes
  useEffect(() => {
    if (groupBy === "userId") {
      let name = userData.get(group).name;
      let available = userData.get(group).available;
      setGroupHeader(name);
      setUserAvailable(available);
    } else {
      // mapping priority values to corresponding string 
      if ([0, 1, 2, 3, 4].includes(group)) {
        group = priority[group];
      }
      setUserAvailable(false);
      setGroupHeader(group);
    }
  }, [tasks]);

  const wrapperStyle = {
    padding: "0.2rem 0.75rem",
    marginTop: "2rem",
    minWidth: "16rem",
    maxWidth: "18rem",
    margin: "0rem 0.2rem",
  };
  return (
    <div style={wrapperStyle}>
      {/* Container header */}
      <div className="flexbox container-header">
        {/* Group information attribute on basis of grouping is done*/}
        <div className="flexbox icon-section">
          <GroupIcon type={group} size={18} available={userAvailable} />
          <p>{groupHeader}</p>
          {/* Displaying the task count */}
          <p style={{ fontSize: "11px", fontWeight: "400", color: "grey" }}>
            {tasks.length}
          </p>
        </div>
        {/* Icons for actions */}
        <div className="flexbox icon-section">
          <IoMdAdd size={20} color="grey" />
          <HiOutlineDotsHorizontal size={20} color="grey" />
        </div>
      </div>
      {/* Rendering individual cards for each task */}
      <div>
        {taskState.map((task, index) => (
          <Card
            key={index}
            task={task}
            groupBy={groupBy}
            user={userData.get(task.userId)}
          />
        ))}
      </div>
    </div>
  );
}
