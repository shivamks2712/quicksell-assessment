import "./card.css";
import GroupIcon from "./groupIcon";

// Card component which receives props: task, groupBy, user and create a task card.
export default function Card({ task, groupBy, user }) {
  return (
    <div className="card-container">
      {" "}
      {/* Card container */}
      <div className="card-title">
        {" "}
        {/* Title section */}
        <h3 className="header">{task.id}</h3>
        <div
          className="avatar-container"
          style={{ display: groupBy === "userId" ? "none" : "block" }} // Conditional display of avatar container based on groupBy prop
        >
          <img
            src={process.env.REACT_APP_ANYNOMOUS_USER_URL} // Image source from environment variable
            alt="Online Avatar"
            className="avatar"
          />
          <div
            className="status-indicator circle"
            // Styling the status indicator based on user availability
            style={{ backgroundColor: user.available ? "green" : "#CFCFCF" }}
          ></div>
        </div>
      </div>
      <div className="flexbox">
        <p
          className="task-status"
          // Conditional display of task status based on groupBy prop
          style={{ display: groupBy === "status" ? "none" : "block" }}
        >
          <GroupIcon type={task.status} size={14} />{" "}
          {/* Displaying GroupIcon based on task status */}
        </p>
        <p className="task-name">{task.title}</p>
      </div>
      <div className="flexbox feature-wrapper">
        {/* Conditional rendering based on groupBy prop */}
        {groupBy !== "priority" ? (
          <div className="outline-dot-icon">
            {/* Displaying GroupIcon based on task priority */}
            <GroupIcon type={task.priority} size={12} />
          </div>
        ) : (
          <></>
        )}
        {/* Conditional rendering based on task tag */}
        {task.tag && task.tag.length > 0 ? (
          <div className="feature">
            <div className="circle feature-request"></div>
            <p className="request-type">{task.tag[0]}</p>{" "}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
