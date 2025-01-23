import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const RISK_COLORS = {
  low: "text-green-600",
  intermediate: "text-orange-500",
  high: "text-red-600"
};

const PatientRisks = () => {
  const navigate = useNavigate();

  // This is a placeholder risk assessment. In a real application,
  // this would be calculated based on the patient's history and symptoms
  const riskLevel = "intermediate";
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <Card className="max-w-4xl mx-auto p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-900">Potential Risks</h1>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Risk Assessment</h2>
            <p className={`text-lg font-medium ${RISK_COLORS[riskLevel as keyof typeof RISK_COLORS]}`}>
              {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)} Risk
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Available Camps</h2>
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => navigate("/camps")}
            >
              Check Camps
            </Button>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <div className="space-y-2">
              <p>National Health Support Helpline: <span className="font-medium">91-20-2770 3000</span></p>
              <p>State Helpline: <span className="font-medium">1075748558</span></p>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <Button 
              variant="outline"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PatientRisks;