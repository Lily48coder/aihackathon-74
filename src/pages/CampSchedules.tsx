import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const LOCAL_VENUES = [
  "Government Schools",
  "Community Halls or Panchayat Offices",
  "Anganwadi Centers",
  "Health Sub-Centers",
  "Village Temples or Religious Centers",
  "Self-Help Group (SHG) Centers",
  "Fairgrounds or Marketplaces"
];

const CampSchedules = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = JSON.parse(localStorage.getItem('patientData') || '{}');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ace3c0] to-neutral-50 p-4">
      <Card className="max-w-4xl mx-auto p-6 space-y-6 bg-white/90 backdrop-blur-sm border-neutral-200">
        <Button 
          variant="ghost" 
          className="mb-4"
          onClick={() => navigate('/patient/risks')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Potential Risks
        </Button>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-neutral-800 mb-2">Your Location</h2>
            <div className="bg-[#ace3c0]/10 p-4 rounded-lg">
              <p><span className="font-medium">State:</span> {userData.state}</p>
              <p><span className="font-medium">Area:</span> {userData.area}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-neutral-800 mb-2">Available Venues</h2>
            <div className="bg-[#ace3c0]/10 p-4 rounded-lg">
              <ul className="space-y-2">
                {LOCAL_VENUES.map((venue, index) => (
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
        </div>
      </Card>
    </div>
  );
};

export default CampSchedules;