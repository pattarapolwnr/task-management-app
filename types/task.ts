export type TaskType = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  status: string;
};

export type GroupedTasks = {
  [date: string]: TaskType[];
};
