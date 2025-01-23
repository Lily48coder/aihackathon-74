import { useAuth } from "@/context/AuthContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { STATES, SYMPTOMS, MOCK_PATIENTS } from "@/data/medical";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [selectedSymptom, setSelectedSymptom] = useState<string>("");

  // Find the state object for the selected state
  const stateObj = STATES.find(state => state.name === selectedState);

  // Filter patients based on selections
  const filteredPatients = MOCK_PATIENTS.filter(patient => {
    const matchesState = !selectedState || patient.state === selectedState;
    const matchesArea = !selectedArea || patient.area === selectedArea;
    const matchesSymptom = !selectedSymptom || patient.symptoms.includes(selectedSymptom);
    return matchesState && matchesArea && matchesSymptom;
  });

  // Calculate percentages
  const totalPatients = MOCK_PATIENTS.length;
  const percentageOfTotal = ((filteredPatients.length / totalPatients) * 100).toFixed(1);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome, Dr. {user?.name}</h1>
          <p className="text-gray-600">
            {user?.department} | {user?.hospital}
          </p>
        </div>
        <Button variant="ghost" onClick={() => navigate("/camp-schedules")}>
          <MoreVertical className="h-6 w-6" />
        </Button>
      </div>

      {/* Filters */}
      <div className="grid gap-4 mb-8">
        <div className="space-y-2">
          <label className="text-sm font-medium">State</label>
          <Select onValueChange={setSelectedState}>
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
          <label className="text-sm font-medium">Area</label>
          <Select 
            onValueChange={setSelectedArea} 
            disabled={!selectedState}
          >
            <SelectTrigger className="bg-white">
              <SelectValue placeholder={selectedState ? "Select area" : "Select state first"} />
            </SelectTrigger>
            <SelectContent>
              {stateObj && (
                <SelectItem value={stateObj.area}>
                  {stateObj.area}
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Symptoms</label>
          <Select onValueChange={setSelectedSymptom}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select symptom" />
            </SelectTrigger>
            <SelectContent>
              {SYMPTOMS.map((symptom) => (
                <SelectItem key={symptom.id} value={symptom.name}>
                  {symptom.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Patient List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Patients</h2>
        {filteredPatients.map((patient) => (
          <Card key={patient.id} className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{patient.name}</h3>
                <p className="text-sm text-gray-600">
                  {patient.state}, {patient.area}
                </p>
                <p className="text-sm text-gray-600">
                  Symptoms: {patient.symptoms.join(", ")}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Statistics */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Showing {filteredPatients.length} patients ({percentageOfTotal}% of total)
        </p>
      </div>
    </div>
  );
};

export default Dashboard;