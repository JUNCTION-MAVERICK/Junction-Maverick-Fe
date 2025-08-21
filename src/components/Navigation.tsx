import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
            >
              Maverick Web
            </NavLink>
          </div>

          <div className="flex items-center space-x-8">
            <NavLink
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/")
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              홈
            </NavLink>

            <NavLink
              to="/users"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/users")
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              사용자 관리
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
