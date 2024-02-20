"use client";

import { TaskType } from "@/types/task";
import Task from "../task";
import moment from "moment";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import SwipeToDelete from "react-swipe-to-delete-ios";

interface TasksProps {
  createdAt: string;
  tasks: TaskType[];
  isLast: boolean;
  newOffset: Dispatch<SetStateAction<number>>;
  handleDelete: (date: string, id: string) => void;
}

const Tasks = ({
  createdAt,
  tasks,
  isLast,
  newOffset,
  handleDelete,
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

  // handle swipe to delete
  const handleSwipeDelete = (id: string) => {
    handleDelete(createdAt, id);
  };
  return (
    <div
      className="flex flex-col justify-center items-center space-y-4"
      ref={taskRef}
    >
      {/* Created At */}
      <div className="flex justify-start w-full pl-10 items-center text-darkPurple uppercase font-medium">
        <h1>{formatDate}</h1>
      </div>

      {/* Each Task Component */}
      {tasks.map((task) => {
        return (
          <SwipeToDelete
            key={task.id}
            height={180}
            onDelete={() => handleSwipeDelete(task.id)}
            className="rounded-xl shadow-lg"
          >
            <Task {...task} />;
          </SwipeToDelete>
        );
      })}

      {/* Line */}
      <div className="flex justify-center items-center border-b-2 border-littleGray h-8 w-80 md:w-96"></div>
    </div>
  );
};

export default Tasks;
