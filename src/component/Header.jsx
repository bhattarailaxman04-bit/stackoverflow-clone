import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { isLoggedIn, login, logout } = useAuth();
  
  return (
    <header className="header flex items-center justify-between px-4 py-2 shadow bg-white">
      {/* Left: Logo and Title */}
      <div className="flex items-center space-x-2">
        <img
          src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg?v=ac8d4b7f3c0e"
          alt="StackOverflow Logo"
          className="h-8 w-auto"
        />
        <h1 className="text-lg font-semibold">StackOverflow Clone</h1>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md px-3 py-1 border rounded focus:outline-none"
        />
      </div>

      {/* Right: Auth Button */}
      <button
        onClick={isLoggedIn ? logout : login}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </header>
  );
}
