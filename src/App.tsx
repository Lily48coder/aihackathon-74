import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Welcome from "./pages/Welcome";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DoctorDashboard from "./components/DoctorDashboard";
import CampSchedules from "./components/CampSchedules";
import PatientWelcome from "./pages/PatientWelcome";
import PatientSignIn from "./pages/PatientSignIn";
import PatientSignUp from "./pages/PatientSignUp";
import PatientHistory from "./pages/PatientHistory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<DoctorDashboard doctor={{
            name: "John Doe",
            age: 35,
            gender: "Male",
            email: "john@example.com",
            phone: "1234567890",
            hospital: "Apollo Hospitals",
            department: "Cardiology"
          }} />} />
          <Route path="/camp-schedules" element={<CampSchedules />} />
          
          {/* Patient Routes */}
          <Route path="/patient/welcome" element={<PatientWelcome />} />
          <Route path="/patient/sign-in" element={<PatientSignIn />} />
          <Route path="/patient/sign-up" element={<PatientSignUp />} />
          <Route path="/patient/history" element={<PatientHistory />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;