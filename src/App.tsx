import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Strategies from './pages/Strategies';
import Positions from './pages/Positions';
import History from './pages/History';
import StrategyPerformance from './pages/StrategyPerformance';

function App() {
  const { token } = useAuthStore();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={token ? <Navigate to="/home" /> : <SignIn />} />
        <Route path="/signup" element={token ? <Navigate to="/home" /> : <SignUp />} />
        <Route path="/home" element={token ? <Dashboard /> : <Navigate to="/signin" />} />
        <Route path="/strategies" element={token ? <Strategies /> : <Navigate to="/signin" />} />
        <Route path="/positions" element={token ? <Positions /> : <Navigate to="/signin" />} />
        <Route path="/history" element={token ? <History /> : <Navigate to="/signin" />} />
        <Route path="/strategy-performance" element={token ? <StrategyPerformance /> : <Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
}

export default App;
