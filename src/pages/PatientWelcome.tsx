import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const PatientWelcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-900">Welcome Patient</h1>
        <p className="text-center text-gray-600">Please sign in or create a new account</p>
        
        <div className="grid grid-cols-2 gap-4">
          <Button 
            onClick={() => navigate("/patient/sign-in")}
            className="w-full"
          >
            Sign In
          </Button>
          <Button 
            onClick={() => navigate("/patient/sign-up")}
            variant="outline"
            className="w-full"
          >
            Sign Up
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PatientWelcome;