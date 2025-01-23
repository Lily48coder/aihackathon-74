import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientHistory from "./pages/PatientHistory";
import PatientSymptoms from "./pages/PatientSymptoms";
import PatientRisks from "./pages/PatientRisks";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";
import Camps from "@/pages/Camps";
import Profile from "@/pages/Profile";
import PatientRegistration from "@/pages/PatientRegistration";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/camps"
                element={
                  <ProtectedRoute>
                    <Camps />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/patient/register"
                element={
                  <ProtectedRoute>
                    <PatientRegistration />
                  </ProtectedRoute>
                }
              />
              <Route path="/patient/history" element={<PatientHistory />} />
              <Route path="/patient/symptoms" element={<PatientSymptoms />} />
              <Route path="/patient/risks" element={<PatientRisks />} />
            </Routes>
          </Router>
          <Toaster />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;