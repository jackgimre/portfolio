import { useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Menu
      </button>

      <div
        className={`absolute left-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out
        ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        <div className="py-1">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Profile
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Settings
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}
