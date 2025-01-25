import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login, setUserData } = useAuth();
  const [email, setEmail] = useState("");
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
      const formData = JSON.parse(localStorage.getItem('signupData') || '{}');
      const userData = {
        name: formData.name || 'Sahiti Sri',
        department: formData.department || 'Cardiology',
        hospital: formData.hospital || 'City Hospital'
      };
      
      setUserData(userData);
      login();
      toast({
        title: "Successfully Signed In!",
        description: "Welcome back to the platform.",
      });
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-900">Doctor Sign In</h1>
        
        <form onSubmit={handleSignIn} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
              className={`bg-white ${
                passwordError ? 'border-red-500 focus:border-red-500' : ''
              }`}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          <Button type="submit" className="w-full bg-[#0077B6] hover:bg-[#0077B6]/90">
            Sign In
          </Button>
        </form>

        <Button 
          variant="outline" 
          className="w-full border-[#0077B6] text-[#0077B6] hover:bg-[#90E0EF]/10"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Card>
    </div>
  );
};

export default SignIn;