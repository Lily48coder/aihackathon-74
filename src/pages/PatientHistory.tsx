import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

const PatientHistory = () => {
  const navigate = useNavigate();
  const [medicalHistory, setMedicalHistory] = useState("");
  const [currentMedications, setCurrentMedications] = useState("");
  const [familyHistory, setFamilyHistory] = useState("");

  const handleNext = () => {
    navigate("/patient/symptoms");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-4">
      <Card className="max-w-4xl mx-auto p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-green-800">Patient History</h1>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="medical-history" className="text-green-700">Medical History</Label>
            <Textarea
              id="medical-history"
              placeholder="Please enter your medical history"
              value={medicalHistory}
              onChange={(e) => setMedicalHistory(e.target.value)}
              className="min-h-[100px] border-green-200 focus:border-green-400 focus:ring-green-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="current-medications" className="text-green-700">Current Medications</Label>
            <Textarea
              id="current-medications"
              placeholder="Please list your current medications"
              value={currentMedications}
              onChange={(e) => setCurrentMedications(e.target.value)}
              className="min-h-[100px] border-green-200 focus:border-green-400 focus:ring-green-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="family-history" className="text-green-700">Family History</Label>
            <Textarea
              id="family-history"
              placeholder="Please enter your family medical history"
              value={familyHistory}
              onChange={(e) => setFamilyHistory(e.target.value)}
              className="min-h-[100px] border-green-200 focus:border-green-400 focus:ring-green-400"
            />
          </div>

          <div className="flex justify-between pt-4">
            <Button 
              variant="outline"
              onClick={() => navigate(-1)}
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              Back
            </Button>
            <Button 
              onClick={handleNext}
              className="bg-green-600 hover:bg-green-700"
            >
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PatientHistory;