import Card from "./card";
import GroupIcon from "./groupIcon";
import "./cardContainer.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import { getUserData } from "./service/taskData";
export default function CardContainer({
  groupBy,
  group,
  tasks,
  orderBy,
  userData,
}) {
  const priority = ["No Priority", "Low", "Medium", "High", "Urgent"];
  const [groupHeader, setGroupHeader] = useState(group);
  const [userAvailable, setUserAvailable] = useState(false);
  const [taskState, setTaskState] = useState([]);

  useEffect(() => setTaskState(tasks), [tasks]);
  useEffect(() => {
    if (tasks && tasks.length > 0) {
      let temp = [...tasks];
      temp.sort((a, b) => {
        if (orderBy === "title") return a.title.localeCompare(b.title);
        return a.priority - b.priority;
      });
      setTaskState(temp);
    }
  }, [orderBy]);

  useEffect(() => {
    if (groupBy === "userId") {
      let name = userData.get(group).name;
      let available = userData.get(group).available;
      setGroupHeader(name);
      setUserAvailable(available);
    } else {
      if ([0, 1, 2, 3, 4].includes(group)) {
        group = priority[group];
      }
      setUserAvailable(false);
      setGroupHeader(group);
    }
  }, [tasks]);

  return (
    <div
      style={{
        padding: "0.2rem 0.75rem",
        marginTop: "2rem",
        minWidth: "16rem",
        maxWidth: "18rem",
        margin: "0rem 0.2rem",
      }}
    >
      <div className="flexbox container-header">
        <div className="flexbox icon-section">
          <GroupIcon type={group} size={18} available={userAvailable} />
          <p>{groupHeader}</p>
          <p style={{ fontSize: "11px", fontWeight: "400", color: "grey" }}>
            {tasks.length}
          </p>
        </div>
        <div className="flexbox icon-section">
          <IoMdAdd size={20} color="grey" />
          <HiOutlineDotsHorizontal size={20} color="grey" />
        </div>
      </div>
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
