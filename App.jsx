import React from 'react';
import { useAuth } from './AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import HouseholdDashboard from './components/HouseholdDashboard';
import JunkshopDashboard from './components/JunkshopDashboard';

function App() {
  const { user } = useAuth();
  return user ? <Home /> : <Login />;
}

export default App;