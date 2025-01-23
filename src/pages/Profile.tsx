import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();
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
      
      <Card className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <p className="font-medium">{user?.name}</p>
          </div>
          <div>
            <label className="text-sm text-gray-600">Department</label>
            <p className="font-medium">{user?.department}</p>
          </div>
          <div>
            <label className="text-sm text-gray-600">Hospital</label>
            <p className="font-medium">{user?.hospital}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;