import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-3 border-b shadow-sm">
      {/* Left side - Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
          alt="logo"
          className="h-6 w-6"
        />
        <h1 className="font-bold text-lg">StackOverflow Clone</h1>
      </div>

      {/* Center - Search bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded p-2 w-full"
        />
      </div>

      {/* Right side - Auth buttons */}
      <div className="flex space-x-3">
        <Link to="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Register
          </button>
        </Link>
      </div>
    </header>
  );
}
