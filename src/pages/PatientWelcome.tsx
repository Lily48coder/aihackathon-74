import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const PatientWelcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#22C55E] to-[#F2FCE2] flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-md p-6 space-y-6 animate-scale-in">
        <h1 className="text-2xl font-bold text-center text-gray-900">Welcome to SymptoCamp</h1>
        <p className="text-center text-gray-600">Please sign in or create a new account</p>
        
        <div className="grid grid-cols-2 gap-4">
          <Button 
            onClick={() => navigate("/patient/sign-in")}
            className="w-full bg-[#22C55E] hover:bg-[#22C55E]/90 transition-colors duration-300"
          >
            Sign In
          </Button>
          <Button 
            onClick={() => navigate("/patient/sign-up")}
            variant="outline"
            className="w-full border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E]/10 transition-colors duration-300"
          >
            Sign Up
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PatientWelcome;