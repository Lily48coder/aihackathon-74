import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const INDIAN_LANGUAGES = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिंदी (Hindi)" },
  { code: "ta", name: "தமிழ் (Tamil)" },
  { code: "te", name: "తెలుగు (Telugu)" },
  { code: "bn", name: "বাংলা (Bengali)" },
  { code: "mr", name: "मराठी (Marathi)" },
  { code: "ur", name: "اردو (Urdu)" },
  { code: "gu", name: "ગુજરાતી (Gujarati)" },
  { code: "kn", name: "ಕನ್ನಡ (Kannada)" },
  { code: "pa", name: "ਪੰਜਾਬੀ (Punjabi)" },
  { code: "ml", name: "മലയാളം (Malayalam)" },
];

const PatientLanguageSelect = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleContinue = () => {
    localStorage.setItem("preferredLanguage", selectedLanguage);
    navigate("/patient/sign-in");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-green-800">Select Your Language</h1>
        <p className="text-center text-gray-600">Choose your preferred language</p>
        
        <RadioGroup
          value={selectedLanguage}
          onValueChange={setSelectedLanguage}
          className="space-y-3"
        >
          {INDIAN_LANGUAGES.map((language) => (
            <div key={language.code} className="flex items-center space-x-2">
              <RadioGroupItem value={language.code} id={language.code} />
              <Label htmlFor={language.code} className="cursor-pointer">
                {language.name}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <Button 
          onClick={handleContinue}
          className="w-full bg-green-600 hover:bg-green-700"
        >
          Continue
        </Button>

        <Button 
          variant="outline" 
          className="w-full border-green-600 text-green-600 hover:bg-green-50"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Card>
    </div>
  );
};

export default PatientLanguageSelect;