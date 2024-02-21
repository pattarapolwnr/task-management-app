import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRectangleList,
  faGears,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

interface TaskProps {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  status: string;
}

const Task = ({ title, description, status }: TaskProps): React.JSX.Element => {
  return (
    <div className="flex justify-center items-center flex-col w-96 h-full min-h-44 md:max-h-64 md:w-[600px] bg-white border-8 border-white">
      {/* Content */}
      <div className="flex justify-center items-center space-x-6 md:space-x-10">
        {/* FontAwesome icons */}
        <div className="w-24 md:w-36 text-[80px] md:text-[128px]">
          {/* Status equals TODO */}
          {status === "TODO" && (
            <FontAwesomeIcon
              icon={faRectangleList}
              style={{ color: "#482096" }}
            />
          )}

          {/* Status equals DOING */}
          {status === "DOING" && (
            <FontAwesomeIcon icon={faGears} style={{ color: "#482096" }} />
          )}

          {/* Status equals DONE */}
          {status === "DONE" && (
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#482096" }}
            />
          )}
        </div>

        {/* Title & Description */}
        <div className="flex w-60 md:w-72 flex-col justify-start items-center">
          {/* Title */}
          <h1 className="w-60 md:w-72 font-medium text-base md:text-lg">
            {title}
          </h1>

          {/* Description */}
          <p className="w-60 md:w-72 max-h-40 font-light text-xs text-gray-400 md:text-sm">
            {description.substring(0, 200)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
