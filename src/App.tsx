import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import Messages from './components/Messages/Messages';
import Users from './components/Users/Users';
import Tournament from './components/Tournament/Tournament';
import CodeSpace from './components/CodeSpace/CodeSpace';
// import Settings from './components/Settings/Settings';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" Component={MainContent} />
              <Route path="/messages" Component={Messages} />
              <Route path="/users" Component={Users} />
              <Route path="/tournament" Component={Tournament} />
              <Route path="/code-space" Component={CodeSpace} />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
