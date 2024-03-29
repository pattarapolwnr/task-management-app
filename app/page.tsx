"use client";

import { GroupedTasks, TaskType } from "@/types/task";
import { useEffect, useState } from "react";
import axios from "axios";
import { groupByDate } from "@/utils/groupByDate";
import Tasks from "@/components/tasks";
import { toast, Bounce } from "react-toastify";

export default function Home(): React.JSX.Element {
  const [offset, setOffset] = useState<number>(0);
  const [data, setData] = useState<TaskType[]>([]);
  const [groupedData, setGroupedData] = useState<GroupedTasks>({});

  // Fetch API for TODO tasks data with limit 10 and based on dynamic offset
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://todo-list-api-mfchjooefq-as.a.run.app/todo-list?offset=${offset}&limit=10&sortBy=createdAt&isAsc=true&status=TODO`
        );
        setData((prevData) => [...prevData, ...response.data.tasks]);
      } catch (error) {
        toast.error(`${error}`, {
          position: "top-center",
          autoClose: 2001,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    };
    getData();
  }, [offset]);

  // Group TODO tasks by date
  useEffect(() => {
    const groupedData = groupByDate(data);
    setGroupedData(groupedData);
  }, [data]);

  // Handle delete action
  const handleDelete = (date: string, id: string) => {
    const newData = data.filter((task) => task.id !== id);
    const newGroupedData = groupedData[date].filter((task) => task.id !== id);
    setData(newData);
    setGroupedData({ ...groupedData, [date]: newGroupedData });
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-10">
        {Object.keys(groupedData).map((date, index) => {
          if (groupedData[date].length > 0) {
            return (
              <Tasks
                key={date}
                createdAt={date}
                tasks={groupedData[date]}
                isLast={index === Object.keys(groupedData).length - 1}
                newOffset={setOffset}
                handleDelete={handleDelete}
              />
            );
          }
        })}
      </div>
    </>
  );
}
