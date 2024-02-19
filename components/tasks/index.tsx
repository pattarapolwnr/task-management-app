"use client";

import { TaskType } from "@/types/task";
import Task from "../task";
import moment from "moment";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface TasksProps {
  createdAt: string;
  tasks: TaskType[];
  isLast: boolean;
  newOffset: Dispatch<SetStateAction<number>>;
}

const Tasks = ({
  createdAt,
  tasks,
  isLast,
  newOffset,
}: TasksProps): React.JSX.Element => {
  const formatDate = moment(createdAt).format("D MMMM YYYY");
  const taskRef = useRef<HTMLDivElement>(null);

  //  Check for the last element for infinite scrolling
  useEffect(() => {
    if (!taskRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        newOffset((prevOffset) => prevOffset + 1);
        observer.unobserve(entry.target);
      }
    });

    observer.observe(taskRef.current);
  }, [isLast, newOffset]);
  return (
    <div
      className="flex flex-col justify-center items-center space-y-4"
      ref={taskRef}
    >
      {/* Created At */}
      <div className="flex justify-start w-full pl-10 items-center text-darkPurple uppercase font-medium">
        <h1>{formatDate}</h1>
      </div>
      {tasks.map((task) => {
        return <Task key={task.id} {...task} />;
      })}
      {/* Line */}
      <div className="flex justify-center items-center border-b-2 border-littleGray mt-4 w-80 md:w-96"></div>
    </div>
  );
};

export default Tasks;
