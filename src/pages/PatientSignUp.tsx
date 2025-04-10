import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { STATES } from "@/data/medical";

const PatientSignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    state: "",
    area: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    phone: false,
    age: "",
    email: "",
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

    if (name === "age") {
      const ageNum = parseInt(value);
      setErrors(prev => ({
        ...prev,
        age: ageNum <= 0 ? "Age must be a positive number" : ""
      }));
    }

    if (name === "email") {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setErrors(prev => ({
        ...prev,
        email: isValid ? "" : "Invalid email address"
      }));
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!errors.password && !errors.phone && !errors.age && !errors.email) {
      toast({
        title: "Successfully Registered!",
        description: "Please sign in with your new account.",
      });
      navigate("/patient/sign-in");
    }
  };

  const selectedState = STATES.find(state => state.name === formData.state);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-900">Patient Sign Up</h1>

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
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              name="age"
              type="number"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
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
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
            {errors.phone && <p className="text-red-500 text-sm mt-1">Phone number must be 10 digits</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, state: value }))}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {STATES.map((state) => (
                  <SelectItem key={state.name} value={state.name}>
                    {state.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="area">Area</Label>
            <Select 
              onValueChange={(value) => setFormData(prev => ({ ...prev, area: value }))}
              disabled={!selectedState}
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder={selectedState ? "Select area" : "Select state first"} />
              </SelectTrigger>
              <SelectContent>
                {selectedState?.areas.map((area) => (
                  <SelectItem key={area} value={area}>
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleChange}
              required
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

export default PatientSignUp;

