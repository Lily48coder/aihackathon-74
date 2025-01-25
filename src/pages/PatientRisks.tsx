import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { STATES } from "@/data/medical";

const RISK_COLORS = {
  low: "text-green-600",
  intermediate: "text-orange-500",
  high: "text-red-600"
};

const SELECTED_VENUES = [
  "Government Schools",
  "Community Halls or Panchayat Offices",
  "Anganwadi Centers"
];

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
  const [showCamps, setShowCamps] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const selectedStateData = STATES.find(state => state.name === selectedState);
  const areas = selectedStateData?.areas || [];

  useEffect(() => {
    const analyzeSymptoms = () => {
      const selectedCategory = location.state?.selectedCategory;
      const selectedSymptom = location.state?.selectedSymptom;

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

  const handleCheckCamps = () => {
    setShowCamps(true);
  };

  if (showCamps) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#ace3c0] to-neutral-50 p-4">
        <Card className="max-w-4xl mx-auto p-6 space-y-6 bg-white/90 backdrop-blur-sm border-neutral-200">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-neutral-800 mb-2">Your Location</h2>
              <div className="bg-[#ace3c0]/10 p-4 rounded-lg space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">State</label>
                  <Select onValueChange={setSelectedState} value={selectedState}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {STATES.map((state) => (
                        <SelectItem key={state.id} value={state.name}>
                          {state.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Area</label>
                  <Select 
                    onValueChange={setSelectedArea} 
                    value={selectedArea}
                    disabled={!selectedState}
                  >
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder={selectedState ? "Select area" : "Select state first"} />
                    </SelectTrigger>
                    <SelectContent>
                      {areas.map((area) => (
                        <SelectItem key={area} value={area}>
                          {area}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {selectedState && selectedArea && (
              <>
                <div>
                  <h2 className="text-xl font-semibold text-neutral-800 mb-2">Available Venues</h2>
                  <div className="bg-[#ace3c0]/10 p-4 rounded-lg">
                    <ul className="space-y-2">
                      {SELECTED_VENUES.map((venue, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="h-2 w-2 rounded-full bg-[#ace3c0]"></span>
                          <span className="text-neutral-700">{venue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-neutral-800 mb-2">Camp Timings</h2>
                  <div className="bg-[#ace3c0]/10 p-4 rounded-lg">
                    <p className="text-neutral-700">8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </>
            )}

            <Button 
              variant="outline"
              onClick={() => setShowCamps(false)}
              className="w-full border-neutral-600 text-neutral-600 hover:bg-[#ace3c0]/10"
            >
              Back to Potential Risks
            </Button>
          </div>
        </Card>
      </div>
    );
  }

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
            <Button
              className="w-full bg-[#ace3c0] hover:bg-[#ace3c0]/90 text-neutral-800"
              onClick={handleCheckCamps}
            >
              Check Available Medical Camps
            </Button>
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