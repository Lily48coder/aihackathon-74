import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const RISK_COLORS = {
  low: "text-green-600",
  intermediate: "text-orange-500",
  high: "text-red-600"
};

interface RiskAssessment {
  level: keyof typeof RISK_COLORS;
  percentage: number;
  potentialIssues: string[];
}

const PatientRisks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [assessment, setAssessment] = useState<RiskAssessment>({
    level: "low",
    percentage: 0,
    potentialIssues: []
  });

  useEffect(() => {
    // In a real application, this would be an API call to an AI service
    // For now, we'll simulate the AI analysis based on symptoms
    const analyzeSymptoms = () => {
      const selectedCategory = location.state?.selectedCategory;
      const selectedSymptom = location.state?.selectedSymptom;

      // Simulate AI analysis
      let riskLevel: keyof typeof RISK_COLORS = "low";
      let riskPercentage = 0;
      let issues: string[] = [];

      if (selectedCategory === "Cardiovascular Diseases") {
        riskLevel = "high";
        riskPercentage = 75;
        issues = [
          "Potential coronary artery disease",
          "Risk of hypertensive crisis",
          "Possible cardiac arrhythmia"
        ];
      } else if (selectedCategory === "Respiratory Diseases") {
        riskLevel = "intermediate";
        riskPercentage = 45;
        issues = [
          "Chronic bronchitis indicators",
          "Early signs of asthma",
          "Possible upper respiratory infection"
        ];
      } else {
        riskLevel = "low";
        riskPercentage = 25;
        issues = [
          "Minor inflammatory condition",
          "Temporary systemic response",
          "Stress-related symptoms"
        ];
      }

      setAssessment({
        level: riskLevel,
        percentage: riskPercentage,
        potentialIssues: issues
      });
    };

    analyzeSymptoms();
  }, [location.state]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-4">
      <Card className="max-w-4xl mx-auto p-6 space-y-6 bg-white/90 backdrop-blur-sm border-green-100">
        <h1 className="text-2xl font-bold text-center text-green-800">Potential Risks</h1>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-green-700">Risk Assessment</h2>
            <div className="flex items-center space-x-2 bg-green-50 p-4 rounded-lg">
              <p className={`text-lg font-medium ${RISK_COLORS[assessment.level]}`}>
                {assessment.level.charAt(0).toUpperCase() + assessment.level.slice(1)} Risk
              </p>
              <span className="text-green-600">({assessment.percentage}%)</span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-green-700">Potential Issues</h2>
            <div className="bg-green-50 p-4 rounded-lg">
              <ul className="space-y-2">
                {assessment.potentialIssues.map((issue, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="text-green-700">{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-green-700">Contact Information</h2>
            <div className="space-y-2 text-green-700 bg-green-50 p-4 rounded-lg">
              <p>National Health Support Helpline: <span className="font-medium">91-20-2770 3000</span></p>
              <p>State Helpline: <span className="font-medium">1075748558</span></p>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <Button 
              variant="outline"
              onClick={() => navigate(-1)}
              className="border-green-600 text-green-600 hover:bg-green-50"
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