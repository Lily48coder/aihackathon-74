import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CampSchedules = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6">
      <Button 
        variant="ghost" 
        className="mb-4"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>
      
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Camp Schedules</h1>
        <p>Camp schedules will appear here.</p>
      </Card>
    </div>
  );
};

export default CampSchedules;