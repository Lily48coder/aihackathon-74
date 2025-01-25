import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HOSPITALS, DEPARTMENTS } from "@/data/medical";

const SignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    hospital: "",
    department: ""
  });

  const [errors, setErrors] = useState({
    password: "",
    phone: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "password") {
      if (value.length < 4 || value.length > 13) {
        setErrors(prev => ({
          ...prev,
          password: "The password must contain 4 characters minimum and 13 maximum"
        }));
      } else {
        setErrors(prev => ({ ...prev, password: "" }));
      }
    }

    if (name === "phone") {
      setErrors(prev => ({
        ...prev,
        phone: value.length !== 10
      }));
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!errors.password && !errors.phone) {
      localStorage.setItem('signupData', JSON.stringify(formData));
      toast({
        title: "Successfully Registered!",
        description: "Please sign in with your new account.",
      });
      navigate("/sign-in");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-900">Doctor Sign Up</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`${errors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
              maxLength={10}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
              className={`${errors.password ? 'border-red-500 focus:border-red-500' : ''}`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="hospital">Hospital</Label>
            <Select 
              value={formData.hospital}
              onValueChange={(value) => setFormData(prev => ({ ...prev, hospital: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select hospital" />
              </SelectTrigger>
              <SelectContent>
                {HOSPITALS.map((hospital) => (
                  <SelectItem key={hospital.id} value={hospital.name}>
                    {hospital.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Select
              value={formData.department}
              onValueChange={(value) => setFormData(prev => ({ ...prev, department: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                {DEPARTMENTS.map((department) => (
                  <SelectItem key={department} value={department}>
                    {department}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>

        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Card>
    </div>
  );
};

export default SignUp;