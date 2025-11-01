import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import About from './pages/About';
import AITherapy from './pages/AITherapy';
import BlogDetail from './pages/BlogDetail';
import Blogs from './pages/Blogs';
import Dashboard from './pages/Dashboard';
import HealthAssessment from './pages/HealthAssessment';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Playground from './pages/Playground';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import StressAssessment from './pages/StressAssessment';
import Support from './pages/Support';
import TherapySelection from './pages/TherapySelection';
import TherapySession from './pages/TherapySession';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/health-assessment" element={<ProtectedRoute><HealthAssessment /></ProtectedRoute>} />
          <Route path="/playground" element={<ProtectedRoute><Playground /></ProtectedRoute>} />
          <Route path="/therapy" element={<ProtectedRoute><TherapySelection /></ProtectedRoute>} />
          <Route path="/therapy/:sessionId" element={<ProtectedRoute><TherapySession /></ProtectedRoute>} />
          <Route path="/ai-therapy" element={<ProtectedRoute><AITherapy /></ProtectedRoute>} />
          
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
