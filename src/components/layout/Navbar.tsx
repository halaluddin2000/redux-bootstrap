import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <nav className="flex max-w-7xl mx-auto h-16 items-center gap-3 justify-between px-5">
      <div className="flex items-center">
        <span className="font-bold ml-2">Task Mengment</span>
      </div>

      <Link className="mx-4" to="/tasks">
        Tasks
      </Link>
      <Link to="/users">Users</Link>

      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}
