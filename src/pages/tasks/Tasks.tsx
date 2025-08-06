// import { useAppSelector } from "@/redux/hook";

import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import TasksCard from "./TasksCard";
import { AddTaskModel } from "./AddTask";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Tasks() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  console.log(tasks);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h2 className="text-2xl mr-auto">Tasks</h2>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => {
                dispatch(updateFilter("all"));
              }}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => {
                dispatch(updateFilter("low"));
              }}
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => {
                dispatch(updateFilter("medium"));
              }}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => {
                dispatch(updateFilter("high"));
              }}
              value="high"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
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
