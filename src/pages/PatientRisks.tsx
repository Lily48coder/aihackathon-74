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

const RISK_DATA: Record<string, RiskAssessment> = {
  "Heart Problems": {
    level: "high",
    percentage: 78,
    potentialIssues: [
      "Possible heart failure",
      "Signs of cardiac arrest",
      "Hypertension-related complications"
    ]
  },
  "Brain Problems": {
    level: "high",
    percentage: 81,
    potentialIssues: [
      "Stroke indicators",
      "Risk of epilepsy",
      "Cognitive dysfunction"
    ]
  },
  "Lung Problems": {
    level: "intermediate",
    percentage: 60,
    potentialIssues: [
      "Asthma symptoms",
      "COPD indicators",
      "Lung infection"
    ]
  },
  "Stomach and Digestive Problems": {
    level: "intermediate",
    percentage: 55,
    potentialIssues: [
      "Gastric infection",
      "Signs of IBS",
      "Acid reflux or indigestion"
    ]
  },
  "Infectious Problems": {
    level: "intermediate",
    percentage: 50,
    potentialIssues: [
      "Possible viral infection",
      "Seasonal flu or dengue",
      "Systemic inflammatory response"
    ]
  },
  "Skin Problems": {
    level: "low",
    percentage: 30,
    potentialIssues: [
      "Skin allergy",
      "Fungal or bacterial infection",
      "Dermatitis"
    ]
  },
  "Bone and Joint Problems": {
    level: "intermediate",
    percentage: 45,
    potentialIssues: [
      "Arthritis",
      "Postural issues",
      "Musculoskeletal strain"
    ]
  },
  "Eye and Vision Problems": {
    level: "low",
    percentage: 25,
    potentialIssues: [
      "Possible eye strain",
      "Cataract development",
      "Night blindness"
    ]
  },
  "Kidney and Urinary Problems": {
    level: "high",
    percentage: 70,
    potentialIssues: [
      "Possible UTI",
      "Early signs of kidney infection",
      "Urinary tract blockage"
    ]
  },
  "Reproductive and Sexual Health Problems": {
    level: "intermediate",
    percentage: 50,
    potentialIssues: [
      "Hormonal imbalance",
      "PCOS or endometriosis",
      "Infections or inflammation"
    ]
  },
  "Mental Health Problems": {
    level: "high",
    percentage: 85,
    potentialIssues: [
      "Possible depression",
      "Signs of anxiety",
      "Mood disorder indicators"
    ]
  },
  "Diabetes Problems": {
    level: "intermediate",
    percentage: 58,
    potentialIssues: [
      "Fluctuating blood sugar",
      "Early signs of type 2 diabetes",
      "Insulin resistance"
    ]
  },
  "Cancer Problems": {
    level: "high",
    percentage: 90,
    potentialIssues: [
      "Tumor markers detected",
      "Persistent unexplained symptoms",
      "Needs urgent screening"
    ]
  },
  "Liver Problems": {
    level: "intermediate",
    percentage: 60,
    potentialIssues: [
      "Fatty liver symptoms",
      "Hepatitis signs",
      "Liver dysfunction"
    ]
  },
  "Dental Problems": {
    level: "low",
    percentage: 25,
    potentialIssues: [
      "Gum inflammation",
      "Dental cavity or decay",
      "Tooth infection"
    ]
  },
  "Nutritional Deficiency Problems": {
    level: "intermediate",
    percentage: 50,
    potentialIssues: [
      "Lack of iron or vitamins",
      "Immune suppression",
      "Fatigue due to poor nutrition"
    ]
  }
};

const PatientRisks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [assessment, setAssessment] = useState<RiskAssessment>({
    level: "low",
    percentage: 0,
    potentialIssues: []
  });

  useEffect(() => {
    const selectedCategory = location.state?.selectedCategory;
    if (selectedCategory && RISK_DATA[selectedCategory]) {
      setAssessment(RISK_DATA[selectedCategory]);
    } else {
      setAssessment({
        level: "low",
        percentage: 20,
        potentialIssues: ["General observation", "Minor symptom pattern"]
      });
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ace3c0] to-neutral-50 p-4">
      <Card className="max-w-4xl mx-auto p-6 space-y-6 bg-white/90 backdrop-blur-sm border-neutral-200">
        <h1 className="text-2xl font-bold text-center text-neutral-900">Potential Risks</h1>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-neutral-800">Risk Assessment</h2>
            <div className="flex items-center space-x-2 bg-[#ace3c0]/10 p-4 rounded-lg">
              <p className={`text-lg font-medium ${RISK_COLORS[assessment.level]}`}>
                {assessment.level.charAt(0).toUpperCase() + assessment.level.slice(1)} Risk
              </p>
              <span className={RISK_COLORS[assessment.level]}>({assessment.percentage}%)</span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-neutral-800">Potential Issues</h2>
            <div className="bg-[#ace3c0]/10 p-4 rounded-lg">
              <ul className="space-y-2">
                {assessment.potentialIssues.map((issue, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-[#ace3c0]"></span>
                    <span className="text-neutral-700">{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-neutral-800">Contact Information</h2>
            <div className="space-y-2 text-neutral-700 bg-[#ace3c0]/10 p-4 rounded-lg">
              <p>National Health Support Helpline: <span className="font-medium">91-20-2770 3000</span></p>
              <p>State Helpline: <span className="font-medium">1075748558</span></p>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <Button 
              variant="outline"
              onClick={() => navigate(-1)}
              className="border-neutral-600 text-neutral-600 hover:bg-[#ace3c0]/10"
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
