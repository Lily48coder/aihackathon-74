import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import SplashScreen from "@/pages/SplashScreen";
import Index from "@/pages/Index";
import Welcome from "@/pages/Welcome";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";
import PatientWelcome from "@/pages/PatientWelcome";
import PatientSignIn from "@/pages/PatientSignIn";
import PatientSignUp from "@/pages/PatientSignUp";
import PatientHistory from "@/pages/PatientHistory";
import PatientSymptoms from "@/pages/PatientSymptoms";
import PatientRisks from "@/pages/PatientRisks";
import CampSchedules from "@/pages/CampSchedules";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/splash" element={<SplashScreen />} />
              <Route path="/" element={<Index />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/patient/welcome" element={<PatientWelcome />} />
              <Route path="/patient/sign-in" element={<PatientSignIn />} />
              <Route path="/patient/sign-up" element={<PatientSignUp />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
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
                path="/camp-schedules"
                element={
                  <ProtectedRoute>
                    <CampSchedules />
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