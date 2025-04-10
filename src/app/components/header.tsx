"use client";

import { ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full px-4 py-4 bg-white shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide text-gray-800">
          Plaza
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-[400px]">
          <input
            type="text"
            placeholder="Hinted search text"
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <User size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full -mt-1 -mr-1">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
