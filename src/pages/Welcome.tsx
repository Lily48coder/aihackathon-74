import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0EA5E9] to-[#D3E4FD] flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-900">Welcome to SymptoCamp</h1>
        <p className="text-center text-gray-600">Please sign in or create a new account</p>
        
        <div className="grid grid-cols-2 gap-4">
          <Button 
            onClick={() => navigate("/sign-in")}
            className="w-full bg-[#0077B6] hover:bg-[#0077B6]/90"
          >
            Sign In
          </Button>
          <Button 
            onClick={() => navigate("/sign-up")}
            variant="outline"
            className="w-full border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6]/10"
          >
            Sign Up
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Welcome;