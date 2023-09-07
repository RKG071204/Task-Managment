import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import AssignTask from './components/AssignTask';
import ViewTask from './components/ViewTask';
import Messages from './components/Messages';
import Users from './components/Users';
import Settings from './components/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assign-task" element={<AssignTask />} />
            <Route path="/view-task" element={<ViewTask />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>          
        </div>
      </div>
    </Router>
  );
}

export default App;
