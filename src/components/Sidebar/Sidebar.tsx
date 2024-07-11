import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Inbox, People, Settings, SportsEsports, Code, Menu, Close } from '@mui/icons-material';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-gray-900 p-4 flex flex-col h-full ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <button
        onClick={toggleSidebar}
        className="text-yellow-500 hover:text-white mb-4 focus:outline-none"
      >
        {isCollapsed ? <Menu className="h-6 w-6" /> : <Close className="h-6 w-6 mx-4" />}
      </button>
      <div className={`text-2xl font-bold text-yellow-500 mb-6 ${isCollapsed && 'hidden'}`}>Impact Games</div>
      <nav className="flex-1 space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center p-2 ${isActive ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:bg-yellow-500 hover:text-black'} rounded-md`
          }
        >
          <Home className="h-5 w-5 mr-3" />
          <span className={`${isCollapsed && 'hidden'}`}>Dashboard</span>
        </NavLink>
        <NavLink
          to="/messages"
          className={({ isActive }) =>
            `flex items-center p-2 ${isActive ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:bg-yellow-500 hover:text-black'} rounded-md`
          }
        >
          <Inbox className="h-5 w-5 mr-3" />
          <span className={`${isCollapsed && 'hidden'}`}>Messages</span>
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `flex items-center p-2 ${isActive ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:bg-yellow-500 hover:text-black'} rounded-md`
          }
        >
          <People className="h-5 w-5 mr-3" />
          <span className={`${isCollapsed && 'hidden'}`}>Users</span>
        </NavLink>
        <NavLink
          to="/tournament"
          className={({ isActive }) =>
            `flex items-center p-2 ${isActive ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:bg-yellow-500 hover:text-black'} rounded-md`
          }
        >
          <SportsEsports className="h-5 w-5 mr-3" />
          <span className={`${isCollapsed && 'hidden'}`}>Tournaments</span>
        </NavLink>
        <NavLink
          to="/code-space"
          className={({ isActive }) =>
            `flex items-center p-2 ${isActive ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:bg-yellow-500 hover:text-black'} rounded-md`
          }
        >
          <Code className="h-5 w-5 mr-3" />
          <span className={`${isCollapsed && 'hidden'}`}>Code Space</span>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center p-2 ${isActive ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:bg-yellow-500 hover:text-black'} rounded-md`
          }
        >
          <Settings className="h-5 w-5 mr-3" />
          <span className={`${isCollapsed && 'hidden'}`}>Settings</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
