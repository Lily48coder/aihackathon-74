import { Card } from "@/components/ui/card";

const PatientRegistration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-4">
      <Card className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4 text-green-800">Patient Registration</h1>
        <p className="text-green-700">Patient registration form will appear here.</p>
      </Card>
    </div>
  );
};

export default PatientRegistration;