export default function Header(){
    return(
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

  {/* Right: Login and Register */}
  <div className="flex items-center space-x-2">
    <button className="px-4 py-1 border border-gray-400 rounded hover:bg-gray-100">
      Login
    </button>
    <button className="px-4 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-50">
      Register
    </button>
  </div>
</header>

    );
}