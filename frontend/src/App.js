import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import MindEaseHome from './components/home';
import SurveyPage from './components/survey';
import MedicalSupport from './components/medical';
import Dashboard from './components/profile';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<MindEaseHome />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/medical" element={<MedicalSupport />} />
        <Route path="/profile" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
