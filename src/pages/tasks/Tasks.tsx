// import { useAppSelector } from "@/redux/hook";

import { selectTasks } from "@/redux/features/task/taskSlice";
import { useSelector } from "react-redux";
import TasksCard from "./TasksCard";
import { AddTaskModel } from "./AddTask";

export default function Tasks() {
  const tasks = useSelector(selectTasks);
  console.log(tasks);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">Tasks</h2>
        <AddTaskModel />
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TasksCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
