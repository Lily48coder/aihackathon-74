import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { STATES, SYMPTOMS, MOCK_PATIENTS } from "@/data/medical";
import type { DoctorInfo, Patient } from "@/types/medical";
import { useNavigate } from "react-router-dom";

interface DoctorDashboardProps {
  doctor: DoctorInfo;
}

const DoctorDashboard = ({ doctor }: DoctorDashboardProps) => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedSymptom, setSelectedSymptom] = useState("");
  
  // Filter patients based on selections
  const filteredPatients = MOCK_PATIENTS.filter(patient => {
    return (!selectedState || patient.state === selectedState) &&
           (!selectedArea || patient.area === selectedArea) &&
           (!selectedSymptom || patient.symptoms.includes(selectedSymptom));
  });

  const patientPercentage = (filteredPatients.length / MOCK_PATIENTS.length) * 100;

  const selectedStateData = STATES.find(state => state.name === selectedState);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome, Dr. {doctor.name}</h1>
            <p className="text-gray-600">{doctor.department} - {doctor.hospital}</p>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/camp-schedules')}
          >
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>

        {/* Search Filters */}
        <Card className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>State</Label>
            <Select onValueChange={setSelectedState}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {STATES.map((state) => (
                  <SelectItem key={state.id} value={state.name}>
                    {state.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Area</Label>
            <Select 
              onValueChange={setSelectedArea}
              disabled={!selectedState}
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select area" />
              </SelectTrigger>
              <SelectContent>
                {selectedStateData && (
                  <SelectItem value={selectedStateData.area}>
                    {selectedStateData.area}
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Symptoms</Label>
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
        </Card>

        {/* Patient List */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Patients</h2>
          <div className="space-y-4">
            {filteredPatients.map((patient) => (
              <Card key={patient.id} className="p-4">
                <h3 className="font-medium">{patient.name}</h3>
                <p className="text-sm text-gray-600">
                  {patient.state}, {patient.area}
                </p>
                <p className="text-sm text-gray-600">
                  Symptoms: {patient.symptoms.join(", ")}
                </p>
              </Card>
            ))}
          </div>
          
          <div className="mt-6 flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Total Patients: {filteredPatients.length}
            </p>
            <p className="text-sm text-gray-600">
              Percentage: {patientPercentage.toFixed(1)}%
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DoctorDashboard;