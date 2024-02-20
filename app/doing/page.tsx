"use client";

import { GroupedTasks, TaskType } from "@/types/task";
import { useEffect, useState } from "react";
import axios from "axios";
import { groupByDate } from "@/utils/groupByDate";
import Tasks from "@/components/tasks";

export default function Doing(): React.JSX.Element {
  const [offset, setOffset] = useState<number>(0);
  const [data, setData] = useState<TaskType[]>([]);
  const [groupedData, setGroupedData] = useState<GroupedTasks>({});

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://todo-list-api-mfchjooefq-as.a.run.app/todo-list?offset=${offset}&limit=10&sortBy=createdAt&isAsc=true&status=DOING`
        );
        setData((prevData) => [...prevData, ...response.data.tasks]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [offset]);

  useEffect(() => {
    const groupedData = groupByDate(data);
    setGroupedData(groupedData);
  }, [data]);

  // handle delete action
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
