import CardContainer from "./cardContainer";
import { getDataInMap, getUserData } from "../service/taskData";
import { useEffect, useState } from "react";
import "./dashboard.css";

export default function DashBoard({ groupBy, orderBy }) {
  var [task, setTask] = useState([]); // State to store task data

  const [userData, setUserData] = useState(new Map()); // State to store user data
  useEffect(() => {
    setUserData(getUserData()); // Fetching user data and updating state on component mount
  }, []);

  useEffect(() => {
    let mp = getDataInMap(groupBy); // Fetching task data as map based on the groupBy criteria
    let temptask = [];
    for (let [key, value] of mp) {
      temptask.push([key, value]); // Organizing task data into an array for rendering
    }
    if (temptask && temptask.length > 0) {
      // Sorting the tasks based on the groupBy criteria
      temptask.sort(function (a, b) {
        if (groupBy === "userId") {
          let namea = userData.get(a[0])["name"], // Accessing user data for sorting
            nameb = userData.get(b[0])["name"];
          return namea.localeCompare(nameb);
        }
        return a[0].toString().localeCompare(b[0]);
      });
    }
    setTask(temptask); // Updating the task state with the sorted/organized data
  }, [groupBy]);

  return (
    <div className="dashboard">
      {" "}
      {/* Container for the dashboard */}
      {task.map(([group, tasks], key) => {
        if (tasks && task.length > 0) {
          // Rendering CardContainer components for each group with tasks
          return (
            <CardContainer
              key={key}
              groupBy={groupBy}
              orderBy={orderBy}
              group={group}
              tasks={tasks}
              userData={userData}
            />
          );
        }
      })}
    </div>
  );
}
