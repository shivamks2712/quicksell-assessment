import CardContainer from "./cardContainer";
import { getDataInMap } from "./service/taskData";
import { useEffect, useState } from "react";
import "./dashboard.css";
import { getUserData } from "./service/taskData";

export default function DashBoard({ groupBy, orderBy }) {
  var [task, setTask] = useState([]);

  const [userData, setUserData] = useState(new Map());
  useEffect(() => {
    setUserData(getUserData());
  }, []);

  useEffect(() => {
    let mp = getDataInMap(groupBy);
    let temptask = [];
    for (let [key, value] of mp) {
      temptask.push([key, value]);
    }
    if (temptask && temptask.length > 0)
      temptask.sort(function (a, b) {
        if (groupBy === "userId") {
          let namea = userData.get(a[0])["name"],
            nameb = userData.get(b[0])["name"];
          return namea.localeCompare(nameb);
        }
        return a[0].toString().localeCompare(b[0]);
      });
    setTask(temptask);
  }, [groupBy]);

  return (
    <div className="dashboard">
      {task.map(([group, tasks], key) => {
        if (tasks && task.length > 0)
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
      })}
    </div>
  );
}
