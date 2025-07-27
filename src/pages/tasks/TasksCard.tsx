import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import type { ITask } from "@/type";
import { cn } from "@/lib/utils";

interface IProps {
  task: ITask;
}

export default function TasksCard({ task }: IProps) {
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "low",
              "bg-yellow-500": task.priority === "medium",
              "bg-red-500": task.priority === "high",
            })}
          ></div>
          <h1>{task.title}</h1>
        </div>
        <div>
          <Button variant="link" className="p-0 text-red-500">
            <Trash2 />
          </Button>
          <Checkbox />
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
    </div>
  );
}
