// Importing various icons from their respective libraries (react-icons npm)
import { MdSignalCellularAlt2Bar } from "react-icons/md";
import { MdSignalCellularAlt } from "react-icons/md";
import { IoCellularSharp } from "react-icons/io5";
import { LuClock6 } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { TbAlertSquareRounded } from "react-icons/tb";
import { FaRegCircle } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

// GroupIcon component that renders different icons based on props.type, basically used to change icon dynamically based on filter selected.
function GroupIcon(props) {
  // Conditionally rendering different icons based on props.type
  if (props.type === 0)
    return <HiOutlineDotsHorizontal size={props.size} color="grey" />;
  if (props.type === 4)
    return <TbAlertSquareRounded size={props.size} color="#FF5733" />;
  if (props.type === 3) return <IoCellularSharp size={props.size} />;
  if (props.type === 2) return <MdSignalCellularAlt size={props.size} />;
  if (props.type === 1) return <MdSignalCellularAlt2Bar size={props.size} />;
  if (props.type === "Todo") {
    return <FaRegCircle size={props.size} color="grey" />;
  }
  if (props.type === "In progress")
    return <LuClock6 size={props.size} color="#f59042" />;
  if (props.type === "Done")
    return <FaRegCheckCircle size={props.size} color="green" />;
  if (props.type === "Backlog")
    return <MdCancel size={props.size} color="grey" />;

  // Default case: Render an avatar and a status indicator if props.type doesn't match any defined types
  return (
    <div className="avatar-container">
      <img
        src={process.env.REACT_APP_ANYNOMOUS_USER_URL}
        alt=""
        className="avatar"
      />
      <div
        className="status-indicator circle"
        style={{ backgroundColor: props.available ? "green" : "#CFCFCF" }}
      ></div>
    </div>
  );
}

export default GroupIcon;
