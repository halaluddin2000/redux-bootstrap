import App from "@/App";
import Tasks from "@/pages/tasks/Tasks";
import Users from "@/pages/users/Users";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: "Hello world",
    Component: App,
    children: [
      {
        index: true,
        // path: 'tasks',
        Component: Tasks,
      },
      {
        path: "tasks",
        Component: Tasks,
      },
      {
        path: "users",
        Component: Users,
      },
    ],
  },
]);
