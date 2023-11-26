import { MdSignalCellularAlt2Bar } from "react-icons/md";
import { MdSignalCellularAlt } from "react-icons/md";
import { IoCellularSharp } from "react-icons/io5";
import { LuClock6 } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { TbAlertSquareRounded } from "react-icons/tb";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegCircle } from "react-icons/fa6";

const url =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACNCAMAAAC9gAmXAAAAPFBMVEX///+ZmZmVlZWRkZGOjo6qqqrDw8OcnJzf39+7u7vp6enAwMDx8fH8/Pzl5eWmpqbV1dXPz8/JycmwsLDxOr8nAAAFBElEQVR4nO1b65KzKhBMQAUVxMv7v+sHMXuSKNADkl2rjv1jk9pdp5pxbszA7XbhwoULFy5c+B9CKzlOc9P3TTNPo1T673jMC6s4ewev2DL/PqehrwVjdw8sJ1H3w68x0bJllZfJi1LFWvkbGlJNQCk7HYlGfZlL15Ko/BBquy9yGWpO5/Lgw+tvWZBK0cubfr7xvvQMLDfIp5qL27M0eVwefIwsykU3PJuLA28KqkeJfMU81SOKWY+8HyVj6dwLva2Db+kHvCnARbfHFbOCtceNpy5FxtKpD3JRBck4OsdsuSiZg9rRhclYOku+7ZAM2JZXdyHE45Pw320umYYgnnFbenZKqc4WppQMzzIdXeI4w81HRaUaQjarssKgEphMv/UR1eMl5CQJDXMTE77KriM8l27J0GiY8a9RwbeVbjrYaExohdqgR3mi6WCJ97C6NXw2uBI/Zqjt2PIkfHpOIaMqJK6PPt8jOlWKX+EgHJem0OMpIXmAmo6rhqAcRt9nwWQJZXVQAjmbd9C7BZQBAzmnboqh1RDeegkZDyhownyEQkaoX0ZzK1xIcGyCA2ZDyg8a526G3zk0Y2t8lIAMA2kpNqT9HqH8LMOGZMeERRWxG0sHkxlQinJsJihmIrCp8KJgTHeLWqCYhSIG5Re7hcJSisRihxp5FaE2v4PqxoHgmG5RyBtoYqA70BobcFGw6FsBch7OuysbVAJSrM8hXhCQjI/gDdQ2AIs5+URuJsTJaEK0WREJFpSQ9RQSdyqV0OMLmU5HF8HjVQXNpVYEPKKAiB+MKe0j5mnZa6JTPiXEyza6/TlwszWewSS1c6O+QA43b3zG16tXYxoXGHAo7awNH7E0k5Ry6heR3OYG1Sglg+9lMl7xxDna88mDG+iyKMzGqaWqHrNw+8lTh3uATYrdcG6WfpKd1s7R7c/OGY/hCdYD7IbsU4ybafBFUjVMhmxDwKeI8cZSicV0NRFdHcQbUixmNTwHoCVpKABiMSHJcIF34Y+FEcIPyFM4hzPywFQTNvTxHA7rG6DbT8D3DuobUPsx0O/bQoH5LNptRutiZlJPaXTRxjqsi6MBh9AN2NGJykN7hphTWQ9InVdoJBCsJbzXzBxoR8bpcK8Z2YfDXfMXJAazeOrg5D8Exzm4RxHcDDGTSeZ2C/kVoX8TijjQ4sIIGTKhtxVqLySOlN4RGHaR+n7+lfCkidIG/iBG0ra/X5w0UNrCP+6iDVu9qTdjTvuCd4HEWatvzkBwxhh8YYM4Z/DZMSgZETwFLqGvusLTJ0sYtfkw7FVDnk/5ZnfHjvHs55wJJ3H2c81DRuwz4xRl7ywnPy2s2Ma/pGM4uwBx9PzXNo+nha9t9KQ6QAjLRjVpkX2bWgqzSU16m6KkLJv0UukzPxy1mw9VZxzd+jybxJYjAaf7CGA5Z5O2EYubscsJOnqYthvyrIXJjZtzYR4XOcj7cK1kv5j7hkvemTZvaeH6jZZU6y69SDkMnTvq90LXDYP9/Tg3raNRedpKuef9wjOv9dLL+l0IdxLSwX3d/Xn3aPZZyG+cE83clK040xnas50vPtfZ67OdS7eOTh4MRlHkzL7FeKb7DCe763GyezAW8oB6mCh7R+h2svtTt3PdLXM40707h25JupO4fPNOosOZ7ms6nOku64r1nq+P0m/f810RugNd/8Ed6DdO6/3w/m/vh1+4cOHChQsX/hT/AIjDObKYEbnrAAAAAElFTkSuQmCC";

function GroupIcon(props) {
  if (props.type === 0)
    return (
      <HiOutlineDotsHorizontal className="outline-dot-icon" size={props.size} />
    );
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

  return (
    <div className="avatar-container">
      <img src={url} alt="Online Avatar" className="avatar" />
      <div
        className="status-indicator circle"
        style={{ backgroundColor: props.available ? "green" : "#CFCFCF" }}
      ></div>
    </div>
  );
}

export default GroupIcon;
