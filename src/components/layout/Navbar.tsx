import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 items-center gap-3 px-5">
      <div className="flex items-center">
        <div>
          <span>Task Mengment</span>
        </div>
        <div className="gap-4 mr-4">
          <Link to="/tasks">Tasks</Link>
          <Link to="/users">Users</Link>
        </div>
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
}
