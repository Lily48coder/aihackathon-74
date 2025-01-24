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
  potentialDiseases: string[];
}

const PatientRisks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [assessment, setAssessment] = useState<RiskAssessment>({
    level: "low",
    percentage: 0,
    potentialDiseases: []
  });

  useEffect(() => {
    const analyzeSymptoms = () => {
      const selectedCategory = location.state?.selectedCategory;
      const selectedSymptom = location.state?.selectedSymptom;

      let riskLevel: keyof typeof RISK_COLORS = "low";
      let riskPercentage = 0;
      let diseases: string[] = [];

      if (selectedCategory === "Cardiovascular Diseases") {
        riskLevel = "high";
        riskPercentage = 75;
        diseases = [
          "Coronary Artery Disease",
          "Hypertensive Heart Disease",
          "Cardiac Arrhythmia"
        ];
      } else if (selectedCategory === "Respiratory Diseases") {
        riskLevel = "intermediate";
        riskPercentage = 45;
        diseases = [
          "Chronic Bronchitis",
          "Bronchial Asthma",
          "Upper Respiratory Tract Infection"
        ];
      } else {
        riskLevel = "low";
        riskPercentage = 25;
        diseases = [
          "Mild Inflammatory Condition",
          "Stress-Related Disorder",
          "Minor Systemic Infection"
        ];
      }

      setAssessment({
        level: riskLevel,
        percentage: riskPercentage,
        potentialDiseases: diseases
      });
    };

    analyzeSymptoms();
  }, [location.state]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <Card className="max-w-4xl mx-auto p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-900">Analysis</h1>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Symptoms</h2>
            <div className="flex items-center space-x-2">
              <p className={`text-lg font-medium ${RISK_COLORS[assessment.level]}`}>
                {assessment.level.charAt(0).toUpperCase() + assessment.level.slice(1)} Risk
              </p>
              <span className="text-gray-500">({assessment.percentage}%)</span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Potential Diseases</h2>
            <ul className="space-y-2">
              {assessment.potentialDiseases.map((disease, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  <span>{disease}</span>
                </li>
              ))}
            </ul>
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