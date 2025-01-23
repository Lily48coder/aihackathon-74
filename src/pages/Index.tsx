import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-900">Welcome to Medical Camp</h1>
        <p className="text-center text-gray-600">Please select your role</p>
        
        <div className="grid grid-cols-2 gap-4">
          <Button 
            onClick={() => navigate("/welcome")}
            className="w-full bg-[#0077B6] hover:bg-[#0077B6]/90"
          >
            Doctor
          </Button>
          <Button 
            onClick={() => navigate("/patient/welcome")}
            variant="outline"
            className="w-full border-[#0077B6] text-[#0077B6] hover:bg-[#90E0EF]/10"
          >
            Patient
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Index;