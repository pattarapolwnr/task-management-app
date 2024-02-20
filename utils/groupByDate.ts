import { GroupedTasks, TaskType } from "@/types/task";

export const groupByDate = (data: TaskType[]): GroupedTasks => {
  const groupedByDate = data.reduce((result: GroupedTasks, item) => {
    const createdAtDate = item.createdAt.split("T")[0]; // Extracting date part only

    if (!result[createdAtDate]) {
      result[createdAtDate] = [];
    }

    result[createdAtDate].push(item);

    return result;
  }, {});
  return groupedByDate;
};
