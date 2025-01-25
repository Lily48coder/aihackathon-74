import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const PatientSignIn = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 4 || value.length > 13) {
      setPasswordError("The password must contain 4 characters minimum and 13 maximum");
    } else {
      setPasswordError("");
    }
    setPassword(value);
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordError) {
      toast({
        title: "Successfully Signed In!",
        description: "Welcome back to the platform.",
      });
      navigate("/patient/history");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-green-800">Patient Sign In</h1>
        
        <form onSubmit={handleSignIn} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-green-700">Username</Label>
            <Input
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="border-green-200 focus:border-green-400 focus:ring-green-400"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-green-700">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
              className={`border-green-200 focus:border-green-400 focus:ring-green-400 ${
                passwordError ? 'border-red-500 focus:border-red-500' : ''
              }`}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Sign In
          </Button>
        </form>

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

export default PatientSignIn;