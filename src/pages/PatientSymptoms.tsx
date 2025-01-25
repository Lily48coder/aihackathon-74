import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const DISEASE_CATEGORIES = {
  "Heart Problems": [
    "Chest pain",
    "Breathlessness",
    "Swelling in legs",
    "Tiredness",
    "Dizziness"
  ],
  "Brain Problems": [
    "Sudden weakness or numbness especially on one side",
    "Difficulty speaking or understanding",
    "Severe headache",
    "Fits or seizures",
    "Memory loss or confusion",
    "Loss of balance"
  ],
  "Lung Problems": [
    "Difficulty breathing",
    "Persistent cough",
    "Chest tightness",
    "Coughing up blood",
    "Wheezing sound while breathing",
    "Frequent infections"
  ],
  "Stomach and Digestive Problems": [
    "Stomach pain",
    "Loose motions or diarrhea",
    "Constipation",
    "Bloating or gas",
    "Burning sensation in the stomach",
    "Loss of appetite"
  ],
  "Infectious Problems": [
    "Fever",
    "Body ache",
    "Chills",
    "Headache",
    "Weakness",
    "Sweating"
  ],
  "Skin Problems": [
    "Itchy skin",
    "Redness",
    "Dry patches",
    "Swelling or blisters",
    "Cracking or peeling skin"
  ],
  "Bone and Joint Problems": [
    "Joint pain",
    "Swelling in joints",
    "Stiffness in movement",
    "Backache",
    "Weakness in the affected area"
  ],
  "Eye and Vision Problems": [
    "unclear vision",
    "Pain in the eyes",
    "Sensitivity to light",
    "Red eyes",
    "Difficulty seeing at night"
  ],
  "Kidney and Urinary Problems": [
    "Pain in the lower back",
    "Burning sensation while urinating",
    "Frequent urination",
    "Blood in urine",
    "Cloudy or foul-smelling urine"
  ],
  "Reproductive and Sexual Health Problems": [
    "Pain during menstruation",
    "Missed periods",
    "Unusual discharge",
    "Pain during intercourse",
    "Itching or irritation in the genital area"
  ],
  "Mental Health Problems": [
    "Feeling sad",
    "Loss of interest in activities",
    "Sleeplessness",
    "oversleeping",
    "irritable",
    "Difficulty concentrating"
  ],
  "Diabetes Problems": [
    "Excessive thirst",
    "Frequent urination",
    "Feeling tired or",
    "Weight loss",
    "Blurred vision"
  ],
  "Cancer Problems": [
    "Lumps or swelling",
    "Unexplained weight loss",
    "Fatigue",
    "Unusual bleeding",
    "Persistent pain in specific areas"
  ],
  "Liver Problems": [
    "Yellow eyes",
    "Weakness",
    "Loss of appetite",
    "Swelling in the stomach",
    "Nausea or vomiting"
  ],
  "Dental Problems": [
    "Toothache",
    "Swollen gums",
    "Bad breath",
    "Sensitivity to hot or cold foods"
  ],
  "Nutritional Deficiency Problems": [
    "Pale skin",
    "Weakness tiredness",
    "Frequent illness or infections",
    "Brittle nails"
  ]
};

const PatientSymptoms = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSymptom, setSelectedSymptom] = useState<string>("");

  const handleNext = () => {
    if (selectedSymptom) {
      navigate("/patient/risks");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-4" data-patient-interface>
      <Card className="max-w-4xl mx-auto p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-green-800">Symptoms</h1>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="category" className="text-green-700">Disease Category</Label>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full select-trigger">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(DISEASE_CATEGORIES).map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedCategory && (
            <div className="space-y-2">
              <Label htmlFor="symptom" className="text-green-700">Specific Symptom</Label>
              <Select
                value={selectedSymptom}
                onValueChange={setSelectedSymptom}
              >
                <SelectTrigger className="w-full select-trigger">
                  <SelectValue placeholder="Select a symptom" />
                </SelectTrigger>
                <SelectContent>
                  {DISEASE_CATEGORIES[selectedCategory as keyof typeof DISEASE_CATEGORIES].map((symptom) => (
                    <SelectItem key={symptom} value={symptom}>
                      {symptom}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

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
              disabled={!selectedSymptom}
              className="bg-green-600 hover:bg-green-700 disabled:bg-green-300"
            >
              Analyze
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PatientSymptoms;