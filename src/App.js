import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Index from './components/index'; // Adjusted import path for Index
import Login from './components/login'; // Adjusted import path for Login
import CandidateHome from './components/candidate/home'; // Adjusted import path for CandidateHome
import { AuthProvider, useAuth } from './auth';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/candidate/home"
          element={
            <ProtectedRoute>
              <CandidateHome />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/index" />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
